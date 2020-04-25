import React from 'react';
import PropTypes from 'prop-types';
import HeadBoard from './HeadBoard';
import Temperature from './Temperature';
import Details from './Details';
import Forecast from './Forecast';

const Result = ({
  data: {
    city,
    country,
    date,
    main,
    temp,
    highestTemp,
    wind,
    sunrise,
    sunset,
    lowestTemp,
    humidity,
    forecast,
  },
}) => (
  <div id="result">
    <HeadBoard title={`${city}, ${country}`} date={date} />
    <div className="inlineFlex">
      <Temperature main={main} temp={Math.floor(temp)} />
      <Details
        highestTemp={highestTemp}
        wind={wind}
        sunrise={sunrise}
        sunset={sunset}
        lowestTemp={lowestTemp}
        humidity={humidity}
      />
    </div>
    <div className="forecast">
      <Forecast forecast={forecast} />
    </div>
  </div>
);

Result.propTypes = {
  data: PropTypes.shape({
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    main: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    highestTemp: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
    sunrise: PropTypes.string.isRequired,
    sunset: PropTypes.string.isRequired,
    lowestTemp: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    forecast: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.string.isRequired,
        month: PropTypes.string.isRequired,
        hour: PropTypes.number.isRequired,
        icon: PropTypes.string.isRequired,
        temp: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Result;
