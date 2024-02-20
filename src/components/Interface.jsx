import React, { useState } from "react";
import NavBar from "./NavBar";
import HomeBody from "./HomeBody";
import OverviewDash from "./OverviewDash";
import ReportDash from "./ReportDash";
import CalendarDash from "./CalendarDash";
import MeetingDash from "./MeetingDash";
import HierachyDash from "./HierachyDash";
import SettingsDash from "./SettingsDash";
import { Routes, Route } from "react-router-dom";

const Interface = () => {
  const [state, setState] = useState({
    hamburger: false,
    signUp: false,
  });

  const menuToggle = (input) => {
    let copyState = { ...state };
    copyState[input] = !copyState[input];
    setState(copyState);
    console.log(state);
  };

  const getAddress = () => {
    let address = window.location.href;
    setState({ ...state, address });
  };

  return (
    <>
      <NavBar
        menuToggle={menuToggle}
        hamburger={state.hamburger}
        getAddress={getAddress}
        address={state.address}
        signUp={state.signUp}
      />
      <div className="routesPosition">
        <Routes>
          <Route path="/" element={<HomeBody />} />
          <Route path="/login" element={<OverviewDash />} />
          <Route path="/reportDash" element={<ReportDash />} />
          <Route path="/calendarDash" element={<CalendarDash />} />
          <Route path="/meetingDash" element={<MeetingDash />} />
          <Route path="/hierachyDash" element={<HierachyDash />} />
          <Route path="/settingsDash" element={<SettingsDash />} />
        </Routes>
      </div>
    </>
  );
};

export default Interface;
