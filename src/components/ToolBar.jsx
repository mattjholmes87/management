import React from "react";
import { Link } from "react-router-dom";
import upload from "../images/icons/upload-svgrepo-com.svg";
import settings from "../images/icons/set-up-svgrepo-com.svg";
import time from "../images/icons/time-svgrepo-com.svg";
import user from "../images/icons/user-svgrepo-com.svg";
import table from "../images/icons/table-of-contents-svgrepo-com.svg";
import insipration from "../images/icons/inspiration-svgrepo-com.svg";
import { menuToggle } from "../redux/interfaceSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const ToolBar = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return state.interface;
  });

  return (
    <div className={`toolbarWrap ${state.hamburger ? "on" : "off"}`}>
      <div className="toolbarMenu">
        <div className="toolBox one off">Tools</div>
        <div className="toolBox two">
          <img src={upload} className="logoImage" alt="overviewIcon" />
          <div>Overview</div>
        </div>
        <div className="toolBox three">
          <img src={user} className="logoImage" alt="reporteeIcon" />
          <div>Reportee</div>
        </div>
        <div className="toolBox four">
          <img src={time} className="logoImage" alt="calendarIcon" />
          <div>Calendar</div>
        </div>
        <div className="toolBox five">
          <img src={table} className="logoImage" alt="meetingIcon" />
          <div>Meetings</div>
        </div>
        <div className="toolBox six">
          <img src={insipration} className="logoImage" alt="hierachyIcon" />
          <div>Hierachy</div>
        </div>
        <div className="toolBox seven">
          <img src={settings} className="logoImage" alt="settingsIcon" />
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
