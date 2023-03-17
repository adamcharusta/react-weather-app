import axios from 'axios';

export const geolocationApiInstance = axios.create({
  baseURL: process.env.REACT_APP_GEOCODING_API_URL,
});
