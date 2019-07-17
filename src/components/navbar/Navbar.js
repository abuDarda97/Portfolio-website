import React from 'react';
import './Navbar.css';

import ToggleButton from '../toggleButton/ToggleButton';

const Navbar = (props) => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <div className="container">
            <ToggleButton />
            <a href="#" className="brand-logo right">/A</a>
            <ul id="nav" className="left hide-on-med-and-down">
              <li><a>About me</a></li>
              <li><a>Projects</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;