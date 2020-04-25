import React from 'react';
import PropTypes from 'prop-types';
import sadLogo from 'assets/icons/triste.svg';
import Icon from './Icon';

const ErrorMessage = ({ message }) => (
  <div className="error">
    <Icon image={sadLogo} />
    <span>{message}</span>
  </div>
);

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
