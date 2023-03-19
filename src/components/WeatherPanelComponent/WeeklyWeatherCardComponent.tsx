import React, { useContext } from 'react';
import AppContext from '../../appContext';
import { Card, CardContent, Typography } from '@mui/material';
import ChartComponent from '../ChartComponent/ChartComponent';

const WeeklyWeatherCardComponent = () => {
  const { weather } = useContext(AppContext);

  if (!weather) return <></>;

  return (
    <Card sx={{ marginTop: 2 }}>
      <CardContent>
        <Typography variant='h4'>Weekly data</Typography>
        <ChartComponent
          hours={weather?.hourly.time}
          data={weather?.hourly.temperature_2m}
          title='Temperature'
          unit={weather?.hourly_units.temperature_2m}
        />
        <ChartComponent
          hours={weather?.hourly.time}
          data={weather?.hourly.windspeed_10m}
          title='Wind speed'
          unit={weather?.hourly_units.windspeed_10m}
        />
        <ChartComponent
          hours={weather?.hourly.time}
          data={weather?.hourly.relativehumidity_2m}
          title='Relative humidity'
          unit={weather?.hourly_units.relativehumidity_2m}
        />
        <ChartComponent
          hours={weather?.hourly.time}
          data={weather?.hourly.rain}
          title='Rain'
          unit={weather?.hourly_units.rain}
        />
        <ChartComponent
          hours={weather?.hourly.time}
          data={weather?.hourly.snowfall}
          title='Snow fall'
          unit={weather?.hourly_units.snowfall}
        />
        <ChartComponent
          hours={weather?.hourly.time}
          data={weather?.hourly.visibility}
          title='Visibility'
          unit={weather?.hourly_units.visibility}
        />
      </CardContent>
    </Card>
  );
};

export default WeeklyWeatherCardComponent;
