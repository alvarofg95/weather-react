import React from 'react';
import HeadBoard from './HeadBoard';
import Temperature from './Temperature';
import Details from './Details';

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
  },
}) => {
  console.log({ city, country });

  return (
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
    </div>
  );
};

export default Result;
