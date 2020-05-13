import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import StartComponent from './components/containers/StartComponent';
import SearchContainer from './components/containers/SearchContainer';
import PopulationContainer from './components/containers/PopulationContainer';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [resultFound, setResultFound] = useState(false);
  const [result, setResult] = useState([]);

  const handleCitySubmit = e => {
    e.preventDefault();

    const cityName = e.target[0].value;

    // Perform API fetch
    setIsLoading(true);
    fetch(`http://api.geonames.org/search?name=${cityName}&maxRows=1&type=json&username=weknowit`)
      .then(res => res.json())
      .then(data => {
        const name = data.geonames[0].name;
        const population = data.geonames[0].population;

        setResult([{ name, population }]);

        setIsLoading(false);
        setResultFound(true);
      })
      .catch(err => {
        setIsLoading(false);
        // TODO: Set error message
      });
  };

  const handleCountrySubmit = e => {
    e.preventDefault();

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
            <SearchContainer handleSubmit={ handleCitySubmit } isLoading={ isLoading } resultFound={ resultFound } type='city' />
          </Route>

          <Route exact path='/country'>
            <SearchContainer handleSubmit={ handleCountrySubmit } isLoading={ isLoading } resultFound={ resultFound } type='country' />
          </Route>

          <Route exact path={ ['/city/population', '/country/population'] }>
            <PopulationContainer name='Oslo' type='population' />
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
