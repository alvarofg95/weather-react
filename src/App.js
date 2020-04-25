import React, { useState } from 'react';
import SearchInput from 'components/SearchInput';
import Result from 'components/Result';
import ErrorMessage from 'components/ErrorMessage';
import { getFetchURLs, getWeatherInfo } from 'config/utils';
import 'style/App.scss';

const App = () => {
  const [weatherInfo, setWeatherInfo] = useState();
  const [error, setError] = useState();

  function handleSearch(city) {
    if (city) {
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
          setError(null);
        })
        .catch(() => {
          setWeatherInfo(null);
          setError('Lo siento, pero no encuentro esa localización');
        });
    } else {
      setWeatherInfo(null);
      setError(null);
    }
  }
  return (
    <div className="container">
      <SearchInput onSearchCity={handleSearch} />
      {weatherInfo ? <Result data={weatherInfo} /> : null}
      {error ? <ErrorMessage message={error} /> : null}
    </div>
  );
};

export default App;
