import React from "react";
import { Link } from "react-router-dom";

const ToolBar = ({ hamburger, menuToggle }) => {
  return (
    <div className="hamburgerMenuWrap tools">
      <div className={`hamburgerMenu tools ${hamburger ? "on" : "off"}`}>
        <div class="toolBarMenuBox">
          <div className="toolBarMenu">
            <div className="toolBox one">Action 1</div>
            <div className="toolBox two">Action 2</div>
            <div className="toolBox three">Action 3</div>
            <div className="toolBox four">Action 4</div>
            <div className="toolBox five">Action 5</div>
            <div className="toolBox six">Action 6</div>
          </div>
          <div className="signOutBox">
            <Link
              to="/"
              className="link"
              onClick={() => {
                menuToggle();
              }}
            >
              Sign Out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolBar;
