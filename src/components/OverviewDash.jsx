import React from "react";
import { headerMaker } from "../tools/headerMaker";
import UserCard from "./UserCard";
import MainWindowOverview from "./OverviewDash/MainWindowOverview";
import AddTodoOverview from "./OverviewDash/AddTodoOverview";
import OverviewButtons from "./OverviewDash/OverviewButtons";
import BulletinOverview from "./OverviewDash/BulletinOverview";
import PushTodoOverview from "./OverviewDash/PushTodoOverview";
import { useSelector } from "react-redux";

const OverviewDash = () => {
  const state = useSelector((state) => {
    return state.interface;
  });

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
          <OverviewButtons />
          {state.button.addTodo ? (
            <AddTodoOverview />
          ) : state.button.pushTodo ? (
            <PushTodoOverview />
          ) : state.button.bulletin ? (
            <BulletinOverview />
          ) : (
            <MainWindowOverview />
          )}
        </div>
      </div>
    </>
  );
};

export default OverviewDash;
