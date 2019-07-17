import './ToggleButton.css';
import React from 'react';

const ToggleButton = () => {
  return (
    <a className="sidenav-trigger" data-target="mobile">
      <i className="material-icons">menu</i>
    </a>
  );
};

export default ToggleButton;