import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text }) => {
  return (
    <button>{ text }</button>
  );
};

Button.defaultProps = {
  text: 'Button text'
}

Button.propTypes = {
  text: PropTypes.string.isRequired
}

export default Button;