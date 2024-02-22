import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginToggle } from "../redux/interfaceSlice";

const NavLinks = () => {
  const state = useSelector((state) => {
    return state.interface;
  });

  const dispatch = useDispatch();

  return (
    <div className={`hamburgerMenuWrap ${state.nav.hamburger ? "on" : "off"}`}>
      <div className={`hamburgerMenu`}>
        <div>
          <p>
            <Link
              to="/"
              className="link"
              onClick={() => {
                dispatch(loginToggle("out"));
              }}
            >
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
            <Link
              to="/overviewDash"
              className="link"
              onClick={() => {
                dispatch(loginToggle("in"));
              }}
            >
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
