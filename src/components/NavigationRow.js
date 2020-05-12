import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faTimes } from '@fortawesome/free-solid-svg-icons';

const NavigationRow = ({ header, type }) => {
  return (
    <nav>
      <Link to='/city'>
        { (type === 'population' || type === 'cities') && <FontAwesomeIcon icon={ faChevronLeft } /> }
      </Link>
      <div>{ header }</div>
      <Link to='/'>
        <FontAwesomeIcon icon={ faTimes } />
      </Link>
    </nav>
  );
}

NavigationRow.propTypes = {
  header: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default NavigationRow;