import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
import Home from './pages/home/home';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Projects from './pages/projects/projects';
import NotFound from './pages/error/error404';


const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/about' component={ About } />
          <Route path='/contact' component={ Contact } />
          <Route path='/projects' component={ Projects } />
          <Route component={ NotFound } />
        </Switch>
      </Router>
    </div>
  );
};

export default App;