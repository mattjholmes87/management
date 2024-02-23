import React from "react";
import { headerMaker } from "../tools/HeaderMaker";
import UserCard from "./Users/UserCard";
import MainWindowOverview from "./OverviewDash/MainWindowOverview";
import AddTodoOverview from "./OverviewDash/AddTodoOverview";
import OverviewButtons from "./OverviewDash/OverviewButtons";
import BulletinOverview from "./OverviewDash/BulletinOverview";
import PushTodoOverview from "./OverviewDash/PushTodoOverview";
import { useSelector } from "react-redux";
import { selectActiveButton } from "../redux/interfaceSlice";
import IDCard from "./Users/IDCards";

const OverviewDash = () => {
  const state = useSelector((state) => {
    return state.interface;
  });

  const activeButton = useSelector(selectActiveButton);

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
          <IDCard />
        </div>
        <div className="outerBox three">
          <OverviewButtons />

          {activeButton === "home" ? (
            <MainWindowOverview />
          ) : activeButton === "addTodo" ? (
            <AddTodoOverview />
          ) : activeButton === "pushTodo" ? (
            <PushTodoOverview />
          ) : activeButton === "bulletin" ? (
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
