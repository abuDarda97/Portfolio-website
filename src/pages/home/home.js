import React from 'react';
import './home.css';

import Particles from '../../components/Particles/particles';
import {Button} from 'react-bootstrap';

const home = () => {
  return (
    <div>
      <div className='content-center'>
        <div className='font-style' id='sentence-formatting'>
          <div>
            Hello, I'm <span id='name'>Abu Darda</span>!
          </div>
          <div>
            I'm a software developer
          </div>
        </div>
        <Button variant='primary' size='lg'>
          My work ...
        </Button>
      </div>
      <Particles />
    </div>
  );
};

export default home;