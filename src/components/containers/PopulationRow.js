import React from 'react';
import PropTypes from 'prop-types';

const PopulationRow = ({ population }) => {
  return (
    <div className='container-row'>
      <div><strong>Population</strong></div>
      <div>{ population }</div>
    </div>
  );
}

PopulationRow.propTypes = {
  population: PropTypes.number.isRequired
}

export default PopulationRow;