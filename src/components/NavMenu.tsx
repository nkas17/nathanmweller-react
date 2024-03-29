import React from 'react';
import NavLink from './NavLink';

function NavMenu() {
  return (
    <nav className="nav flex-item">
      <ul>
        <NavLink displayText="home" to="/" />
        <NavLink displayText="fed" to="/fed" />
        <NavLink
          displayText="blog"
          to="https://www.blog.nathanmweller.com"
          isExternal
        />
        <NavLink displayText="about" to="/about" />
      </ul>
    </nav>
  );
}

export default NavMenu;
