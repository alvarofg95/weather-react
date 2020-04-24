import React from 'react';
import thunderstorm from 'assets/icons/thunderstorm.svg';
import cloud from 'assets/icons/cloud.svg';
import sun from 'assets/icons/sun.svg';
import rain from 'assets/icons/rain.svg';
import snow from 'assets/icons/snow.svg';
import drizzle from 'assets/icons/drizzle.svg';
import fog from 'assets/icons/fog.svg';
import Icon from './Icon';

const getWeatherIcon = (main) => {
  switch (main) {
    case 'thunderstorm':
      return thunderstorm;
    case 'drizzle':
      return drizzle;
    case 'rain':
      return rain;
    case 'snow':
      return snow;
    case 'clear':
      return sun;
    case 'clouds':
      return cloud;
    default:
      return fog;
  }
};

const Temperature = ({ main, temp }) => {
  return (
    <div className="temperature">
      <Icon image={getWeatherIcon(main.toLowerCase())} alt={main} />
      <h4>{temp}&#176;</h4>
    </div>
  );
};

export default Temperature;
