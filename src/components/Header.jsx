import React from 'react';
import NavMenu from './NavMenu';
import ContactInfo from './ContactInfo';
import nathanmweller from '../imgs/nathanmweller.jpg';

const Header = () => (
	<header className="page-header flex-wrapper">
		<div className="personal-info page-header__flex-item flex-item">
			<h1 className="page-header__title">nathan m weller</h1>
			<p className="page-header__description">
				husband, father, software architect, web developer,
				cook, photographer, fútbol player, gamer</p>
			<ContactInfo />
		</div>
		<NavMenu />
		<div className="logo flex-item">
			<img
				className="logo__image"
				width="200"
				height="200"
				src={nathanmweller}
				alt="nathan m weller"
			/>
		</div>
	</header>
);

export default Header;
