import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';
import { mockGeolocation } from './__mocks__/mockGeolocation';
import AppContext from './appContext';
import { mockWeather } from './__mocks__/mockWeather';

describe('App', () => {
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
        <App />
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
        <App />
      </AppContext.Provider>,
    );
    expect(component.asFragment()).toMatchSnapshot();
  });
});
