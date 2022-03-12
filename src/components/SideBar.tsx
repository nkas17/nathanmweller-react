import * as React from 'react';
// @ts-ignore
import mdn from '../imgs/MDN_promoBanner_120x240px_v2.png';
// @ts-ignore
import w3c from '../imgs/w3c.png';

export interface SideBarProps {
  children?: React.VFC | any;
  additionalClass?: string;
}

function SideBar({ children = null, additionalClass = '' }: SideBarProps) {
  return (
    <aside
      className={`aside ${additionalClass} article__aside article__flex-item`}
    >
      {children}
      <div className="promo">
        <a
          className="link mdn-promo"
          href="https://developer.mozilla.org/en-US/"
        >
          <img className="mdn-banner" src={`${mdn}`} alt="mdn" />
        </a>
        <hr className="hr" />
        <a className="link w3c-promo" href="https://www.w3.org/">
          <img className="w3c-banner" src={`${w3c}`} alt="w3c" />
        </a>
      </div>
    </aside>
  );
}

export default SideBar;
