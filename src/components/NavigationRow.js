import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faTimes } from '@fortawesome/free-solid-svg-icons';

const NavigationRow = ({ header, backPath, resetSearch }) => {
  return (
    <nav>
      <Link to={ `${ backPath }` }>
        { backPath !== null && <FontAwesomeIcon icon={ faChevronLeft } onClick={ resetSearch } /> }
      </Link>
      <div>{ header }</div>
      <Link to='/'>
        <FontAwesomeIcon icon={ faTimes } onClick={ resetSearch } />
      </Link>
    </nav>
  );
}

NavigationRow.propTypes = {
  header: PropTypes.string.isRequired,
  resetSearch: PropTypes.func.isRequired
};

export default NavigationRow;