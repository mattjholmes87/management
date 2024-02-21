import React from "react";
import { Route, Routes } from "react-router-dom";
import NavLinks from "./NavLinks";
import ToolBar from "./ToolBar";
import SignUp from "./SignUp";
import pencil from "../images/icons/label-svgrepo-com.svg";
import { menuToggle } from "../redux/interfaceSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Nav = ({ menuToggle, hamburger, getAddress, signUp }) => {
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return state.interface;
  });

  console.log(state);
  return (
    <>
      <div className="navBoxWrap">
        <div className="logoBox">
          <a href="/">
            <img src={pencil} className="logoImage" alt="logo" />{" "}
            <div>noTed</div>
          </a>
        </div>
        <div className="rightNavBox">
          <Routes>
            <Route
              path={"/login"}
              element={
                <div className="loginDropDown">
                  <h2>Welcome back.</h2>
                </div>
              }
            />
            <Route
              path="/"
              element={
                <div
                  className={`loginDropDown ${state.signUp ? "on" : "off"}`}
                  onClick={() => {
                    dispatch(menuToggle("signUp"));
                  }}
                >
                  <h2>Sign Up</h2>
                </div>
              }
            />
          </Routes>

          <div
            className="menuBox"
            onClick={() => {
              dispatch(menuToggle("hamburger"));
            }}
          >
            <div className="closeIcon">
              <label htmlFor="checkbox_toggle1" className="hamburger">
                <div
                  className={`line line-1 ${state.hamburger ? "on" : "off"}`}
                ></div>
                <div
                  className={`line line-2 ${state.hamburger ? "on" : "off"}`}
                ></div>
                <div
                  className={`line line-3 ${state.hamburger ? "on" : "off"}`}
                ></div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/login" element={""} />
        <Route
          path="/"
          element={<SignUp signUp={signUp} hamburger={hamburger} />}
        />
      </Routes>

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
