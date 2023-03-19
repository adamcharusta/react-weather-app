import React from 'react';
import { render } from '@testing-library/react';

import ChartComponent from './ChartComponent';
import { mockWeather } from '../../__mocks__/mockWeather';

describe('ChartComponent', () => {
  it('snapshot', () => {
    const component = render(
      <ChartComponent
        hours={mockWeather.hourly.time}
        data={mockWeather.hourly.temperature_2m}
        title='General Kenobi!'
        unit={mockWeather?.hourly_units.temperature_2m}
      />,
    );

    expect(component.asFragment()).toMatchSnapshot();
  });
});
