import React from "react";
import UserCard from "./Users/UserCard";

const ReportDash = () => {
  return (
    <>
      <div className="reportsWrap">
        <div className="outerBox one">
          <UserCard />
        </div>
        <div className="outerBox two"></div>
        <div className="outerBox three"></div>
        <div className="outerBox four"></div>
        <div className="outerBox five"></div>
        <div className="outerBox six"></div>
      </div>
    </>
  );
};

export default ReportDash;
