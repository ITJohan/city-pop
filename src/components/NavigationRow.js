import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faTimes } from '@fortawesome/free-solid-svg-icons';

const NavigationRow = ({ header }) => {
  return (
    <nav>
      <Link to='/city'>
        <FontAwesomeIcon icon={ faChevronLeft } />
      </Link>
      <div>{ header }</div>
      <Link to='/'>
        <FontAwesomeIcon icon={ faTimes } />
      </Link>
    </nav>
  );
}

export default NavigationRow;