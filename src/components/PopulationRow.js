import React from 'react';
import PropTypes from 'prop-types';

// Row showing population
const PopulationRow = ({ population }) => {
  return (
    <div className='container-row'>
      <div><strong>POPULATION</strong></div>
      <div>{ population }</div>
    </div>
  );
}

PopulationRow.propTypes = {
  population: PropTypes.number.isRequired
}

export default PopulationRow;