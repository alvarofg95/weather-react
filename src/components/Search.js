import React, { useState } from 'react';

export default ({ searchCity }) => {
  const [city, setCity] = useState();

  function handleKeyDown({ keyCode }) {
    if (keyCode === 13) {
      searchCity(city);
    }
  }

  function handleInput({ target: { value } }) {
    console.log({ value });
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
