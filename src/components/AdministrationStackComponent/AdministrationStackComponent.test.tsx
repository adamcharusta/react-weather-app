import React from 'react';
import { render } from '@testing-library/react';
import { mockGeolocation } from '../../__mocks__/mockGeolocation';
import AdministrationStackComponent from './AdministrationStackComponent';

describe('AdministrationStackComponent', () => {
  it('snapshot', () => {
    const component = render(<AdministrationStackComponent geolocation={mockGeolocation} />);

    expect(component.asFragment()).toMatchSnapshot();
  });

  it('snapshot no data', () => {
    const component = render(<AdministrationStackComponent geolocation={null} />);

    expect(component.asFragment()).toMatchSnapshot();
  });
});
