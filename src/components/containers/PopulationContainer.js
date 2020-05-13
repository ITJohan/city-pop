import React from 'react';
import PropTypes from 'prop-types';
import NavigationRow from '../NavigationRow';

const PopulationContainer = ({ name, type }) => {
  return (
    <main>
      <NavigationRow header={ name } type={ type } />
    </main>
  )
}

PopulationContainer.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default PopulationContainer;