import React from 'react';
import { render } from '@testing-library/react';
import { mockGeolocation } from '../../__mocks__/mockGeolocation';

import GeolocationOptionComponent from './GeolocationOptionComponent';

describe('GeolocationOptionComponent', () => {
  it('snapshot', () => {
    const component = render(
      <GeolocationOptionComponent geolocation={mockGeolocation} params={{}} />,
    );

    expect(component.asFragment()).toMatchSnapshot();
  });
});
