import React from 'react';

import NavigationRow from '../NavigationRow';
import SearchComponent from './SearchComponent';

const SearchContainer = () => {
  return (
    <main>
      <NavigationRow header='SEARCH BY CITY' />
      <SearchComponent />
    </main>
  ); 
}

export default SearchContainer;