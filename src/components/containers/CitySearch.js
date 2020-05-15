import React, { useState } from 'react';
import NavigationRow from '../NavigationRow';
import SearchComponent from '../search/SearchComponent';
import Spinner from '../Spinner';
import PopulationRow from '../containers/PopulationRow';

// The city search component, handles everything related to city search
const CitySearch = () => {
  // Variables
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  // Handle clicked search
  const handleSubmit = e => {
    e.preventDefault();

    const searchTerm = e.target[0].value;

    setLoading(true);
    search(searchTerm);
  };

  // Fetch the search term and apply to result
  const search = async (searchTerm) => {
    try {
      const res = await fetch(`http://api.geonames.org/search?q=${searchTerm}&maxRows=1&type=json&username=weknowit`);
      const data = await res.json();

      const name = data.geonames[0].name;
      const population = data.geonames[0].population;
      
      setResults({ name, population });
    } catch(err) {
      // Show error for 3 sec
      setError(true);
      setTimeout(() => setError(false), 3000);
    }

    setLoading(false);
  };
  
  if (results === null) {
    // Return search view
    return (
      <main>
        <NavigationRow header='SEARCH BY CITY' backPath={ null } resetSearch={ () => setResults(null) } />
        { loading ?
          <Spinner /> :
          <SearchComponent handleSubmit={ handleSubmit } type='city' />
        }
        { error && <p className='error'>Couldn't find the city</p> }
      </main>
    ); 
  } else {
    // Return population view
    return (
      <main>
        <NavigationRow header={ `${ results.name.toUpperCase() }` } backPath='/city' resetSearch={ () => setResults(null) } />
        <PopulationRow population={ results.population } />
      </main>
    );
  }
}

export default CitySearch;