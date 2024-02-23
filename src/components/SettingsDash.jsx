import React from "react";
import { headerMaker } from "../tools/HeaderMaker";

const SettingsDash = () => {
  return (
    <>
      {" "}
      <div className="settingsWrap">
        {headerMaker("settings")}
        {headerMaker("dash")}
      </div>
    </>
  );
};

export default SettingsDash;
