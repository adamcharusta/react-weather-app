import moment from 'moment';
import { WeatherType } from '../types/weatherTypes';

export const mockWeather: WeatherType = {
  latitude: 33.5625,
  longitude: -7.625,
  generationtime_ms: 0.7530450820922852,
  utc_offset_seconds: 0,
  timezone: 'Africa/Casablanca',
  timezone_abbreviation: '+00',
  elevation: 23,
  current_weather: {
    temperature: 16.2,
    windspeed: 9.3,
    winddirection: 16,
    weathercode: 1,
    time: moment('2023-03-19T19:00').toDate(),
  },
  hourly_units: {
    time: 'iso8601',
    temperature_2m: '°C',
    relativehumidity_2m: '%',
    windspeed_10m: 'km/h',
    rain: 'mm',
    snowfall: 'cm',
    visibility: 'm',
  },
  hourly: {
    time: [
      moment('2023-03-19T00:00').toDate(),
      moment('2023-03-19T01:00').toDate(),
      moment('2023-03-19T02:00').toDate(),
      moment('2023-03-19T03:00').toDate(),
      moment('2023-03-19T04:00').toDate(),
      moment('2023-03-19T05:00').toDate(),
      moment('2023-03-19T06:00').toDate(),
      moment('2023-03-19T07:00').toDate(),
      moment('2023-03-19T08:00').toDate(),
      moment('2023-03-19T09:00').toDate(),
      moment('2023-03-19T10:00').toDate(),
      moment('2023-03-19T11:00').toDate(),
      moment('2023-03-19T12:00').toDate(),
      moment('2023-03-19T13:00').toDate(),
      moment('2023-03-19T14:00').toDate(),
      moment('2023-03-19T15:00').toDate(),
      moment('2023-03-19T16:00').toDate(),
      moment('2023-03-19T17:00').toDate(),
      moment('2023-03-19T18:00').toDate(),
      moment('2023-03-19T19:00').toDate(),
      moment('2023-03-19T20:00').toDate(),
      moment('2023-03-19T21:00').toDate(),
      moment('2023-03-19T22:00').toDate(),
      moment('2023-03-19T23:00').toDate(),
      moment('2023-03-20T00:00').toDate(),
      moment('2023-03-20T01:00').toDate(),
      moment('2023-03-20T02:00').toDate(),
      moment('2023-03-20T03:00').toDate(),
      moment('2023-03-20T04:00').toDate(),
      moment('2023-03-20T05:00').toDate(),
      moment('2023-03-20T06:00').toDate(),
      moment('2023-03-20T07:00').toDate(),
      moment('2023-03-20T08:00').toDate(),
      moment('2023-03-20T09:00').toDate(),
      moment('2023-03-20T10:00').toDate(),
      moment('2023-03-20T11:00').toDate(),
      moment('2023-03-20T12:00').toDate(),
      moment('2023-03-20T13:00').toDate(),
      moment('2023-03-20T14:00').toDate(),
      moment('2023-03-20T15:00').toDate(),
      moment('2023-03-20T16:00').toDate(),
      moment('2023-03-20T17:00').toDate(),
      moment('2023-03-20T18:00').toDate(),
      moment('2023-03-20T19:00').toDate(),
      moment('2023-03-20T20:00').toDate(),
      moment('2023-03-20T21:00').toDate(),
      moment('2023-03-20T22:00').toDate(),
      moment('2023-03-20T23:00').toDate(),
      moment('2023-03-21T00:00').toDate(),
      moment('2023-03-21T01:00').toDate(),
      moment('2023-03-21T02:00').toDate(),
      moment('2023-03-21T03:00').toDate(),
      moment('2023-03-21T04:00').toDate(),
      moment('2023-03-21T05:00').toDate(),
      moment('2023-03-21T06:00').toDate(),
      moment('2023-03-21T07:00').toDate(),
      moment('2023-03-21T08:00').toDate(),
      moment('2023-03-21T09:00').toDate(),
      moment('2023-03-21T10:00').toDate(),
      moment('2023-03-21T11:00').toDate(),
      moment('2023-03-21T12:00').toDate(),
      moment('2023-03-21T13:00').toDate(),
      moment('2023-03-21T14:00').toDate(),
      moment('2023-03-21T15:00').toDate(),
      moment('2023-03-21T16:00').toDate(),
      moment('2023-03-21T17:00').toDate(),
      moment('2023-03-21T18:00').toDate(),
      moment('2023-03-21T19:00').toDate(),
      moment('2023-03-21T20:00').toDate(),
      moment('2023-03-21T21:00').toDate(),
      moment('2023-03-21T22:00').toDate(),
      moment('2023-03-21T23:00').toDate(),
      moment('2023-03-22T00:00').toDate(),
      moment('2023-03-22T01:00').toDate(),
      moment('2023-03-22T02:00').toDate(),
      moment('2023-03-22T03:00').toDate(),
      moment('2023-03-22T04:00').toDate(),
      moment('2023-03-22T05:00').toDate(),
      moment('2023-03-22T06:00').toDate(),
      moment('2023-03-22T07:00').toDate(),
      moment('2023-03-22T08:00').toDate(),
      moment('2023-03-22T09:00').toDate(),
      moment('2023-03-22T10:00').toDate(),
      moment('2023-03-22T11:00').toDate(),
      moment('2023-03-22T12:00').toDate(),
      moment('2023-03-22T13:00').toDate(),
      moment('2023-03-22T14:00').toDate(),
      moment('2023-03-22T15:00').toDate(),
      moment('2023-03-22T16:00').toDate(),
      moment('2023-03-22T17:00').toDate(),
      moment('2023-03-22T18:00').toDate(),
      moment('2023-03-22T19:00').toDate(),
      moment('2023-03-22T20:00').toDate(),
      moment('2023-03-22T21:00').toDate(),
      moment('2023-03-22T22:00').toDate(),
      moment('2023-03-22T23:00').toDate(),
      moment('2023-03-23T00:00').toDate(),
      moment('2023-03-23T01:00').toDate(),
      moment('2023-03-23T02:00').toDate(),
      moment('2023-03-23T03:00').toDate(),
      moment('2023-03-23T04:00').toDate(),
      moment('2023-03-23T05:00').toDate(),
      moment('2023-03-23T06:00').toDate(),
      moment('2023-03-23T07:00').toDate(),
      moment('2023-03-23T08:00').toDate(),
      moment('2023-03-23T09:00').toDate(),
      moment('2023-03-23T10:00').toDate(),
      moment('2023-03-23T11:00').toDate(),
      moment('2023-03-23T12:00').toDate(),
      moment('2023-03-23T13:00').toDate(),
      moment('2023-03-23T14:00').toDate(),
      moment('2023-03-23T15:00').toDate(),
      moment('2023-03-23T16:00').toDate(),
      moment('2023-03-23T17:00').toDate(),
      moment('2023-03-23T18:00').toDate(),
      moment('2023-03-23T19:00').toDate(),
      moment('2023-03-23T20:00').toDate(),
      moment('2023-03-23T21:00').toDate(),
      moment('2023-03-23T22:00').toDate(),
      moment('2023-03-23T23:00').toDate(),
      moment('2023-03-24T00:00').toDate(),
      moment('2023-03-24T01:00').toDate(),
      moment('2023-03-24T02:00').toDate(),
      moment('2023-03-24T03:00').toDate(),
      moment('2023-03-24T04:00').toDate(),
      moment('2023-03-24T05:00').toDate(),
      moment('2023-03-24T06:00').toDate(),
      moment('2023-03-24T07:00').toDate(),
      moment('2023-03-24T08:00').toDate(),
      moment('2023-03-24T09:00').toDate(),
      moment('2023-03-24T10:00').toDate(),
      moment('2023-03-24T11:00').toDate(),
      moment('2023-03-24T12:00').toDate(),
      moment('2023-03-24T13:00').toDate(),
      moment('2023-03-24T14:00').toDate(),
      moment('2023-03-24T15:00').toDate(),
      moment('2023-03-24T16:00').toDate(),
      moment('2023-03-24T17:00').toDate(),
      moment('2023-03-24T18:00').toDate(),
      moment('2023-03-24T19:00').toDate(),
      moment('2023-03-24T20:00').toDate(),
      moment('2023-03-24T21:00').toDate(),
      moment('2023-03-24T22:00').toDate(),
      moment('2023-03-24T23:00').toDate(),
      moment('2023-03-25T00:00').toDate(),
      moment('2023-03-25T01:00').toDate(),
      moment('2023-03-25T02:00').toDate(),
      moment('2023-03-25T03:00').toDate(),
      moment('2023-03-25T04:00').toDate(),
      moment('2023-03-25T05:00').toDate(),
      moment('2023-03-25T06:00').toDate(),
      moment('2023-03-25T07:00').toDate(),
      moment('2023-03-25T08:00').toDate(),
      moment('2023-03-25T09:00').toDate(),
      moment('2023-03-25T10:00').toDate(),
      moment('2023-03-25T11:00').toDate(),
      moment('2023-03-25T12:00').toDate(),
      moment('2023-03-25T13:00').toDate(),
      moment('2023-03-25T14:00').toDate(),
      moment('2023-03-25T15:00').toDate(),
      moment('2023-03-25T16:00').toDate(),
      moment('2023-03-25T17:00').toDate(),
      moment('2023-03-25T18:00').toDate(),
      moment('2023-03-25T19:00').toDate(),
      moment('2023-03-25T20:00').toDate(),
      moment('2023-03-25T21:00').toDate(),
      moment('2023-03-25T22:00').toDate(),
      moment('2023-03-25T23:00').toDate(),
    ],
    temperature_2m: [
      14.7, 14.5, 14.5, 14.3, 13.9, 13.7, 13, 12.7, 13.4, 15, 16.7, 18, 18.5, 18.9, 18.9, 18.8,
      18.4, 17.8, 17, 16.2, 15.9, 15.7, 15.5, 15.3, 14.8, 14.2, 13.9, 13.7, 13.4, 13.2, 13, 13,
      14.3, 16.6, 18.3, 19.4, 20.1, 20.7, 21.2, 21.1, 20.4, 19.5, 18.3, 17.4, 17, 16.6, 16.2, 15.8,
      15.3, 15, 14, 12.8, 12, 11.7, 11.6, 11.5, 13, 15.8, 18, 19.4, 20.2, 20.6, 20.6, 20.3, 19.5,
      18.7, 17.9, 16.9, 16, 15.6, 15, 14.8, 14.7, 14.6, 14.1, 13.8, 13.3, 12.9, 12.1, 11.5, 12.6,
      16, 17.9, 19.3, 20.7, 21.2, 20.8, 20.7, 20.2, 19.2, 18.2, 17.4, 16.7, 15.9, 15.6, 15.3, 15,
      14.6, 14.1, 13.5, 13.2, 12.8, 12.8, 13.1, 13.7, 14.9, 16.5, 18.5, 20.5, 20.8, 20.6, 20.1,
      19.7, 19.2, 18.4, 17.6, 16.8, 15.9, 15.6, 15.4, 15.1, 14.9, 14.6, 14.2, 13.8, 13.2, 13.1,
      13.6, 14.6, 16.1, 17.4, 18.9, 20.4, 19.9, 19.9, 19.5, 19.2, 18.6, 17.9, 17.3, 16.6, 15.9,
      15.6, 15.5, 15.3, 15.2, 15.2, 15.1, 14.9, 14.8, 14.8, 15.2, 15.7, 16.6, 17.4, 18.3, 19.2,
      19.6, 19.9, 19.9, 19.7, 19.3, 18.7, 18.1, 17.3, 16.6, 16.3, 16.2,
    ],
    relativehumidity_2m: [
      83, 86, 86, 85, 88, 90, 93, 92, 84, 73, 65, 60, 62, 58, 59, 60, 64, 65, 72, 78, 80, 81, 82,
      85, 90, 92, 91, 89, 88, 86, 84, 84, 73, 52, 42, 42, 43, 45, 47, 49, 51, 52, 63, 67, 69, 73,
      77, 82, 86, 85, 91, 94, 94, 93, 90, 87, 78, 67, 69, 60, 59, 61, 62, 61, 67, 71, 74, 79, 87,
      92, 95, 95, 91, 86, 89, 93, 93, 93, 95, 96, 89, 76, 68, 60, 51, 47, 53, 53, 59, 72, 80, 86,
      90, 94, 95, 94, 94, 95, 97, 99, 100, 100, 100, 96, 91, 82, 74, 64, 55, 54, 57, 61, 64, 67, 73,
      78, 84, 91, 94, 95, 96, 96, 94, 93, 94, 96, 95, 90, 82, 73, 69, 66, 63, 68, 67, 67, 69, 72,
      77, 82, 87, 92, 93, 93, 93, 94, 94, 95, 95, 95, 94, 91, 87, 82, 78, 74, 70, 67, 64, 63, 66,
      71, 78, 83, 89, 94, 96, 96,
    ],
    windspeed_10m: [
      3.8, 3.8, 3.6, 4.7, 5.2, 5, 4.3, 4.1, 3.8, 4.6, 3.7, 7.8, 10.4, 12.5, 14.4, 15.1, 15.1, 14.4,
      12.3, 9.3, 9.4, 8.2, 6.9, 6.7, 6.2, 5.1, 4.3, 4.2, 4.3, 4.5, 4.9, 4.8, 5.9, 8.9, 11.5, 12.3,
      13.8, 14.3, 14.4, 14.8, 14.7, 15.2, 13, 9.5, 7.2, 5.6, 5.4, 4.2, 3.1, 3.3, 4, 4, 4.4, 4.3, 4,
      4.6, 2.9, 2.5, 3.5, 7.2, 8.3, 9.4, 10.1, 10.7, 10.6, 8.5, 6.2, 4, 2.6, 2.9, 2.7, 1.8, 2.6,
      3.5, 3.7, 4.2, 3.6, 3.5, 3.8, 3.7, 3.3, 1.1, 4.7, 6.7, 6.8, 9.7, 10.5, 11.2, 10.5, 10.8, 8.2,
      6.6, 4.9, 3.7, 3.2, 2.9, 2.3, 1.8, 2.4, 3.3, 3.4, 3.2, 3.2, 3.4, 3.6, 3.5, 3.4, 5.2, 8.3, 10,
      11, 11.7, 11.5, 10.4, 9.2, 7.7, 6.4, 5, 4.8, 4.8, 4.8, 4.2, 3.6, 2.8, 2.2, 2.6, 3.6, 2.9, 3,
      4.8, 6.5, 8.2, 9.7, 15.5, 17.3, 18.7, 18.6, 17.9, 16.2, 13.8, 11.5, 9, 8.1, 7.6, 7.8, 7.5,
      7.7, 7.7, 7.7, 8, 8.6, 8.7, 9.3, 9.7, 10.7, 13.1, 16.2, 17.5, 18.1, 17.9, 16.6, 14.8, 12.1,
      10.1, 8.2, 6.1, 5.1, 4.3,
    ],
    rain: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    snowfall: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    visibility: [
      24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140,
      24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140,
      24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140,
      24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140,
      24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140,
      24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140,
      24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140,
      24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140,
      24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140,
      24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140,
      24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140,
      24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140,
      24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140, 24140,
    ],
  },
};
