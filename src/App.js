import React, { useState } from 'react';
import SearchInput from 'components/SearchInput';
import { getFetchURLs, getWeatherInfo } from 'config/utils';
import 'App.css';
import Result from 'components/Result';

const App = () => {
  const [weatherInfo, setWeatherInfo] = useState();
  const [error, setError] = useState();

  function handleSearch(city) {
    Promise.all(getFetchURLs(city))
      .then(([resWeather, resForecast]) => {
        if (resWeather.ok && resForecast.ok) {
          return Promise.all([resWeather.json(), resForecast.json()]);
        }
        throw Error(resWeather.statusText, resForecast.statusText);
      })
      .then(([weather, forecast]) => {
        const weatherInfo = getWeatherInfo(weather, forecast);
        setWeatherInfo(weatherInfo);
      })
      .catch((err) => {
        console.log({ err });
        setWeatherInfo(null);
        setError(err);
      });
  }
  return (
    <div className="container">
      <SearchInput onSearchCity={handleSearch} />
      {weatherInfo ? <Result /> : null}
    </div>
  );
};

export default App;
