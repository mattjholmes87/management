import React from "react";
import { headerMaker } from "../tools/HeaderMaker";

const MeetingDash = () => {
  return (
    <>
      <div className="meetingWrap">
        {headerMaker("meetings")}
        {headerMaker("dash")}
      </div>
    </>
  );
};

export default MeetingDash;
