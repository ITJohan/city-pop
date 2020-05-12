import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import StartComponent from './components/StartComponent';
import SearchContainer from './components/SearchContainer';

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
            <SearchContainer />
          </Route>

          <Route exact path='/country'>
            <SearchContainer />
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
