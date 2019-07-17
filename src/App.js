import React from 'react';

import Navbar from './components/navbar/Navbar';
import SideDrawer from './components/sideDrawer/SideDrawer';

const App = () => {
  return (
    <div>
      <SideDrawer />
      <Navbar />
    </div>
  );
};

export default App;