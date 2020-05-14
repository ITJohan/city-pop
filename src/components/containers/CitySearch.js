import React, { useState } from 'react';
import NavigationRow from '../NavigationRow';
import SearchComponent from '../search/SearchComponent';
import Spinner from '../Spinner';
import PopulationRow from '../containers/PopulationRow';

const CitySearch = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();

    const searchTerm = e.target[0].value;

    // Perform API fetch
    setLoading(true);
    fetch(`http://api.geonames.org/search?name=${searchTerm}&maxRows=1&type=json&username=weknowit`)
      .then(res => res.json())
      .then(data => {
        const name = data.geonames[0].name;
        const population = data.geonames[0].population;

        setResults({ name, population });
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        // TODO: Set error message
      });
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
      </main>
    ); 
  } else {
    // Return population view
    return (
      <main>
        <NavigationRow header={ `${ results.name }` } backPath='/city' resetSearch={ () => setResults(null) } />
        <PopulationRow population={ results.population } />
      </main>
    );
  }
}

export default CitySearch;