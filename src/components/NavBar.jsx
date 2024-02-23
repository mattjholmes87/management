import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import NavLinks from "./NavLinks";
import ToolBar from "./ToolBar";
import SignUp from "./SignUp";
import pencil from "../images/icons/label-svgrepo-com.svg";
import {
  menuToggle,
  selectHamburger,
  selectSignUp,
} from "../redux/interfaceSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return state.interface;
  });

  const signUpToggle = useSelector(selectSignUp);
  const hamburgerToggle = useSelector(selectHamburger);

  return (
    <>
      <div className="navBoxWrap">
        <div className="logoBox">
          <Link to="/" className="link">
            <img src={pencil} className="logoImage" alt="logo" />{" "}
            <div>noTed</div>
          </Link>
        </div>
        <div className="rightNavBox">
          {state.loginStatus ? (
            <div className="loginDropDown">
              <h2>Welcome back.</h2>
            </div>
          ) : (
            ""
          )}
          {state.loginStatus ? (
            ""
          ) : (
            <div
              className={`loginDropDown ${signUpToggle ? "on" : "off"}`}
              onClick={() => {
                dispatch(menuToggle("signUp"));
              }}
            >
              <h2>Sign Up</h2>
            </div>
          )}

          <div
            className="menuBox"
            onClick={() => {
              dispatch(menuToggle("hamburger"));
            }}
          >
            <div className="closeIcon">
              <label htmlFor="checkbox_toggle1" className="hamburger">
                <div
                  className={`line line-1 ${hamburgerToggle ? "on" : "off"}`}
                ></div>
                <div
                  className={`line line-2 ${hamburgerToggle ? "on" : "off"}`}
                ></div>
                <div
                  className={`line line-3 ${hamburgerToggle ? "on" : "off"}`}
                ></div>
              </label>
            </div>
          </div>
        </div>
      </div>

      {state.loginStatus ? "" : <SignUp />}
      {state.loginStatus ? <ToolBar /> : ""}
      {state.loginStatus ? "" : <NavLinks />}
    </>
  );
};

export default Nav;
