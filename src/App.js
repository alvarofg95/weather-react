import React, { useState } from 'react';
import Search from 'components/Search';
import { getFetchURLs, getWeatherInfo } from 'config/utils';
import 'App.css';

const App = () => {
  const [weatherInfo, setWeatherInfo] = useState();
  const [error, setError] = useState();

  function handleSearch(city) {
    console.log({ city });
    Promise.all(getFetchURLs(city))
      .then(([resWeather, resForecast]) => {
        console.log({ resWeather, resForecast });
        if (resWeather.ok && resForecast.ok) {
          return Promise.all([resWeather.json(), resForecast.json()]);
        }
        throw Error(resWeather.statusText, resForecast.statusText);
      })
      .then(([weather, forecast]) => {
        console.log({ weather, forecast });
        const weatherInfo = getWeatherInfo(weather, forecast);
        console.log({ weatherInfo });
        setWeatherInfo(weatherInfo);
      })
      .catch((err) => {
        console.log({ err });
        setWeatherInfo(null);
        setError(err);
      });
  }
  console.log({ weatherInfo });
  return (
    <div className="container">
      <Search searchCity={handleSearch} />
    </div>
  );
};

export default App;
