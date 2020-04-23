import { API_URL, DAYS, MONTHS } from 'config/const';

export const getFetchURLs = (value) => {
  return [fetch(weatherURL(value)), fetch(forecastURL(value))];
};

const weatherURL = (value) =>
  `${API_URL}weather?q=${value}&APPID=${process.env.REACT_APP_API_KEY}&units=metric`;

const forecastURL = (value) =>
  `${API_URL}forecast?q=${value}&APPID=${process.env.REACT_APP_API_KEY}&units=metric`;

export const getWeatherInfo = (weather, forecast) => {
  const currentDate = new Date();
  const date = `${DAYS[currentDate.getDay()]} ${currentDate.getDate()} ${
    MONTHS[currentDate.getMonth()]
  }`;
  const sunset = new Date(weather.sys.sunset * 1000).toLocaleTimeString().slice(0, 5);
  const sunrise = new Date(weather.sys.sunrise * 1000).toLocaleTimeString().slice(0, 5);
  const weatherInfo = {
    city: weather.name,
    country: weather.sys.country,
    date,
    description: weather.weather[0].description,
    main: weather.weather[0].main,
    temp: weather.main.temp,
    highestTemp: weather.main.temp_max,
    lowestTemp: weather.main.temp_min,
    sunrise,
    sunset,
    clouds: weather.clouds.all,
    humidity: weather.main.humidity,
    wind: weather.wind.speed,
    forecast: forecast.list,
  };
  return weatherInfo;
};
