import React from "react";
import { headerMaker } from "../tools/headerMaker";

const HierachyDash = () => {
  return (
    <>
      <div className="hierachyWrap">
        {headerMaker("Hierachy")}
        {headerMaker("dash")}
      </div>
    </>
  );
};

export default HierachyDash;
