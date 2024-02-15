import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ menuToggle, hamburger }) => {
  return (
    <>
      <div className="navBoxWrap">
        <div className="logoBox">Manage</div>
        <div
          className="menuBox"
          onClick={() => {
            menuToggle();
          }}
        >
          <div className="closeIcon">
            <label htmlFor="checkbox_toggle1" className="hamburger">
              <div className={`line line-1 ${hamburger ? "on" : "off"}`}></div>
              <div className={`line line-2 ${hamburger ? "on" : "off"}`}></div>
              <div className={`line line-3 ${hamburger ? "on" : "off"}`}></div>
            </label>
          </div>
        </div>
      </div>
      <div className="hamburgerMenuWrap">
        <div className={`hamburgerMenu ${hamburger ? "on" : "off"}`}>
          <div>
            <Link to="/" className="link">
              Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
