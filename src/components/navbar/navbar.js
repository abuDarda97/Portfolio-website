import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <div className="container">
            <a href="#" className="brand-logo right">/A</a>
            <a className="sidenav-trigger" data-target="mobile">
              <i className="material-icons">menu</i>
            </a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><a>About me</a></li>
              <li><a>Projects</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <ul id="mobile" className="sidenav">
        <li><a>About me</a></li>
        <li><a>Projects</a></li>
        <li><a>Contact</a></li>
      </ul>

    </div>
  );
};

export default Navbar;