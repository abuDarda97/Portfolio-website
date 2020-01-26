import React from 'react';
import Navigation from '../../components/Navbar/Navigation';
import './projects.css';
import { CardDeck } from 'react-bootstrap';


import Cards from '../../components/Cards/Cards';

// Project images
import drumsPic from '../../images/drums.jpg';
import numbers from '../../images/numbers.jpg';
import quotes from '../../images/quotes.jpg';
import tent from '../../images/tent.jpg';

// Projects
const yelpCamp = {
  img: tent,
  text:''
};
const reduxCalculator = {
  img: numbers,
  text:''
};
const randomQuote = {
  img: quotes,
  text:''
};
const drums = {
  img: drumsPic,
  text:''
};
const text = 'dsjsdhnn db kb vkhbvdvkkjskjv jndbkjasdk dvjkkfnd jfdkmddkbkv ikdefkdf;dm bn dknkdgv g';
const projects = () => {
  return (
    <div>
      <Navigation />
      <h1 className='title'>
        PROJECTS
      </h1>
      <CardDeck id='card__deck'>
        <Cards title='Yelp Camp' img={yelpCamp.img} />
        <Cards title='Redux Calculator' img={reduxCalculator.img} text={text}/>
        <Cards title='Random Quote Machine' img={randomQuote.img} text={text}/>
        <Cards title='Drums' img={drums.img} text={text}/>
      </CardDeck>
    </div>
  );
};

export default projects;