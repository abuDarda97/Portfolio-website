import './Hamburger.css';
import React from 'react';

const ToggleButton = props => {
  return (
    <button className='hamburger'>
      <div className='hamburger__line'></div>
      <div className='hamburger__line'></div>
      <div className='hamburger__line'></div>
    </button>
  );
};

export default ToggleButton;