import { GeolocationType } from './types/geolocationTypes';
import { createContext } from 'react';

type ContextType = {
  geolocation: GeolocationType | null;
  setGeolocation: (value: GeolocationType | null) => void;
};

const EmptyDataContext: ContextType = {
  geolocation: null,
  setGeolocation: (_value) => {
    /**/
  },
};

const AppContext = createContext<ContextType>(EmptyDataContext);

export default AppContext;
