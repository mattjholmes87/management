import React from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ hamburger, getAddress }) => {
  return (
    <div className="hamburgerMenuWrap">
      <div className={`hamburgerMenu ${hamburger ? "on" : "off"}`}>
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
        </div>
      </div>
    </div>
  );
};

export default NavLinks;
