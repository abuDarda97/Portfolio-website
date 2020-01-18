import React from 'react';
import Navigation from '../../components/Navbar/Navigation';
import './projects.css';

import Cards from './cards/cards';

const projects = () => {
  return (
    <div>
      <Navigation />
      <h1 className='title'>
        PROJECTS
      </h1>
      <Cards />
    </div>
  );
};

export default projects;