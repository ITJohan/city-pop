import React from 'react';
import PropTypes from 'prop-types';
import NavigationRow from '../NavigationRow';
import SearchComponent from '../search/SearchComponent';
import Spinner from '../Spinner';
import { Redirect } from 'react-router-dom';

const SearchContainer = ({ handleSubmit, isLoading, resultFound, type }) => {
  if (resultFound) {
    return <Redirect to={ `/${type}/population` } />;
  }

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