import React from "react";
import { headerMaker } from "../tools/headerMaker";
import UserCard from "./UserCard";

const OverviewDash = () => {
  return (
    <>
      {" "}
      <div className="overviewWrap">
        <div className="outerBox one">
          {" "}
          {headerMaker("the")}
          {headerMaker("dashboard.")}
        </div>
        <div className="outerBox two">
          <UserCard />
        </div>
        <div className="outerBox three">
          {/* <div className="innerBox one"></div> */}
          <div className="innerBox two">Add a personal todo</div>
          <div className="innerBox three">Create a weekly 1 to 1</div>
          <div className="innerBox four">Create a one off group meeting</div>
          <div className="innerBox five">Create a rolling group meeting</div>
          <div className="innerBox six">View latest bulletin</div>
          {/* <div className="innerBox seven">sub box 7</div> */}
          {/* <div className="innerBox eight"></div> */}
          <div className="innerBox nine">sub box 9</div>
          <div className="innerBox ten">sub box 10</div>
          <div className="innerBox eleven">sub box 11</div>
        </div>
      </div>
    </>
  );
};

export default OverviewDash;
