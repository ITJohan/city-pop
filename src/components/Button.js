import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, handler }) => {
  return (
    <button onClick={ handler }>{ text }</button>
  );
};

Button.propTypes = {
  handler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Button;