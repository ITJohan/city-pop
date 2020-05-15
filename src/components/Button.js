import React from 'react';
import PropTypes from 'prop-types';

// Simple button
const Button = ({ text }) => {
  return (
    <button>{ text }</button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired
}

export default Button;