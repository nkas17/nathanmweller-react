import React from 'react';
import PropTypes from 'prop-types';
import mdn from '../imgs/MDN_promoBanner_120x240px_v2.png';
import w3c from '../imgs/w3c.png';

const SideBar = ({ children, additionalClass }) => (
  <aside
    className={`aside ${additionalClass} article__aside article__flex-item`}
  >
    {children}
    <div className="promo">
      <a className="link mdn-promo" href="https://developer.mozilla.org/en-US/">
        <img className="mdn-banner" src={`${mdn}`} alt="mdn" />
      </a>
      <hr className="hr" />
      <a className="link w3c-promo" href="https://www.w3.org/">
        <img className="w3c-banner" src={`${w3c}`} alt="w3c" />
      </a>
    </div>
  </aside>
);
SideBar.defaultProps = {
  children: null,
  additionalClass: '',
};

SideBar.propTypes = {
  children: PropTypes.node,
  additionalClass: PropTypes.string,
};

export default SideBar;
