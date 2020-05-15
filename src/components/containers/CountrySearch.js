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

  // Fetch country code from search term and then top cities from that 
  const search = async (searchTerm) => {
    try {
      let res = await fetch(`http://api.geonames.org/search?q=${ searchTerm }&maxRows=1&type=json&&username=weknowit`);
      let data = await res.json();

      const countryCode = data.geonames[0].countryCode;

      res = await fetch(`http://api.geonames.org/search?country=${ countryCode }&maxRows=3&type=json&orderby=population&featureClass=P&username=weknowit`);
      data = await res.json();

      const arr = data.geonames.map(city => ({ name: city.name, country: city.countryName, population: city.population }));

      setResults(arr);
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
        <NavigationRow header={ `${ results[0].country.toUpperCase() }` } backPath='/country' resetSearch={ () => setResults(null) } />
        { results.map(city => <CityRow city={ city } setCity={ setCity } key={ city.name } />) }
      </main>
    );
  } else {
    // Return population view
    return (
      <main>
        <NavigationRow header={ `${ city.name.toUpperCase() }` } backPath='/country' resetSearch={ () => setResults(null) } />
        <PopulationRow population={ city.population } />
      </main>
    );
  }
}

export default CountrySearch;