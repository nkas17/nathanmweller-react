import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import FedPage from './pages/FedPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';

/**
 * App component that holds all routes
 */
function App() {
  return (
    <HashRouter>
      <main>
        <Routes>
          <Route path="/" element={<Header alwaysShow />} />
          <Route path="fed" element={<FedPage />} />
          <Route path="blog/*" element={<BlogPage />} />
          <Route path="about" element={<AboutPage />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
