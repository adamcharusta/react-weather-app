type WeatherCodeType = {
  code: number[];
  description: string;
};

const weatherCodes: WeatherCodeType[] = [
  { code: [0], description: 'Clear sky' },
  { code: [1, 2, 3], description: 'Mainly clear, partly cloudy, and overcast' },
  { code: [45, 48], description: 'Fog and depositing rime fog' },
  { code: [51, 53, 55], description: 'Drizzle: Light, moderate, and dense intensity' },
  { code: [56, 57], description: 'Freezing Drizzle: Light and dense intensity' },
  { code: [61, 63, 65], description: 'Rain: Slight, moderate and heavy intensity' },
  { code: [66, 67], description: 'Freezing Rain: Light and heavy intensity' },
  { code: [71, 73, 75], description: 'Snow fall: Slight, moderate, and heavy intensity' },
  { code: [77], description: 'Snow grains' },
  { code: [80, 81, 82], description: 'Rain showers: Slight, moderate, and violent' },
  { code: [85, 86], description: 'Snow showers slight and heavy' },
  { code: [95], description: 'Thunderstorm: Slight or moderate' },
  { code: [96, 99], description: 'Thunderstorm with slight and heavy hail' },
];

const getWeatherDescription = (code: number | undefined): string => {
  if (code === undefined) return '';

  const weather = weatherCodes.find((w) => w.code.find((c) => c === code) !== undefined);

  return weather?.description ? weather?.description : '';
};

export default getWeatherDescription;
