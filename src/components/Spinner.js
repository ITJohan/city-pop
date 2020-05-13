import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Spinner = () => {
  return (
    <div className='content spinner'>
      <FontAwesomeIcon icon={ faSpinner } size='6x' spin />
    </div>
  );
}

export default Spinner;