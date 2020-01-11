import React from 'react';
import './home.css';

import Particles from '../../components/Particles/particles';
import {Button} from 'react-bootstrap';

const home = () => {
  return (
    <div>
      <div id='sentence-center'>
        <div>
          Hello, I'm <span id='name'>Abu Darda</span>
        </div>
        <div>
          I'm a software developer
        </div>
      </div>
      <div id='button-center'>
        <Button variant='primary' size='lg'>
          My work...
        </Button>
      </div>
      <Particles />
    </div>
  );
};

export default home;