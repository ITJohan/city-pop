import React, { useState, useEffect } from 'react';
import CityRow from './CityRow';
import NavigationRow from './NavigationRow';
import SearchComponent from './SearchComponent';
import Spinner from './Spinner';
import PopulationRow from './PopulationRow';

// The country search component, handles everything related to country search
const CountrySearch = () => {
  
  // Variables
  const [city, setCity] = useState(null);
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

  // Fetch country code from search term and then top cities from that 
  const search = async (searchTerm) => {
    try {
      let res = await fetch(`https://secure.geonames.org/search?name=${ searchTerm }&maxRows=1&type=json&featureClass=A&username=weknowit`);
      let data = await res.json();

      const country = data.geonames[0].countryName;
      
      if (searchTerm.toLowerCase() !== country.toLowerCase()) {
        throw new Error('Search term and country name does not match');
      }

      const countryCode = data.geonames[0].countryCode;

      res = await fetch(`https://secure.geonames.org/search?country=${ countryCode }&maxRows=3&type=json&orderby=population&featureClass=P&username=weknowit`);
      data = await res.json();

      const arr = data.geonames.map(city => ({ name: city.name, country: city.countryName, population: city.population }));

      setResults(arr);
    } catch(err) {
      console.log(err);

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
        <NavigationRow header='SEARCH BY COUNTRY' backPath={ null } resetSearch={ () => {
          setCity(null);
          setResults(null); 
        }} />
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
        <NavigationRow header={ `${ results[0].country.toUpperCase() }` } backPath='/country' resetSearch={ () => {
           setCity(null);
           setResults(null);
        }} />
        { results.map(city => <CityRow city={ city } setCity={ setCity } key={ city.name } />) }
      </main>
    );
  } else {
    // Return population view
    return (
      <main>
        <NavigationRow header={ `${ city.name.toUpperCase() }` } backPath='/country' resetSearch={ () => setCity(null) } />
        <PopulationRow population={ city.population } />
      </main>
    );
  }
}

export default CountrySearch;