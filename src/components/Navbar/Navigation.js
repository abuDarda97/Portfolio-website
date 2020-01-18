import React from 'react';

// React bootstrap UI components
import {Navbar, Nav} from 'react-bootstrap';

// Custom css
import './Navbar.css';

class Navigation extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand='md' bg='light'>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Brand >Abu // Darda</Navbar.Brand>
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav>
            <a className='navbar__elements'href='/'>Home</a>
            <a className='navbar__elements'href='/about'>About me</a>
            <a className='navbar__elements'href='/projects'>Projects</a>
            <a className='navbar__elements'href='/contact'>Contact</a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    ); 
  }
}


export default Navigation;