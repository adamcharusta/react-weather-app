import axios from 'axios';

export const geolocationApiInstance = axios.create({
  baseURL: process.env.REACT_APP_GEOCODING_API_URL,
});
export const openMeteoApiInstance = axios.create({
  baseURL: process.env.REACT_APP_OPEN_METEO_API_URL,
  params: {
    current_weather: true,
    hourly: 'temperature_2m,relativehumidity_2m,windspeed_10m',
  },
});
export const ipApiInstance = axios.create({
  baseURL: process.env.REACT_APP_IP_API_URL,
});
