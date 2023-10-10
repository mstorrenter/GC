import React from "react";

import IconLG from "../../resources/images/logo-lg-transparent-png.png";
import IconSM from "../../resources/images/logo-sm-transparent.png";

import "./Nav.css";
import "./NavResponsive.css";

const Nav = () => {
  return (
    <>
      <header className="header container">
        <nav>
          <div className="nav-panel">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#products">Products</a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/greencratebd"
                  target="_blank"
                  rel="noreferrer"
                >
                  Order Now
                </a>
              </li>
            </ul>
          </div>
          <div className="branding-panel">
            <div className="calling-link-wrapper">
              <a className="calling-link" href="tel: +8801886346307">
                <span className="call-now">Call Now </span>
                <span className="number">018 86 34 63 07</span>
              </a>
            </div>
            <div className="icon">
              <a href="/">
                <div className="icon-lg">
                  <img src={IconLG} alt="" />
                </div>
                <div className="icon-sm">
                  <img src={IconSM} alt="" />
                </div>
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
