import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import FedPage from './pages/FedPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';

/**
 * Main component that holds all routes
 */
function Routes() {
  return (
    <HashRouter>
      <main>
        <Route exact path="/" component={() => <Header alwaysShow />} />
        <Route exact path="/fed" component={FedPage} />
        <Route path="/blog" component={BlogPage} />
        <Route exact path="/about" component={AboutPage} />
      </main>
    </HashRouter>
  );
}

export default Routes;
