import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ image, alt, smallIcon }) => (
  <div>
    <img className={smallIcon ? 'smallIcon' : 'icon'} src={image} alt={alt} />
  </div>
);

Icon.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string,
  smallIcon: PropTypes.bool,
};

export default Icon;
