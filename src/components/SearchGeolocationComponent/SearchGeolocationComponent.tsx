import React, { ChangeEvent, useContext, useState } from 'react';
import { Autocomplete, Card, CardContent, CircularProgress, TextField } from '@mui/material';
import { GeolocationType } from '../../types/geolocationTypes';
import GeolocationOptionComponent from './GeolocationOptionComponent';
import AppContext from '../../appContext';
import fetchGeolocationData from '../../api/fetchGeolocationData';

const SearchGeolocationComponent = () => {
  const { geolocation, setGeolocation } = useContext(AppContext);
  const [options, setOptions] = useState<GeolocationType[]>([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    setLoading(true);

    const location = await fetchGeolocationData(event.target.value).finally(() =>
      setLoading(false),
    );

    if (location?.results) {
      setOptions(location.results);
    }
  };

  const handleAutocompleteChange = (
    event: React.SyntheticEvent,
    newValue: GeolocationType | null,
  ) => {
    setGeolocation(newValue);
  };

  // TODO: Fix "MUI: The value provided to Autocomplete is invalid." warn.
  return (
    <Card>
      <CardContent>
        <Autocomplete
          disablePortal
          id='geolocation-search'
          options={options}
          sx={{ width: '100%', marginTop: 1 }}
          loading={loading}
          value={geolocation}
          getOptionLabel={(option) => option.name}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          onChange={handleAutocompleteChange}
          renderInput={(params) => (
            <TextField
              {...params}
              label='Location'
              onChange={handleInputChange}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loading ? <CircularProgress color='inherit' size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
            />
          )}
          renderOption={(params, option) => (
            <GeolocationOptionComponent key={option.id} params={params} geolocation={option} />
          )}
        />
      </CardContent>
    </Card>
  );
};

export default SearchGeolocationComponent;
