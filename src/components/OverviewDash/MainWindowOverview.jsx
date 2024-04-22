import React, { useEffect } from "react";
import MyTodoList from "../Todos/MyTodoList";
import UsersList from "../Users/UsersList";

const MainWindowOverview = () => {
  return (
    <>
      <div className="innerBox nine">
        <div className="mainWindow wrapper">
          <div className="mainWindow inner one">
            <MyTodoList />
          </div>
          <div className="mainWindow inner two">
            <UsersList />
          </div>
          <div className="mainWindow inner three">Next section</div>
        </div>
      </div>
    </>
  );
};

export default MainWindowOverview;
