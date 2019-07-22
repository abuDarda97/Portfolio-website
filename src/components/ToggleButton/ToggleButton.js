import './ToggleButton.css';
import React from 'react';

const ToggleButton = props => {
  return (
    <button className='button--toggle'>
      <i className="material-icons">menu</i>
    </button>
  );
};

export default ToggleButton;