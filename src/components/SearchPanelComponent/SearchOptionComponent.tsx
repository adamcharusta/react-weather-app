import React from 'react';
import { GeolocationType } from '../../types/geolocationTypes';
import styled from 'styled-components';
import { Divider, ListItem, ListItemIcon, ListItemText, Stack } from '@mui/material';
import Flag from 'react-world-flags';
import COLORS from '../../colors';

interface SearchOptionComponentPropsTypes {
  geolocation: GeolocationType;
  params: React.HTMLAttributes<HTMLLIElement>;
}

const AdminSpan = styled.span`
  color: ${COLORS.SECONDARY_TEXT};
  font-weight: bold;
`;

const SearchOptionComponent = ({ geolocation, params }: SearchOptionComponentPropsTypes) => {
  return (
    <ListItem {...params}>
      <ListItemIcon>
        <Flag code={geolocation.country_code} style={{ width: 50 }} />
      </ListItemIcon>

      <ListItemText>
        {geolocation.name}
        <Stack direction='row' divider={<Divider orientation='vertical' flexItem />} spacing={1}>
          {geolocation.admin3 && <AdminSpan>{geolocation.admin3}</AdminSpan>}
          {geolocation.admin2 && <AdminSpan>{geolocation.admin2}</AdminSpan>}
          {geolocation.admin1 && <AdminSpan>{geolocation.admin1}</AdminSpan>}
        </Stack>
      </ListItemText>
    </ListItem>
  );
};

export default SearchOptionComponent;
