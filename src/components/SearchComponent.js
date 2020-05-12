import React from 'react';

import NavigationRow from './NavigationRow';
import SearchBar from './SearchBar';

const SearchComponent = () => {
  return (
    <main>
      <NavigationRow header='SEARCH BY CITY' />
      <SearchBar />
    </main>
  ); 
}

export default SearchComponent;