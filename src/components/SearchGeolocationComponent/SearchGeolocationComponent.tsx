import React, { ChangeEvent, useContext, useState } from 'react';
import { Autocomplete, Card, CardContent, CircularProgress, TextField } from '@mui/material';
import { GeolocationResponseType, GeolocationType } from '../../types/geolocationTypes';
import { geolocationApiInstance } from '../../apiInstances';
import { AxiosResponse } from 'axios';
import GeolocationOptionComponent from './GeolocationOptionComponent';
import AppContext from '../../appContext';

const SearchGeolocationComponent = () => {
  const { geolocation, setGeolocation } = useContext(AppContext);
  const [options, setOptions] = useState<GeolocationType[]>([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLoading(true);

    geolocationApiInstance
      .get('', { params: { name: event.target.value } })
      .then((res: AxiosResponse<GeolocationResponseType>) => {
        if (res.data.results) {
          setOptions(res.data.results);
        }
      })
      .finally(() => setLoading(false));
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
