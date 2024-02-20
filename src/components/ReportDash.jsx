import React from "react";
import { headerMaker } from "../tools/headerMaker";

const ReportDash = () => {
  return (
    <>
      <div className="reportsWrap">
        {headerMaker("reports")}
        {headerMaker("dash")}
      </div>
    </>
  );
};

export default ReportDash;
