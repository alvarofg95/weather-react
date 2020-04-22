import React from 'react';
import 'App.css';
import Search from 'components/Search';

const App = () => {
  function handleSearch(city) {
    console.log({ city });
  }

  return (
    <div className="container">
      <Search searchCity={handleSearch} />
    </div>
  );
};

export default App;
