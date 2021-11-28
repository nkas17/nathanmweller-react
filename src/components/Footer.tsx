import React from 'react';
// @ts-ignore
import nathanmweller from '../imgs/nathanmweller.jpg';

function Footer() {
  return (
    <footer className="footer flex-item">
      <div className="logo footer__logo">
        <img
          className="logo__image"
          width="200"
          height="200"
          src={`${nathanmweller}`}
          alt="nathan m weller"
        />
        <p className="logo__description">
          husband,&nbsp;father, software&nbsp;architect, web&nbsp;developer,
          cook, photographer, fútbol player, gamer
        </p>
      </div>
    </footer>
  );
}

export default Footer;
