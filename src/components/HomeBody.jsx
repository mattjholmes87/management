import React from "react";
import { headerMaker } from "../tools/HeaderMaker";

const HomeBody = () => {
  return (
    <>
      <div className="bodyWrap">
        {headerMaker("your")}
        {headerMaker("tasks")}
        {headerMaker("in")}
        {headerMaker("one")}
        {headerMaker("place.")}
      </div>
    </>
  );
};

export default HomeBody;
