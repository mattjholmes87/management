import React from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import ToolBar from "./ToolBar";
import logo from "../images/logo.png";
import Login from "./Login";

const Nav = ({ menuToggle, hamburger, getAddress }) => {
  return (
    <>
      <div className="navBoxWrap">
        <div className="logoBox">
          <img src={logo} className="logoImage" />
        </div>
        <div className="rightNavBox">
          <div className="loginBox">
            {" "}
            <p>
              <Link
                to="/login"
                className={`link ${
                  window.location.href === "http://localhost:3000/login"
                    ? "loggedIn"
                    : ""
                }`}
                onClick={() => {
                  menuToggle();
                }}
              >
                {window.location.href === "http://localhost:3000/login"
                  ? "Logged In"
                  : "Login"}
              </Link>
            </p>
          </div>
          <div
            className="menuBox"
            onClick={() => {
              menuToggle();
            }}
          >
            <div className="closeIcon">
              <label htmlFor="checkbox_toggle1" className="hamburger">
                <div
                  className={`line line-1 ${hamburger ? "on" : "off"}`}
                ></div>
                <div
                  className={`line line-2 ${hamburger ? "on" : "off"}`}
                ></div>
                <div
                  className={`line line-3 ${hamburger ? "on" : "off"}`}
                ></div>
              </label>
            </div>
          </div>
        </div>
      </div>
      {window.location.href === "http://localhost:3000/login" ? (
        <Login
          hamburger={hamburger}
          getAddress={getAddress}
          menuToggle={menuToggle}
        />
      ) : (
        // <ToolBar
        // hamburger={hamburger}
        // getAddress={getAddress}
        // menuToggle={menuToggle}
        // />
        <NavLinks hamburger={hamburger} getAddress={getAddress} />
      )}
    </>
  );
};

export default Nav;
