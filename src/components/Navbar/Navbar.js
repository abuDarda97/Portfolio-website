import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from '../../pages/home/home';
import About from '../../pages/about/about';
import Contact from '../../pages/contact/contact';
import Projects from '../../pages/projects/projects';
import NotFound from '../../pages/error/error404';

import './Navbar.css';


const Navbar = () => {
  return (
    <Router>
      <header className='navbar'>
        <nav>
          <ul className='navbar__nav'>
            <li>
              <Link to='/' className='navbar__elements'>Home</Link>
            </li>
            <li>
              <Link to='/about' className='navbar__elements'>About</Link>
            </li>
            <li>
              <Link to='/projects' className='navbar__elements'>Projects</Link>
            </li>
            <li>
              <Link to='/contact' className='navbar__elements'>Contact</Link>
            </li>
            <a className='navbar__hamburger'>
              <i className='fa fa-bars'></i>
            </a>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/about' component={ About } />
          <Route path='/contact' component={ Contact } />
          <Route path='/projects' component={ Projects } />
          <Route component={ NotFound } />
        </Switch>
      </header>
    </Router>
  );
};


export default Navbar;