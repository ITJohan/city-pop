import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StartComponent from './components/containers/StartComponent';
import SearchContainer from './components/containers/SearchContainer';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('');

  const handleCitySubmit = e => {
    e.preventDefault();

    setSearchTerm(e.target[0].value);
    setSearchType('city');

    // Perform API fetch
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  const handleCountrySubmit = e => {
    e.preventDefault();

    setSearchTerm(e.target[0].value);
    setSearchType('country');

    // Perform API fetch
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  }

  return (
    <Router>
      <div>
        <h1>CityPop</h1>
        <Switch>
          <Route exact path='/'>
            <StartComponent />
          </Route>

          <Route exact path='/city'>
            <SearchContainer handleSubmit={ handleCitySubmit } isLoading={ isLoading } type='city' />
          </Route>

          <Route exact path='/country'>
            <SearchContainer handleSubmit={ handleCountrySubmit } isLoading={ isLoading } type='country' />
          </Route>

          <Route exact path={ ['/city/population', '/country/cities/population'] }>
            <p>Population</p>
          </Route>

          <Route exact path='/country/cities'>
            <p>List of cities</p>
          </Route>
        </Switch>
      </div> 
    </Router>
  );
}

export default App;
