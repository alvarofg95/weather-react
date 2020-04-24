import React from 'react';
import PropTypes from 'prop-types';

const Details = ({ highestTemp, wind, sunrise, sunset, lowestTemp, humidity }) => (
  <div className="details">
    <div>
      <h4>{Math.floor(highestTemp)}&#176;</h4>
      <span>Máxima</span>
    </div>
    <div>
      <h4>{wind}mph</h4>
      <span>Viento</span>
    </div>
    <div>
      <h4>{sunrise}</h4>
      <span>Amanecer</span>
    </div>
    <div>
      <h4>{Math.floor(lowestTemp)}&#176;</h4>
      <span>Mínima</span>
    </div>
    <div>
      <h4>{humidity}</h4>
      <span>Humedad</span>
    </div>
    <div>
      <h4>{sunset}</h4>
      <span>Anochecer</span>
    </div>
  </div>
);

Details.propTypes = {
  highestTemp: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
  sunrise: PropTypes.string.isRequired,
  sunset: PropTypes.string.isRequired,
  lowestTemp: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
};

export default Details;
