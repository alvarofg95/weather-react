import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

const Forecast = ({ forecast }) => {
  return forecast.map(({ day, month, hour, icon, temp }, index) => {
    const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;
    return (
      <div key={`forecast-${index}`} className="forecastDiv">
        <span>{`${day}/${month}`}</span>
        <br />
        <span>{`${hour}:00`}</span>
        <Icon image={iconUrl} smallIcon={true} />
        <span className="bold">{temp}&#176;</span>
      </div>
    );
  });
};

Forecast.propTypes = {
  forecast: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      month: PropTypes.string.isRequired,
      hour: PropTypes.number.isRequired,
      icon: PropTypes.string.isRequired,
      temp: PropTypes.number.isRequired,
    })
  ),
};

export default Forecast;
