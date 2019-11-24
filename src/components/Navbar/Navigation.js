import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// Pages
import Home from '../../pages/home/home';
import About from '../../pages/about/about';
import Contact from '../../pages/contact/contact';
import Projects from '../../pages/projects/projects';
import NotFound from '../../pages/error/error404';

// React bootstrap UI components
import {Navbar, Nav} from 'react-bootstrap';

// Custom css
import './Navbar.css';

class Navigation extends React.Component {
  render() {
    return (
      <Router>
        <Navbar collapseOnSelect expand='md' bg='light'>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Brand >Abu // Darda</Navbar.Brand>
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav>
              <Link className='navbar__elements'to='/'>Home</Link>
              <Link className='navbar__elements'to='/about'>About me</Link>
              <Link className='navbar__elements'to='/projects'>Projects</Link>
              <Link className='navbar__elements'to='/contact'>Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/about' component={ About } />
          <Route path='/contact' component={ Contact } />
          <Route path='/projects' component={ Projects } />
          <Route component={ NotFound } />
        </Switch>
      </Router>
    ); 
  }
}


export default Navigation;