import React from 'react';
import PropTypes from 'prop-types';

const HeadBoard = ({ title, date }) => (
  <div className="headBoard">
    <h2>{title}</h2>
    <h4>{date}</h4>
  </div>
);

HeadBoard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default HeadBoard;
