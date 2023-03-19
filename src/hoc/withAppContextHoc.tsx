/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useState } from 'react';
import { GeolocationType } from '../types/geolocationTypes';
import { WeatherType } from '../types/weatherTypes';
import AppContext from '../appContext';
import { ipApiInstance } from '../api/apiInstances';
import { AxiosResponse } from 'axios';
import { IpResponseType } from '../types/ipTypes';
import fetchGeolocationData from '../api/fetchGeolocationData';

const withAppContextHoc = (Component: React.ComponentType<any>) => {
  const WrappedComponent = (props: any) => {
    const [geolocation, setGeolocation] = useState<GeolocationType | null>(null);
    const [weather, setWeather] = useState<WeatherType | null>(null);

    useEffect(() => {
      //Set default location
      ipApiInstance.get('').then(async ({ data }: AxiosResponse<IpResponseType>) => {
        const location = await fetchGeolocationData(data.city);

        if (location?.results) setGeolocation(location.results[0]);
      });
    }, []);

    return (
      <AppContext.Provider value={{ geolocation, setGeolocation, weather, setWeather }}>
        <Component {...props} />
      </AppContext.Provider>
    );
  };

  return WrappedComponent;
};

export default withAppContextHoc;
