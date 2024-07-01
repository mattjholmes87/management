import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { menuToggle, selectHamburger } from "../redux/interfaceSlice";

const NavLinks = () => {
  const hamburgerToggle = useSelector(selectHamburger);
  const dispatch = useDispatch();

  return (
    <div className={`hamburgerMenuWrap ${hamburgerToggle ? "on" : "off"}`}>
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
            <Link
              to="/login"
              className="link"
              onClick={() => {
                dispatch(menuToggle("hamburger"));
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
