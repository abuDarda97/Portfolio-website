import React, {lazy, Suspense} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
const Home = lazy(() => import('./pages/home/home'));
const About = lazy(() => import('./pages/about/about'));
const Contact = lazy(() => import('./pages/contact/contact'));
const Projects = lazy(() => import('./pages/projects/projects'));
const NotFound = lazy(() => import('./pages/error/error404'));


const App = () => {
  return (
    <div>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/about' component={ About } />
            <Route path='/contact' component={ Contact } />
            <Route path='/projects' component={ Projects } />
            <Route component={ NotFound } />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;