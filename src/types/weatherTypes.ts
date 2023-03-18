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
  time: string;
};

export type HourlyUnitsType = {
  time: string;
  temperature_2m: string;
  relativehumidity_2m: string;
  windspeed_10m: string;
};

export type HourlyType = {
  time: string[];
  temperature_2m: number[];
  relativehumidity_2m: number[];
  windspeed_10m: number[];
};
