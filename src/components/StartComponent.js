import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Button from './Button';

// Main screen buttons
const StartComponent = () => {
  return (
    <Fragment>
      <Link to='/city'>
        <Button text='SEARCH BY CITY' />
      </Link>
      <Link to='/country'>
        <Button text='SEARCH BY COUNTRY' />
      </Link>
    </Fragment>
  ); 
}

export default StartComponent;