import React from 'react';
import { GeolocationType } from '../../types/geolocationTypes';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Flag from 'react-world-flags';
import AdministrationStackComponent from '../AdministrationStackComponent/AdministrationStackComponent';

interface SearchOptionComponentPropsTypes {
  geolocation: GeolocationType;
  params: React.HTMLAttributes<HTMLLIElement>;
}

const GeolocationOptionComponent = ({ geolocation, params }: SearchOptionComponentPropsTypes) => {
  return (
    <ListItem {...params} data-testid='autocomplete-option'>
      <ListItemIcon>
        <Flag code={geolocation.country_code} style={{ width: 50 }} />
      </ListItemIcon>

      <ListItemText>
        {geolocation.name}
        <AdministrationStackComponent geolocation={geolocation} />
      </ListItemText>
    </ListItem>
  );
};

export default GeolocationOptionComponent;
