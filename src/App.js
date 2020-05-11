import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Button from './components/Button';

const App = () => {
  return (
    <Router>
      <div>
        <h1>CityPop</h1>
        <Switch>
          <Route exact path='/'>
            <Link to='/city'>
              <Button text='SEARCH FOR CITY' />
            </Link>
            <Link to='/country'>
              <Button text='SEARCH FOR COUNTRY' />
            </Link>
          </Route>

          <Route exact path='/city'>
            <p>Search for city</p>
          </Route>

          <Route exact path='/country'>
            <p>Search for country</p>
          </Route>

          <Route exact path='city/population'>
            <p>Population</p>
          </Route>

          <Route exact path='/country/city'>
            <p>List of cities</p>
          </Route>
        </Switch>
      </div> 
    </Router>
  );
}

export default App;
