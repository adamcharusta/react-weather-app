import React, { useContext, useEffect } from 'react';
import AppContext from '../../appContext';
import { openMeteoApiInstance } from '../../api/apiInstances';
import { AxiosResponse } from 'axios';
import { WeatherType } from '../../types/weatherTypes';
import CurrentWeatherCardComponent from './CurrentWeatherCardComponent';
import WeeklyWeatherCardComponent from './WeeklyWeatherCardComponent';
import { Box, Card, CardContent, CircularProgress, Typography } from '@mui/material';

const WeatherPanelComponent = () => {
  const { geolocation, weather, setWeather } = useContext(AppContext);

  useEffect(() => {
    if (geolocation) {
      openMeteoApiInstance
        .get('', {
          params: {
            latitude: geolocation?.latitude,
            longitude: geolocation?.longitude,
            timezone: geolocation?.timezone,
          },
        })
        .then(({ data }: AxiosResponse<WeatherType>) => setWeather(data));
    }
  }, [geolocation]);

  if (!geolocation) {
    return (
      <Card sx={{ marginTop: 2 }}>
        <CardContent>
          <Typography>No location selected. Select a locality for information.</Typography>
        </CardContent>
      </Card>
    );
  } else if (!weather) {
    return (
      <Box width='100%' height={400} display='flex' justifyContent='center' alignItems='center'>
        <CircularProgress size={250} />
      </Box>
    );
  }

  return (
    <>
      <CurrentWeatherCardComponent />
      <WeeklyWeatherCardComponent />
    </>
  );
};

export default WeatherPanelComponent;
