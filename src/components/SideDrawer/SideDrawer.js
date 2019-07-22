import React from 'react';
import './SideDrawer.css';

const SideDrawer = props => {
  return (
    <nav className='side-drawer'>
      <ol className='side-drawer--list'>
        <li><a>About me</a></li>
        <li><a>Projects</a></li>
        <li><a>Contact</a></li>
      </ol>
    </nav>
  ); 
};

export default SideDrawer;