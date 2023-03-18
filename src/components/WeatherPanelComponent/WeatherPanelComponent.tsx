import React, { useContext, useEffect } from 'react';
import AppContext from '../../appContext';
import { openMeteoApiInstance } from '../../apiInstances';
import { AxiosResponse } from 'axios';
import { WeatherType } from '../../types/weatherTypes';
import { Grid } from '@mui/material';

const WeatherPanelComponent = () => {
  const { geolocation, weather, setWeather } = useContext(AppContext);

  useEffect(() => {
    if (geolocation) {
      openMeteoApiInstance
        .get('', {
          params: { latitude: geolocation?.latitude, longitude: geolocation?.longitude },
        })
        .then(({ data }: AxiosResponse<WeatherType>) => setWeather(data));
    }
  }, [geolocation]);

  const geolocationString = JSON.stringify(geolocation, null, 2);
  const weatherString = weather ? JSON.stringify(weather, null, 2) : '';
  const geolocationJsonWithLineBreaks = geolocationString.replace(/\n/g, '<br />');
  const weatherJsonWithLineBreaks = weatherString.replace(/\n/g, '<br />');

  return (
    <Grid container>
      <Grid item>
        <div dangerouslySetInnerHTML={{ __html: geolocationJsonWithLineBreaks }} />
      </Grid>

      <Grid item>
        <div dangerouslySetInnerHTML={{ __html: weatherJsonWithLineBreaks }} />
      </Grid>
    </Grid>
  );
};

export default WeatherPanelComponent;
