import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Button from './Button';

const StartComponent = () => {
  return (
    <Fragment>
      <Link to='/city'>
        <Button text='SEARCH FOR CITY' />
      </Link>
      <Link to='/country'>
        <Button text='SEARCH FOR COUNTRY' />
      </Link>
    </Fragment>
  ); 
}

export default StartComponent;