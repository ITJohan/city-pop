import React from 'react';
import PropTypes from 'prop-types';
import NavigationRow from '../NavigationRow';
import SearchComponent from '../search/SearchComponent';

const SearchContainer = ({ handleSubmit, type }) => {

  return (
    <main>
      <NavigationRow header={ `SEARCH BY ${ type.toUpperCase() }` } type={ type } />
      <SearchComponent handleSubmit={ handleSubmit } type={ type } />
    </main>
  ); 
}

SearchContainer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};

export default SearchContainer;