import React from 'react';
import { render } from '@testing-library/react';

import ChartComponent from './ChartComponent';
import { mockWeather } from '../../__mocks__/mockWeather';

describe('ChartComponent', () => {
  it('snapshot open', () => {
    const component = render(
      <ChartComponent
        hours={mockWeather.hourly.time}
        data={mockWeather.hourly.temperature_2m}
        unit={mockWeather?.hourly_units.temperature_2m}
        expanded={true}
        setExpanded={jest.fn}
        title='42'
      />,
    );

    expect(component.asFragment()).toMatchSnapshot();
  });

  it('snapshot close', () => {
    const component = render(
      <ChartComponent
        hours={mockWeather.hourly.time}
        data={mockWeather.hourly.temperature_2m}
        unit={mockWeather?.hourly_units.temperature_2m}
        expanded={false}
        setExpanded={jest.fn}
        title='42'
      />,
    );

    expect(component.asFragment()).toMatchSnapshot();
  });
});
