import React, { useContext, useState } from 'react';
import AppContext from '../../appContext';
import { Card, CardContent, Typography } from '@mui/material';
import ChartComponent from '../ChartComponent/ChartComponent';

enum EXPANDED_CHARTS_ENUM {
  temperature2m,
  windspeed10m,
  relativehumidity2m,
  rain,
  snowfall,
  visibility,
}

const WeeklyWeatherCardComponent = () => {
  const [expanded, setExpanded] = useState<EXPANDED_CHARTS_ENUM>(
    EXPANDED_CHARTS_ENUM.temperature2m,
  );
  const { weather } = useContext(AppContext);

  if (!weather) return <></>;

  return (
    <Card sx={{ marginTop: 2 }}>
      <CardContent>
        <Typography variant='h5'>Weekly Weather</Typography>
        <ChartComponent
          hours={weather?.hourly.time}
          data={weather?.hourly.temperature_2m}
          unit={weather?.hourly_units.temperature_2m}
          title='Temperature'
          expanded={expanded === EXPANDED_CHARTS_ENUM.temperature2m}
          setExpanded={() => setExpanded(EXPANDED_CHARTS_ENUM.temperature2m)}
        />
        <ChartComponent
          hours={weather?.hourly.time}
          data={weather?.hourly.windspeed_10m}
          title='Wind speed'
          unit={weather?.hourly_units.windspeed_10m}
          expanded={expanded === EXPANDED_CHARTS_ENUM.windspeed10m}
          setExpanded={() => setExpanded(EXPANDED_CHARTS_ENUM.windspeed10m)}
        />
        <ChartComponent
          hours={weather?.hourly.time}
          data={weather?.hourly.relativehumidity_2m}
          title='Relative humidity'
          unit={weather?.hourly_units.relativehumidity_2m}
          expanded={expanded === EXPANDED_CHARTS_ENUM.relativehumidity2m}
          setExpanded={() => setExpanded(EXPANDED_CHARTS_ENUM.relativehumidity2m)}
        />
        <ChartComponent
          hours={weather?.hourly.time}
          data={weather?.hourly.rain}
          title='Rain'
          unit={weather?.hourly_units.rain}
          expanded={expanded === EXPANDED_CHARTS_ENUM.rain}
          setExpanded={() => setExpanded(EXPANDED_CHARTS_ENUM.rain)}
        />
        <ChartComponent
          hours={weather?.hourly.time}
          data={weather?.hourly.snowfall}
          title='Snow fall'
          unit={weather?.hourly_units.snowfall}
          expanded={expanded === EXPANDED_CHARTS_ENUM.snowfall}
          setExpanded={() => setExpanded(EXPANDED_CHARTS_ENUM.snowfall)}
        />
        <ChartComponent
          hours={weather?.hourly.time}
          data={weather?.hourly.visibility}
          title='Visibility'
          unit={weather?.hourly_units.visibility}
          expanded={expanded === EXPANDED_CHARTS_ENUM.visibility}
          setExpanded={() => setExpanded(EXPANDED_CHARTS_ENUM.visibility)}
        />
      </CardContent>
    </Card>
  );
};

export default WeeklyWeatherCardComponent;
