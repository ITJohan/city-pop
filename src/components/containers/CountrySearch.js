import React, { useState } from 'react';
import CityRow from '../containers/CityRow';
import NavigationRow from '../NavigationRow';
import SearchComponent from '../search/SearchComponent';
import Spinner from '../Spinner';
import PopulationRow from '../containers/PopulationRow';

// The country search component, handles everything related to country search
const CountrySearch = () => {
  
  // Variables
  const [city, setCity] = useState(null);
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
      const res = await fetch(`http://api.geonames.org/search?q=${searchTerm}&maxRows=3&type=json&orderBy=population&username=weknowit`);
      const data = await res.json();

      const arr = data.geonames.map(city => ({ name: city.name, population: city.population }));

      console.log(arr);

      // const name = data.geonames[0].name;
      // const population = data.geonames[0].population;
      
      // setResults({ name, population });
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
        <NavigationRow header='SEARCH BY COUNTRY' backPath={ null } resetSearch={ () => setResults(null) } />
        { loading ?
          <Spinner /> :
          <SearchComponent handleSubmit={ handleSubmit } type='country' />
        }
        { error && <p className='error'>Couldn't find the country</p> }
      </main>
    ); 
  } else if (city === null) {
    // Return cities view
    return (
      <main>
        <NavigationRow header={ `${ results.name.toUpperCase() }` } backPath='/country' resetSearch={ () => setResults(null) } />
        { results.forEach(city => <CityRow name={ city.name } population={ city.population } key={ city.name } setCity={ setCity } />) }
      </main>
    );
  } else {
    // Return population view
    return (
      <main>
        <NavigationRow header={ `${ results.name.toUpperCase() }` } backPath='/country' resetSearch={ () => setResults(null) } />
        <PopulationRow population={ results.population } />
      </main>
    );
  }
}

export default CountrySearch;