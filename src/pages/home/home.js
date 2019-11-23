import React from 'react';

import './home.css';

import coolImg from '../../images/cool-background.svg';

const home = props => {
  return (
    <div>
      <img src={ coolImg } />
      <div>
        <h1>
          Welcome to my website.
        </h1>
      </div>
    </div>
  );
};

export default home;