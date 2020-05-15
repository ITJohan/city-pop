import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

// Row with city name and link to citys population
const CityRow = ({ city, setCity }) => {
  return (
    <div className='container-row link' onClick={ () => setCity(city) }>
      <div>{ city.name } <FontAwesomeIcon icon={ faChevronRight } /></div>
    </div>
  );
}

CityRow.propTypes = {
  city: PropTypes.object.isRequired,
  setCity: PropTypes.func.isRequired
}

export default CityRow;