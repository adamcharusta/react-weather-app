import React, { useState } from 'react';
import './App.css';
import SearchGeolocationComponent from './components/SearchGeolocationComponent/SearchGeolocationComponent';
import { Container } from '@mui/material';
import WeatherPanelComponent from './components/WeatherPanelComponent/WeatherPanelComponent';
import AppContext from './appContext';
import { GeolocationType } from './types/geolocationTypes';
import { WeatherType } from './types/weatherTypes';

function App() {
  const [geolocation, setGeolocation] = useState<GeolocationType | null>(null);
  const [weather, setWeather] = useState<WeatherType | null>(null);

  return (
    <Container>
      <AppContext.Provider value={{ geolocation, setGeolocation, weather, setWeather }}>
        <SearchGeolocationComponent />
        <WeatherPanelComponent />
      </AppContext.Provider>
    </Container>
  );
}

export default App;
