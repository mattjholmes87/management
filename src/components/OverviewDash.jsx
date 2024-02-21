import React from "react";
import { headerMaker } from "../tools/headerMaker";
import UserCard from "./UserCard";
import MyTodoList from "./MyTodoList";

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
          <div className="innerBox one">Add a personal todo</div>
          <div className="innerBox two">Push a todo to reportees</div>
          <div className="innerBox three">Create a weekly 1 to 1</div>
          <div className="innerBox four">Create a one off group meeting</div>
          <div className="innerBox five">Create a rolling group meeting</div>
          <div className="innerBox six">View latest bulletin</div>
          {/* <div className="innerBox seven">sub box 7</div> */}
          {/* <div className="innerBox eight"></div> */}
          <div className="innerBox nine">
            <MyTodoList />
          </div>
          <div className="innerBox ten">sub box 10</div>
          <div className="innerBox eleven">sub box 11</div>
        </div>
      </div>
    </>
  );
};

export default OverviewDash;
