import React from 'react';
import PropTypes from 'prop-types';
import NavigationRow from '../NavigationRow';
import SearchComponent from '../search/SearchComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const SearchContainer = ({ handleSubmit, isLoading, type }) => {

  return (
    <main>
      <NavigationRow header={ `SEARCH BY ${ type.toUpperCase() }` } type={ type } />
      { isLoading ?
        <FontAwesomeIcon icon={ faSpinner } /> :
        <SearchComponent handleSubmit={ handleSubmit } type={ type } />
      }
    </main>
  ); 
}

SearchContainer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired
};

export default SearchContainer;