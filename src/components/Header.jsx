import React from 'react';
import PropTypes from 'prop-types';
import NavMenu from './NavMenu';
import ContactInfo from './ContactInfo';
import nathanmweller from '../imgs/nathanmweller.jpg';

const Header = ({ alwaysShow }) => (
	<header className="page-header flex-wrapper">
		<div className="personal-info page-header__flex-item flex-item">
			<h1 className="page-header__title">nathan m weller</h1>
			<p className={`page-header__description${alwaysShow ? ' page-header__description--show' : ''}`}>
				husband, father, software architect, web developer,
				cook, photographer, fútbol player, gamer</p>
			<ContactInfo />
		</div>
		<NavMenu />
		<div className={`logo flex-item${alwaysShow ? ' logo--show' : ''}`}>
			<img
				className="logo__image"
				width="200"
				height="200"
				src={`/${nathanmweller}`}
				alt="nathan m weller"
			/>
		</div>
	</header>
);

Header.defaultProps = {
	alwaysShow: false,
};

Header.propTypes = {
	alwaysShow: PropTypes.bool,
};

export default Header;
