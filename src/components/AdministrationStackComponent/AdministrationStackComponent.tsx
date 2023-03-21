import React from 'react';
import { Divider, Stack, Typography } from '@mui/material';
import { GeolocationType } from '../../types/geolocationTypes';

type AdministrationStackComponentPropTypes = {
  geolocation: GeolocationType | null;
};

const AdministrationStackComponent = ({ geolocation }: AdministrationStackComponentPropTypes) => {
  if (!geolocation) return <></>;

  return (
    <Stack direction='row' divider={<Divider orientation='vertical' flexItem />} spacing={1}>
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
