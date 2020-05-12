import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchComponent = ({ handleSubmit, type }) => {
  return (
    <form className='content' onSubmit={ handleSubmit } >
      <input placeholder={ `Enter a ${ type }...` } />
      <button className='round' type='submit'><FontAwesomeIcon icon={ faSearch } /></button>
    </form>
  );
}

SearchComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
}

export default SearchComponent;