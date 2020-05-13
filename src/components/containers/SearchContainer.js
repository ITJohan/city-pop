import React from 'react';
import PropTypes from 'prop-types';
import NavigationRow from '../NavigationRow';
import SearchComponent from '../search/SearchComponent';
import Spinner from '../Spinner';

const SearchContainer = ({ handleSubmit, isLoading, type }) => {

  return (
    <main>
      <NavigationRow header={ `SEARCH BY ${ type.toUpperCase() }` } type={ type } />
      { isLoading ?
        <Spinner /> :
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