import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StartComponent from './components/StartComponent';
import CitySearch from './components/CitySearch';
import CountrySearch from './components/CountrySearch';

// Main page
const App = () => {
  return (
    <Router>
      <div>
        <h1>CityPop</h1>
        <Switch>
          <Route exact path='/'>
            <StartComponent />
          </Route>
          <Route exact path='/city'>
            <CitySearch />
          </Route>
          <Route exact path='/country'>
            <CountrySearch />
          </Route>
        </Switch>
      </div> 
    </Router>
  );
}

export default App;
