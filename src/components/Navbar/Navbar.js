import React from 'react';
import './Navbar.css';


const Navbar = () => {
  return (
    <header className='navbar'>
      <nav>
        <ul className='navbar__nav'>
          <li className='navbar__elements'>
            <a>hey</a>
          </li>
          <li className='navbar__elements'>
            <a>abu</a>
          </li>
          <li className='navbar__elements'>
            <a>!!!</a>
          </li>
          <a className='navbar__hamburger'>
            yoo
            {/* <i className='fa fa-bars'></i> */}
          </a>
        </ul>
      </nav>
    </header>
  );
};


export default Navbar;