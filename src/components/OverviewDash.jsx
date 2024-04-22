import React, { useEffect } from "react";
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
import { Navigate } from "react-router-dom";
import { getTodos, getReportees } from "../dataController/fetching";

const OverviewDash = () => {
  const state = useSelector((state) => {
    return state.interface;
  });
  const token = localStorage.getItem("token");
  const activeButton = useSelector(selectActiveButton);

  useEffect(() => {
    getTodos(token);
    getReportees(token);
  }, []);

  if (!token) {
    return <Navigate replace to="/login" />;
  } else {
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
  }
};

export default OverviewDash;
