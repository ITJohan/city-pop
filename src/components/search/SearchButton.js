import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchButton = () => {
  return (
    <button className='round'><FontAwesomeIcon icon={ faSearch } /></button>
  );
}

export default SearchButton;