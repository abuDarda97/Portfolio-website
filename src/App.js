import React from 'react';

import Navbar from './components/Navbar/Navbar';
import SideDrawer from './components/SideDrawer/SideDrawer';

const App = () => {
  return (
    <div>
      <SideDrawer />
      <Navbar />
    </div>
  );
};

export default App;