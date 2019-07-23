import React from 'react';

import Navbar from './components/Navbar/Navbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

const App = () => {
  return (
    <div style={{height: '100%'}}>
      <Navbar />
      <SideDrawer />
      <Backdrop />
    </div>
  );
};

export default App;