import React from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ hamburger, menuToggle }) => {
  return (
    <div className={`hamburgerMenuWrap ${hamburger ? "on" : "off"}`}>
      <div className={`hamburgerMenu`}>
        <div>
          <p>
            <Link to="/" className="link">
              Home
            </Link>
          </p>
          <p>
            <Link to="/" className="link">
              Sign Up
            </Link>
          </p>
          <p>
            <Link to="/" className="link">
              Contact Us
            </Link>
          </p>
          <p>
            <Link to="/login" className="link">
              Login
            </Link>
          </p>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      </div>
    </div>
  );
};

export default NavLinks;
