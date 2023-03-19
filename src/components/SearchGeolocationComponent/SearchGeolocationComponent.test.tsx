import { act, fireEvent, render, screen } from '@testing-library/react';
import SearchGeolocationComponent from './SearchGeolocationComponent';
import React from 'react';
import AppContext from '../../appContext';
import { mockGeolocation } from '../../__mocks__/mockGeolocation';
import MockAdapter from 'axios-mock-adapter';
import { geolocationApiInstance } from '../../api/apiInstances';

describe('SearchGeolocationComponent', () => {
  const expectedResults = [
    { ...mockGeolocation, id: 1 },
    { ...mockGeolocation, id: 2 },
    { ...mockGeolocation, id: 3 },
  ];

  beforeAll(() => {
    const mockGeolocationApiInstance = new MockAdapter(geolocationApiInstance);
    mockGeolocationApiInstance
      .onGet('')
      .reply(200, { results: expectedResults, generationtime_ms: 0 });
  });

  it('snapshot', () => {
    const component = render(
      <AppContext.Provider
        value={{
          geolocation: mockGeolocation,
          setGeolocation: jest.fn(),
          weather: null,
          setWeather: jest.fn(),
        }}
      >
        <SearchGeolocationComponent />
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
        <SearchGeolocationComponent />
      </AppContext.Provider>,
    );

    expect(component.asFragment()).toMatchSnapshot();
  });

  it('should render the Autocomplete component', async () => {
    render(<SearchGeolocationComponent />);
    const autocomplete = screen.getByTestId('autocomplete');
    expect(autocomplete).toBeInTheDocument();
  });

  it('should render the TextField component', async () => {
    render(<SearchGeolocationComponent />);
    const textField = screen.getByTestId('textField');
    expect(textField).toBeInTheDocument();
  });

  it('should load options when user types in the search field', async () => {
    render(
      <AppContext.Provider
        value={{
          geolocation: null,
          setGeolocation: jest.fn(),
          weather: null,
          setWeather: jest.fn(),
        }}
      >
        <SearchGeolocationComponent />
      </AppContext.Provider>,
    );

    const input = screen.getByRole('combobox');

    await act(() => {
      fireEvent.change(input, { target: { value: mockGeolocation.name } });
    });

    const autocompleteOptions = screen.getAllByTestId('autocomplete-option');

    expect(autocompleteOptions.length).toBe(expectedResults.length);
  });

  it('should set the selected geolocation when the user selects an option', async () => {
    const setGeolocation = jest.fn();

    render(
      <AppContext.Provider
        value={{
          geolocation: null,
          setGeolocation,
          weather: null,
          setWeather: jest.fn(),
        }}
      >
        <SearchGeolocationComponent />
      </AppContext.Provider>,
    );

    const input = screen.getByRole('combobox');

    await act(() => {
      fireEvent.change(input, { target: { value: mockGeolocation.name } });
    });

    const autocompleteOptions = screen.getAllByTestId('autocomplete-option');

    await act(() => {
      fireEvent.click(autocompleteOptions[0]);
    });

    expect(setGeolocation).toBeCalledTimes(1);
  });
});
