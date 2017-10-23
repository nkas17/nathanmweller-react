import React from 'react';
import NavLink from './NavLink';

const NavMenu = () => (
	<nav className="nav flex-item">
		<ul>
			<NavLink displayText="home" to="/" />
			<NavLink displayText="fed" to="/fed" />
			<NavLink displayText="blog" to="/blog/a1" />
			<NavLink displayText="about" to="/about" />
		</ul>
	</nav>
);

export default NavMenu;
