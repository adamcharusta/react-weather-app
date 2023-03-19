import { GeolocationType } from './types/geolocationTypes';
import { createContext } from 'react';
import { WeatherType } from './types/weatherTypes';

export type AppContextType = {
  geolocation: GeolocationType | null;
  setGeolocation: (value: GeolocationType | null) => void;
  weather: WeatherType | null;
  setWeather: (value: WeatherType | null) => void;
};

const emptyDataContext: AppContextType = {
  geolocation: null,
  weather: null,
  setGeolocation: (_value) => {
    /**/
  },
  setWeather: (_value) => {
    /**/
  },
};

const AppContext = createContext<AppContextType>(emptyDataContext);

export default AppContext;
