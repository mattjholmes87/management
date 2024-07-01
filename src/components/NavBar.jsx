import React from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import ToolBar from "./ToolBar";
import SignUp from "./SignUp";
import {
  storeToken,
  menuToggle,
  selectHamburger,
  selectSignUp,
} from "../redux/interfaceSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { IoFileTrayStackedOutline } from "react-icons/io5";
import axios from "axios";

const Nav = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return state.interface;
  });

  const signUpToggle = useSelector(selectSignUp);
  const hamburgerToggle = useSelector(selectHamburger);

  const logout = async () => {
    await axios.delete("http://localhost:6001/user/login", {
      headers: { token: localStorage.getItem("token") },
    });
    localStorage.removeItem("token");
    dispatch(storeToken(null));
  };

  return (
    <>
      <div className="navBoxWrap">
        <div className="logoBox">
          <Link to="/" className="link">
            <IoFileTrayStackedOutline className="logoImage" />
            <div>
              <span>in</span>Tray
            </div>
          </Link>
        </div>
        <div className="rightNavBox">
          {state.token ? (
            <div className="loginDropDown" onClick={logout}>
              <h2>Logout.</h2>
            </div>
          ) : (
            ""
          )}
          {state.token ? (
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

      {state.token ? "" : <SignUp />}
      {state.token ? <ToolBar /> : ""}
      {state.token ? "" : <NavLinks />}
    </>
  );
};

export default Nav;
