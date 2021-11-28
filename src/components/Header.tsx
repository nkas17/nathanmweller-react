import React from 'react';
import NavMenu from './NavMenu';
import ContactInfo from './ContactInfo';
// @ts-ignore
import nathanmweller from '../imgs/nathanmweller.jpg';

export interface HeaderProps {
  alwaysShow?: boolean;
}

function Header({ alwaysShow = false }: HeaderProps) {
  return (
    <header className="page-header flex-wrapper">
      <div className="personal-info page-header__flex-item flex-item">
        <h1 className="page-header__title">nathan m weller</h1>
        <p
          className={`page-header__description${
            alwaysShow ? ' page-header__description--show' : ''
          }`}
        >
          husband, father, software architect, web developer, cook,
          photographer, fútbol player, gamer
        </p>
        <ContactInfo />
      </div>
      <NavMenu />
      <div className={`logo flex-item${alwaysShow ? ' logo--show' : ''}`}>
        <img
          className="logo__image"
          width="200"
          height="200"
          src={`${nathanmweller}`}
          alt="nathan m weller"
        />
      </div>
    </header>
  );
}

export default Header;
