import React from "react";
import { headerMaker } from "../tools/headerMaker";

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
