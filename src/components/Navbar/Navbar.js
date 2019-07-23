import React from 'react';
import './Navbar.css';

import ToggleButton from './Hamburger/Hamburger';

const Navbar = props => {
  return (
    <header className='navbar'>
      <nav className='navbar__nav'>
        <div>
          <ToggleButton />
        </div>
        <div className='navbar__logo'>
          <a href='#'>/A</a>
        </div>
        <div className='navbar__elements'>
          <ul>
            <li><a>About me</a></li>
            <li><a>Projects</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;