import React, { useContext, useState } from 'react';
import AppContext from '../../appContext';
import { Card, CardContent, Typography } from '@mui/material';
import ChartComponent from '../ChartComponent/ChartComponent';

const enum EXPANDED_CHARTS {
  temperature2m,
  windspeed10m,
  relativehumidity2m,
  rain,
  snowfall,
  visibility,
}

const WeeklyWeatherCardComponent = () => {
  const [expanded, setExpanded] = useState<EXPANDED_CHARTS>(EXPANDED_CHARTS.temperature2m);
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
          expanded={expanded === EXPANDED_CHARTS.temperature2m}
          setExpanded={() => setExpanded(EXPANDED_CHARTS.temperature2m)}
        />
        <ChartComponent
          hours={weather?.hourly.time}
          data={weather?.hourly.windspeed_10m}
          title='Wind speed'
          unit={weather?.hourly_units.windspeed_10m}
          expanded={expanded === EXPANDED_CHARTS.windspeed10m}
          setExpanded={() => setExpanded(EXPANDED_CHARTS.windspeed10m)}
        />
        <ChartComponent
          hours={weather?.hourly.time}
          data={weather?.hourly.relativehumidity_2m}
          title='Relative humidity'
          unit={weather?.hourly_units.relativehumidity_2m}
          expanded={expanded === EXPANDED_CHARTS.relativehumidity2m}
          setExpanded={() => setExpanded(EXPANDED_CHARTS.relativehumidity2m)}
        />
        <ChartComponent
          hours={weather?.hourly.time}
          data={weather?.hourly.rain}
          title='Rain'
          unit={weather?.hourly_units.rain}
          expanded={expanded === EXPANDED_CHARTS.rain}
          setExpanded={() => setExpanded(EXPANDED_CHARTS.rain)}
        />
        <ChartComponent
          hours={weather?.hourly.time}
          data={weather?.hourly.snowfall}
          title='Snow fall'
          unit={weather?.hourly_units.snowfall}
          expanded={expanded === EXPANDED_CHARTS.snowfall}
          setExpanded={() => setExpanded(EXPANDED_CHARTS.snowfall)}
        />
        <ChartComponent
          hours={weather?.hourly.time}
          data={weather?.hourly.visibility}
          title='Visibility'
          unit={weather?.hourly_units.visibility}
          expanded={expanded === EXPANDED_CHARTS.visibility}
          setExpanded={() => setExpanded(EXPANDED_CHARTS.visibility)}
        />
      </CardContent>
    </Card>
  );
};

export default WeeklyWeatherCardComponent;
