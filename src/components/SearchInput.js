import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchInput = ({ onSearchCity }) => {
  const [city, setCity] = useState();

  function handleKeyDown({ keyCode }) {
    if (keyCode === 13) {
      onSearchCity(city);
    }
  }

  function handleInput({ target: { value } }) {
    setCity(value);
  }

  return (
    <input
      type="text"
      placeholder="Introduce una ciudad"
      value={city}
      onChange={handleInput}
      onKeyDown={handleKeyDown}
    />
  );
};

SearchInput.propTypes = {
  onSearchCity: PropTypes.func.isRequired,
};

export default SearchInput;
