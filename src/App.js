import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StartComponent from './components/containers/StartComponent';
import CitySearch from './components/containers/CitySearch';

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
          </Route>
        </Switch>
      </div> 
    </Router>
  );
}

export default App;
