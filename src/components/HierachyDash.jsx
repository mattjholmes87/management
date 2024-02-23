import React from "react";
import { headerMaker } from "../tools/HeaderMaker";

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
