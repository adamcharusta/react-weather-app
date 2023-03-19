export type WeatherType = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_weather: CurrentWeatherType;
  hourly_units: HourlyUnitsType;
  hourly: HourlyType;
};

export type CurrentWeatherType = {
  temperature: number;
  windspeed: number;
  winddirection: number;
  weathercode: number;
  time: Date;
};

export type HourlyUnitsType = {
  time: Date;
  temperature_2m: string;
  relativehumidity_2m: string;
  windspeed_10m: string;
  rain: string;
  snowfall: string;
  visibility: string;
};

export type HourlyType = {
  time: Date[];
  temperature_2m: number[];
  relativehumidity_2m: number[];
  windspeed_10m: number[];
  rain: number[];
  snowfall: number[];
  visibility: number[];
};
