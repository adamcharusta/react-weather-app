import React, { useContext } from 'react';
import AppContext from '../../appContext';
import { Card, CardContent, Grid, Tooltip, Typography } from '@mui/material';
import moment from 'moment-timezone';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import getWeatherDescription from './getWeatherDescription';

const CurrentWeatherCardComponent = () => {
  const { geolocation, weather } = useContext(AppContext);
  const dateTimeFormat = 'DD-MM-yyyy hh:mm';
  const timeFormat = 'hh:mm';

  return (
    <>
      <Card>
        <CardContent>
          <Grid item>
            <Typography color='text.secondary' gutterBottom>
              {moment().format(dateTimeFormat)}
            </Typography>
          </Grid>

          <Grid container justifyContent='space-between'>
            <Grid item>
              <Typography variant='h2'>{geolocation?.name}</Typography>
            </Grid>
            <Grid item>
              <Typography variant='h2'>
                {weather?.current_weather.temperature}
                {weather?.hourly_units.temperature_2m}
              </Typography>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12} sm={12} md={6}>
              <Typography variant='h6'>
                <Tooltip
                  title='Time of last measurement'
                  arrow
                  disableInteractive
                  placement='bottom'
                >
                  <span>
                    Time: {moment(weather?.current_weather.time).format(timeFormat)}{' '}
                    {weather?.timezone_abbreviation}
                  </span>
                </Tooltip>
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <Typography variant='h6'>
                Local time:{' '}
                {moment()
                  .tz(geolocation?.timezone as string)
                  ?.format(timeFormat)}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <Typography variant='h6'>
                Wind speed: {weather?.current_weather.windspeed}{' '}
                {weather?.hourly_units.windspeed_10m}
              </Typography>
            </Grid>

            <Grid item container xs={12} sm={12} md={6}>
              <Grid item>
                <Typography variant='h6'>
                  Wind direction: {weather?.current_weather.winddirection}
                </Typography>
              </Grid>
              <Grid item>
                <ArrowUpwardIcon
                  sx={{ transform: `rotate(${weather?.current_weather.winddirection}deg)` }}
                />
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Typography variant='h6'>
                <Tooltip
                  title={`WMO Weather interpretation code: ${weather?.current_weather.weathercode}`}
                  arrow
                  disableInteractive
                  placement='bottom'
                >
                  <span>
                    Weather: {getWeatherDescription(weather?.current_weather.weathercode)}
                  </span>
                </Tooltip>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default CurrentWeatherCardComponent;