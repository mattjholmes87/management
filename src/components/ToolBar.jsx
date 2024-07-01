import React from "react";
import { Link } from "react-router-dom";
import { menuToggle, storeToken } from "../redux/interfaceSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { IoEarth, IoSettingsOutline } from "react-icons/io5";
import { PiCalendarDuotone } from "react-icons/pi";
import {
  FaArrowsDownToPeople,
  FaPeopleLine,
  FaSlideshare,
} from "react-icons/fa6";
import axios from "axios";

const ToolBar = () => {
  const dispatch = useDispatch();

  const logout = async () => {
    await axios.delete("http://localhost:6001/user/login", {
      headers: { token: localStorage.getItem("token") },
    });
    localStorage.removeItem("token");
    dispatch(storeToken(null));
  };

  const state = useSelector((state) => {
    return state.interface;
  });

  return (
    <div className={`toolbarWrap ${state.nav.hamburger ? "on" : "off"}`}>
      <div className="toolbarMenu">
        <div className="toolBox one off">Tools</div>
        <div className="toolBox two">
          <Link to="/overviewdash" className="link">
            <IoEarth />
            <div>Overview</div>
          </Link>
        </div>
        <div className="toolBox three">
          <FaArrowsDownToPeople />
          <div>Reportee</div>
        </div>
        <div className="toolBox four">
          <PiCalendarDuotone />
          <div>Calendar</div>
        </div>
        <div className="toolBox five">
          <FaSlideshare />
          <div>Meetings</div>
        </div>
        <div className="toolBox six">
          <FaPeopleLine />
          <div>Hierachy</div>
        </div>
        <div className="toolBox seven">
          <IoSettingsOutline />
          <div>Settings</div>
        </div>
        <div className="toolBox eight">Action 8</div>
        <div className="toolBox nine">Action 9</div>
        <div className="toolBox ten">Action 10</div>
        <div className="toolBox eleven">Action 11</div>
        <div className="toolBox twelve">Action 12</div>
        <div className="toolBox thirteen">
          <Link
            to="/"
            className="link"
            onClick={() => {
              dispatch(menuToggle("hamburger"));
              logout();
            }}
          >
            Sign Out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToolBar;
