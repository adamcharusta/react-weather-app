import React from 'react';
import { render } from '@testing-library/react';
import { mockGeolocation } from '../../__mocks__/mockGeolocation';
import AppContext from '../../appContext';
import { mockWeather } from '../../__mocks__/mockWeather';
import CurrentWeatherCardComponent from './CurrentWeatherCardComponent';

describe('CurrentWeatherCardComponent', () => {
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
        <CurrentWeatherCardComponent />
      </AppContext.Provider>,
    );

    expect(component.asFragment()).toMatchSnapshot();
  });
});
