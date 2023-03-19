import WeatherPanelComponent from './WeatherPanelComponent';
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { mockGeolocation } from '../../__mocks__/mockGeolocation';
import AppContext from '../../appContext';
import { mockWeather } from '../../__mocks__/mockWeather';

describe('WeatherPanelComponent', () => {
  it('snapshot loading', () => {
    const component = render(
      <AppContext.Provider
        value={{
          geolocation: mockGeolocation,
          setGeolocation: jest.fn(),
          weather: null,
          setWeather: jest.fn(),
        }}
      >
        <WeatherPanelComponent />
      </AppContext.Provider>,
    );

    expect(component.asFragment()).toMatchSnapshot();
  });

  it('snapshot data', () => {
    const component = render(
      <AppContext.Provider
        value={{
          geolocation: mockGeolocation,
          setGeolocation: jest.fn(),
          weather: mockWeather,
          setWeather: jest.fn(),
        }}
      >
        <WeatherPanelComponent />
      </AppContext.Provider>,
    );

    expect(component.asFragment()).toMatchSnapshot();
  });

  it('should call to setWeather once', async () => {
    const setWeather = jest.fn();

    render(
      <AppContext.Provider
        value={{
          geolocation: mockGeolocation,
          setGeolocation: jest.fn(),
          weather: null,
          setWeather,
        }}
      >
        <WeatherPanelComponent />
      </AppContext.Provider>,
    );

    await waitFor(() => expect(setWeather).toBeCalledTimes(1));
  });

  it('should not call to setWeather when geolocation is null', async () => {
    const setWeather = jest.fn();

    render(
      <AppContext.Provider
        value={{
          geolocation: null,
          setGeolocation: jest.fn(),
          weather: null,
          setWeather,
        }}
      >
        <WeatherPanelComponent />
      </AppContext.Provider>,
    );

    await waitFor(() => expect(setWeather).toBeCalledTimes(0));
  });

  it('snapshot no geolocation', () => {
    const component = render(
      <AppContext.Provider
        value={{
          geolocation: null,
          setGeolocation: jest.fn(),
          weather: null,
          setWeather: jest.fn(),
        }}
      >
        <WeatherPanelComponent />
      </AppContext.Provider>,
    );

    expect(component.asFragment()).toMatchSnapshot();
  });
});
