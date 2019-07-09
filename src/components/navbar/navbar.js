import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo right">/A</a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><a>About me</a></li>
            <li><a>Projects</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;