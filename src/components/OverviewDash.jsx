import React from "react";
import { headerMaker } from "../tools/headerMaker";

const OverviewDash = () => {
  return (
    <>
      {" "}
      <div className="overviewWrap">
        {headerMaker("the")}
        {headerMaker("dashboard")}
      </div>
    </>
  );
};

export default OverviewDash;
