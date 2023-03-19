import React from 'react';
import { Divider, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { GeolocationType } from '../../types/geolocationTypes';

type AdministrationStackComponentPropTypes = {
  geolocation: GeolocationType | null;
};

const AdministrationStackComponent = ({ geolocation }: AdministrationStackComponentPropTypes) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  if (!geolocation) return <></>;

  return (
    <Stack
      direction={isSmallScreen ? 'column' : 'row'}
      divider={<Divider orientation='vertical' flexItem />}
      spacing={1}
    >
      {geolocation?.admin4 && (
        <Typography component='span' color='text.secondary'>
          {geolocation.admin4}
        </Typography>
      )}
      {geolocation?.admin3 && (
        <Typography component='span' color='text.secondary'>
          {geolocation.admin3}
        </Typography>
      )}
      {geolocation?.admin2 && (
        <Typography component='span' color='text.secondary'>
          {geolocation.admin2}
        </Typography>
      )}
      {geolocation?.admin1 && (
        <Typography component='span' color='text.secondary'>
          {geolocation.admin1}
        </Typography>
      )}
    </Stack>
  );
};

export default AdministrationStackComponent;
