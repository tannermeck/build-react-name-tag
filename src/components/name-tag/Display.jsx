import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ greeting, name }) => (
  <>
    <span>{greeting} </span>
    <span>{name}</span>
  </>
);

Display.propTypes = {
  greeting: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Display;
