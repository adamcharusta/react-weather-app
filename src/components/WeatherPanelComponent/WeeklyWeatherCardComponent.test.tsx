import React from 'react';
import { render } from '@testing-library/react';
import { mockGeolocation } from '../../__mocks__/mockGeolocation';
import AppContext from '../../appContext';
import { mockWeather } from '../../__mocks__/mockWeather';
import WeeklyWeatherCardComponent from './WeeklyWeatherCardComponent';

describe('WeeklyWeatherCardComponent', () => {
  it('snapshot', () => {
    const component = render(
      <AppContext.Provider
        value={{
          geolocation: mockGeolocation,
          setGeolocation: jest.fn(),
          weather: mockWeather,
          setWeather: jest.fn(),
        }}
      >
        <WeeklyWeatherCardComponent />
      </AppContext.Provider>,
    );

    expect(component.asFragment()).toMatchSnapshot();
  });

  it('snapshot no data', () => {
    const component = render(
      <AppContext.Provider
        value={{
          geolocation: null,
          setGeolocation: jest.fn(),
          weather: null,
          setWeather: jest.fn(),
        }}
      >
        <WeeklyWeatherCardComponent />
      </AppContext.Provider>,
    );

    expect(component.asFragment()).toMatchSnapshot();
  });
});
