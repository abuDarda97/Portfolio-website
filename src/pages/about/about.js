import React from 'react';
import Navigation from '../../components/Navbar/Navigation';
import { Card } from 'react-bootstrap';
import Footer from '../../components/Footer/Footer';

import './about.css';

const about = () => {
  return (
    <div>
      <Navigation />
      <div className='about__container'>
        <h1>ABOUT ME:</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Etiam bibendum turpis et fermentum sagittis. Nullam eu ex 
          eu massa suscipit vulputate. Mauris cursus quam nec erat bibendum 
          faucibus. Curabitur volutpat eu nulla vel porta. Curabitur feugiat 
          neque in urna dignissim ultrices. Donec nec elit tempor, mattis urna 
          eget, pulvinar eros. Nunc egestas tristique nulla sed iaculis. 
          Nam ornare mi ac efficitur mattis. Aenean pharetra massa augue, 
          quis hendrerit urna hendrerit nec. Mauris sit amet suscipit lectus. 
          Maecenas euismod purus enim, convallis ullamcorper nibh sollicitudin eget.
      </div>
      <Footer />
    </div>
  );
};

export default about;