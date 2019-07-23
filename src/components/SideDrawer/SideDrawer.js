import React from 'react';
import './SideDrawer.css';

const SideDrawer = props => {
  return (
    <nav className='side-drawer'>
      <ul>
        <li><a>About me</a></li>
        <li><a>Projects</a></li>
        <li><a>Contact</a></li>
      </ul>
    </nav>
  ); 
};

export default SideDrawer;