import React from 'react';
import './home.css';

import Particles from '../../components/Particles/particles';
import {Button} from 'react-bootstrap';

const home = () => {
  return (
    <div id='home-background'>
      <div className='content-center'>
        <div className='font-style' id='sentence-formatting'>
          <div>
            Hello, I'm <span id='name'>Abu Darda</span>!
          </div>
          <div>
            I'm a Software Developer
          </div>
        </div>

        <Button variant='dark' size='lg' href='/projects'>
          <span >My work</span>
        </Button>

      </div>
      <Particles />
    </div>
  );
};

export default home;