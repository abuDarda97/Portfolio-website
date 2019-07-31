import React from 'react';

import './Mobile.css';

const MobileNav = props => {
  return (
    <ul className={props.status ? 'mobile__navbar--expanded':'mobile__navbar--collapsed'}>
      <li>
        <a className='mobile__navbar__list' href='/'>Home</a>
      </li>
      <li>
        <a className='mobile__navbar__list' href='/about'>About</a>
      </li>
      <li>
        <a className='mobile__navbar__list' href='/projects'>Projects</a>
      </li>
      <li>
        <a className='mobile__navbar__list' href='/contact'>Contact</a>
      </li>
    </ul>
  );
  // if(props.status) {
  //   return (
  //     <ul className='mobile__navbar'>
  //       <li>
  //         <a className='mobile__navbar__list' href='/'>Home</a>
  //       </li>
  //       <li>
  //         <a className='mobile__navbar__list' href='/about'>About</a>
  //       </li>
  //       <li>
  //         <a className='mobile__navbar__list' href='/projects'>Projects</a>
  //       </li>
  //       <li>
  //         <a className='mobile__navbar__list' href='/contact'>Contact</a>
  //       </li>
  //     </ul>
  //   );
  // } else {
  //   return null;
  // }
};

export default MobileNav;