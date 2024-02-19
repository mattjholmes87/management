import React from "react";
import { Link } from "react-router-dom";
import target from "../images/icons/target-svgrepo-com.svg";
import settings from "../images/icons/set-up-svgrepo-com.svg";
import list from "../images/icons/table-of-contents-svgrepo-com.svg";
import user from "../images/icons/user-svgrepo-com.svg";
import browse from "../images/icons/browse-svgrepo-com.svg";
import chart from "../images/icons/pie-chart-svgrepo-com.svg";

const ToolBar = ({ hamburger, menuToggle }) => {
  return (
    <div className={`toolbarWrap ${hamburger ? "on" : "off"}`}>
      <div className="toolbarMenu">
        <div className="toolBox one">Action 1</div>
        <div className="toolBox two">
          <img src={target} className="logoImage" alt="targetIcon" />
          <div>Targets</div>
        </div>
        <div className="toolBox three">
          <img src={chart} className="logoImage" alt="chartIcon" />
          <div>Charts</div>
        </div>
        <div className="toolBox four">
          <img src={browse} className="logoImage" alt="browseIcon" />
          <div>Insights</div>
        </div>
        <div className="toolBox five">
          <img src={list} className="logoImage" alt="listIcon" />
          <div>Objectives</div>
        </div>
        <div className="toolBox six">
          <img src={user} className="logoImage" alt="userIcon" />
          <div>Reports</div>
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
              menuToggle("signUp");
              menuToggle("hamburger");
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
