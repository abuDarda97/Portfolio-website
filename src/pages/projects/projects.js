import React from 'react';

import './projects.css';

import Cards from './cards/cards';

const projects = () => {
  return (
    <div>
      <h1 className='title'>
        PROJECTS
      </h1>
      <Cards />
    </div>
  );
};

export default projects;