// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import MockAdapter from 'axios-mock-adapter';
import { geolocationApiInstance, ipApiInstance, openMeteoApiInstance } from './api/apiInstances';
import { mockWeather } from './__mocks__/mockWeather';
import { mockGeolocation } from './__mocks__/mockGeolocation';
import * as MockDate from 'mockdate';
import ResizeObserver from 'resize-observer-polyfill';

window.ResizeObserver = ResizeObserver;

const mockOpenMeteoApiInstance = new MockAdapter(openMeteoApiInstance);
mockOpenMeteoApiInstance.onGet('').reply(200, mockWeather);

const mockGeolocationApiInstance = new MockAdapter(geolocationApiInstance);
mockGeolocationApiInstance
  .onGet('')
  .reply(200, { results: [mockGeolocation], generationtime_ms: 0 });

const mockIpApiInstance = new MockAdapter(ipApiInstance);
mockIpApiInstance.onGet('').reply(200, JSON.stringify(mockIpApiInstance));

MockDate.set('1970-01-01T00:00:00.000Z');
