import React from 'react';

import './Mobile.css';

const MobileNav = props => {
  if(props.status) {
    return (
      <ul className='mobile__navbar'>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    );
  } else {
    return null;
  }
};

export default MobileNav;