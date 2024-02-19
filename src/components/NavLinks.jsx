import React from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ hamburger, getAddress }) => {
  return (
    <div className={`hamburgerMenuWrap ${hamburger ? "on" : "off"}`}>
      <div className={`hamburgerMenu`}>
        <div>
          <p>
            <Link
              to="/"
              className="link"
              onClick={() => {
                getAddress();
              }}
            >
              Home
            </Link>
          </p>
          <p>
            <Link
              to="/"
              className="link"
              onClick={() => {
                getAddress();
              }}
            >
              Sign Up
            </Link>
          </p>
          <p>
            <Link
              to="/"
              className="link"
              onClick={() => {
                getAddress();
              }}
            >
              Contact Us
            </Link>
          </p>
          <p>
            <Link to="/login" className="link">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavLinks;
