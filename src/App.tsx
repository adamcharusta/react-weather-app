import React, { useState } from 'react';
import './App.css';
import SearchPanelComponent from './components/SearchPanelComponent/SearchPanelComponent';
import { Container } from '@mui/material';
import WeatherPanelComponent from './components/WeatherPanelComponent/WeatherPanelComponent';
import AppContext from './appContext';
import { GeolocationType } from './types/geolocationTypes';

function App() {
  const [geolocation, setGeolocation] = useState<GeolocationType | null>(null);

  return (
    <Container>
      <AppContext.Provider value={{ geolocation, setGeolocation }}>
        <SearchPanelComponent />
        <WeatherPanelComponent />
      </AppContext.Provider>
    </Container>
  );
}

export default App;
