import React from "react";
import MyTodoList from "../MyTodoList";

const MainWindowOverview = () => {
  return (
    <>
      {" "}
      <div className="innerBox nine">
        <MyTodoList />
      </div>
      <div className="innerBox ten">sub box 10</div>
      <div className="innerBox eleven">sub box 11</div>
    </>
  );
};

export default MainWindowOverview;
