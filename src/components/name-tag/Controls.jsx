import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ changeGreeting, greeting, changeName, name }) => (
  <form >
    <input aria-label="greeting" onChange={changeGreeting} value={greeting}/>
    <input aria-label="name" onChange={changeName} value={name} />
  </form>
);

Controls.propTypes = {
  changeGreeting: PropTypes.func,
  greeting: PropTypes.string.isRequired,
  changeName: PropTypes.func,
  name: PropTypes.string.isRequired,
};

export default Controls;
