import React from "react";
import MyTodoList from "../Todos/MyTodoList";
import UsersList from "../Users/UsersList";

const MainWindowOverview = () => {
  return (
    <>
      {" "}
      <div className="innerBox nine">
        <MyTodoList />
      </div>
      <div className="innerBox ten">
        <UsersList />
      </div>
      <div className="innerBox eleven">sub box 11</div>
    </>
  );
};

export default MainWindowOverview;
