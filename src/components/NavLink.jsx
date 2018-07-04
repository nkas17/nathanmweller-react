import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavLink = ({ displayText, to }) => (
	<li className="nav__item">
		<Link
			className="link nav__link"
			to={to}
		>
			{displayText}
		</Link>
	</li>
);

NavLink.propTypes = {
	// text to display for the link
	displayText: PropTypes.string.isRequired,

	// where to link to
	to: PropTypes.string.isRequired,
};

export default NavLink;
