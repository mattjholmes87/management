import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import NavLinks from "./NavLinks";
import ToolBar from "./ToolBar";
import logo from "../images/logo.png";

const Nav = ({ menuToggle, hamburger, getAddress, login }) => {
  return (
    <>
      <div className="navBoxWrap">
        <div className="logoBox">
          <img src={logo} className="logoImage" alt="logo" />
        </div>
        <div className="rightNavBox">
          <div
            className={`loginDropDown ${login ? "on" : "off"}`}
            onClick={() => {
              menuToggle("login");
            }}
          >
            Login
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

      <Routes>
        <Route
          path="/login"
          element={
            <ToolBar
              hamburger={hamburger}
              login={login}
              getAddress={getAddress}
              menuToggle={menuToggle}
            />
          }
        />
        <Route
          path="/"
          element={
            <NavLinks
              hamburger={hamburger}
              getAddress={getAddress}
              menuToggle={menuToggle}
              login={login}
            />
          }
        />
      </Routes>
    </>
  );
};

export default Nav;
