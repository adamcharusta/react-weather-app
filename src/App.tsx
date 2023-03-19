import React from 'react';
import './App.css';
import SearchGeolocationComponent from './components/SearchGeolocationComponent/SearchGeolocationComponent';
import { Container } from '@mui/material';
import WeatherPanelComponent from './components/WeatherPanelComponent/WeatherPanelComponent';
import withThemeHoc from './hoc/withThemeHoc';
import withAppContextHoc from './hoc/withAppContextHoc';

function App() {
  return (
    <Container>
      <SearchGeolocationComponent />
      <WeatherPanelComponent />
    </Container>
  );
}

export { App };
export default withThemeHoc(withAppContextHoc(App));
