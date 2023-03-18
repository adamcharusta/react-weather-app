import { GeolocationType } from './types/geolocationTypes';
import { createContext } from 'react';
import { WeatherType } from './types/weatherTypes';

type ContextType = {
  geolocation: GeolocationType | null;
  setGeolocation: (value: GeolocationType | null) => void;
  weather: WeatherType | null;
  setWeather: (value: WeatherType | null) => void;
};

const EmptyDataContext: ContextType = {
  geolocation: null,
  weather: null,
  setGeolocation: (_value) => {
    /**/
  },
  setWeather: (_value) => {
    /**/
  },
};

const AppContext = createContext<ContextType>(EmptyDataContext);

export default AppContext;
