import React from 'react';
import { render } from '@testing-library/react';
import TabPanelComponent from './TabPanelComponent';

describe('TabPanelComponent', () => {
  it('snapshot', () => {
    const component = render(
      <TabPanelComponent index={0} value={0}>
        Hello There!
      </TabPanelComponent>,
    );

    expect(component.asFragment()).toMatchSnapshot();
  });
});
