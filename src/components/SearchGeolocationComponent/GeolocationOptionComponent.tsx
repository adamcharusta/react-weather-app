import React from 'react';
import { GeolocationType } from '../../types/geolocationTypes';
import { Divider, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import Flag from 'react-world-flags';

interface SearchOptionComponentPropsTypes {
  geolocation: GeolocationType;
  params: React.HTMLAttributes<HTMLLIElement>;
}

const GeolocationOptionComponent = ({ geolocation, params }: SearchOptionComponentPropsTypes) => {
  return (
    <ListItem {...params}>
      <ListItemIcon>
        <Flag code={geolocation.country_code} style={{ width: 50 }} />
      </ListItemIcon>

      <ListItemText>
        {geolocation.name}
        <Stack direction='row' divider={<Divider orientation='vertical' flexItem />} spacing={1}>
          {geolocation.admin3 && (
            <Typography component='span' color='text.secondary'>
              {geolocation.admin3}
            </Typography>
          )}
          {geolocation.admin2 && (
            <Typography component='span' color='text.secondary'>
              {geolocation.admin2}
            </Typography>
          )}
          {geolocation.admin1 && (
            <Typography component='span' color='text.secondary'>
              {geolocation.admin1}
            </Typography>
          )}
        </Stack>
      </ListItemText>
    </ListItem>
  );
};

export default GeolocationOptionComponent;
