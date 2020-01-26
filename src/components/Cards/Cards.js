import  React from 'react';
import { Card, Button } from 'react-bootstrap';

import './Cards.css';

const Cards = props => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
        <Button size='sm' variant='primary'>View project</Button>
        <Button size='sm' variant='primary'>Source code</Button>
      </Card.Body>
    </Card>
  );
};

export default Cards;