import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavLink = ({ displayText, to, isExternal }) => (
	<li className="nav__item">
		{(isExternal && (
			<a className="link nav__link" href={to}>
				{displayText}
			</a>
		)) || (
			<Link className="link nav__link" to={to}>
				{displayText}
			</Link>
		)}
	</li>
);

NavLink.defaultProps = {
	isExternal: false,
};

NavLink.propTypes = {
	// text to display for the link
	displayText: PropTypes.string.isRequired,

	// where to link to
	to: PropTypes.string.isRequired,

	// true if the link is an external link
	isExternal: PropTypes.bool,
};

export default NavLink;
