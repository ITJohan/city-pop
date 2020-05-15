import React, { useState, useEffect } from 'react';
import NavigationRow from './NavigationRow';
import SearchComponent from './SearchComponent';
import Spinner from './Spinner';
import PopulationRow from './PopulationRow';

// The city search component, handles everything related to city search
const CitySearch = () => {
  
  // Variables
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  let timeout = null;

  // Clear the error timeout on unmount
  useEffect(() => {
    return () => {
      if (timeout !== null) {
        clearTimeout(timeout);
      }
    }
    // eslint-disable-next-line
  }, [])

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
      const res = await fetch(`https://secure.geonames.org/search?name=${searchTerm}&maxRows=1&type=json&featureClass=P&username=weknowit`);
      const data = await res.json();

      const name = data.geonames[0].name;
      const population = data.geonames[0].population;
      
      setResults({ name, population });
    } catch(err) {
      // Show error for 3 sec
      setError(true);
      timeout = setTimeout(() => setError(false), 3000);
    }

    setLoading(false);
  };
  
  if (results === null) {
    // Return search view
    return (
      <main>
        <NavigationRow header='SEARCH BY CITY' backPath={ null } resetSearch={ () => {
          setError(false);
          setLoading(false);
          setResults(null); 
        }} />
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