import React from 'react';
import { Link } from 'react-router-dom';

export interface NavLinkProps {
  displayText: string;
  to: string;
  isExternal?: boolean;
}

function NavLink({ displayText, to, isExternal = false }: NavLinkProps) {
  return (
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
}

export default NavLink;
