import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchInput = ({ onSearchCity }) => {
  const [city, setCity] = useState();
  const [searched, setSearched] = useState();

  function handleKeyDown({ keyCode }) {
    if (keyCode === 13) {
      onSearchCity(city);
      setSearched(city ? true : false);
    }
  }

  function handleInput({ target: { value } }) {
    setCity(value);
  }

  return (
    <label>
      <input
        type="text"
        className={searched === true ? 'search' : ''}
        placeholder="Introduce una ciudad"
        value={city}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
      />
    </label>
  );
};

SearchInput.propTypes = {
  onSearchCity: PropTypes.func.isRequired,
};

export default SearchInput;
