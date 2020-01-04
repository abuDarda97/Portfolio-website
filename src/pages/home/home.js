import React from 'react';
import Particles from '../../components/Particles/particles'
import './home.css';

const home = () => {
  return (
    <div>
      <div>
        <Particles/>
      </div>
      <div id='text'>
        <h1>
          Hello, I'm <span id='name'>Abu Darda</span>.
        </h1>
        <h1>
          I'm a software developer.
        </h1>
      </div>
    </div>
  );
};

export default home;