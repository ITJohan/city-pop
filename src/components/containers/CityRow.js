import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

// Row with city name and link to citys population
const CityRow = ({ name, population, setCity }) => {
  return (
    <div className='container-row'>
      <div>{ name } <FontAwesomeIcon icon={ faChevronRight } onCick={ () => setCity({ name, population }) } /></div>
    </div>
  );
}

CityRow.propTypes = {
  name: PropTypes.string.isRequired
}

export default CityRow;