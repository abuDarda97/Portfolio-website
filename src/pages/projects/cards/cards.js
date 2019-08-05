import  React from 'react';

import './cards.css';

import small from '../../../images/small.jpg';

const Cards = props => {
  return (
    <div className='card'>
      <img className='imgStyle' src={ small } />
      <h3>
        React Calc
      </h3>
      <p>
        jeeeeeeeeejfvejfn jejlnejlnle
        keklfenlel j efjjfe jejellef
        fnjnfjnfejnfj ejn a jajja lane
      </p>
      <button>
        <a href='/'>Source code</a>
      </button>
      <button>
        <a href='/'>Demo</a>
      </button>
    </div>
  );
};

export default Cards;