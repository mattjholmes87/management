import React from "react";
import { Route, Routes } from "react-router-dom";
import NavLinks from "./NavLinks";
import ToolBar from "./ToolBar";
import logo from "../images/logo.png";
import Login from "./Login";

const Nav = ({ menuToggle, hamburger, getAddress, signUp }) => {
  return (
    <>
      <div className="navBoxWrap">
        <div className="logoBox">
          <img src={logo} className="logoImage" alt="logo" />
        </div>
        <div className="rightNavBox">
          <div
            className={`loginDropDown ${signUp ? "on" : "off"}`}
            onClick={() => {
              menuToggle("signUp");
            }}
          >
            <h2>Sign Up</h2>
          </div>
          <div
            className="menuBox"
            onClick={() => {
              menuToggle("hamburger");
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
      <Login signUp={signUp} hamburger={hamburger} />

      <Routes>
        <Route
          path="/login"
          element={<ToolBar hamburger={hamburger} menuToggle={menuToggle} />}
        />
        <Route
          path="/"
          element={<NavLinks hamburger={hamburger} getAddress={getAddress} />}
        />
      </Routes>
    </>
  );
};

export default Nav;
