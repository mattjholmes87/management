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
import interfaceSlice from "../redux/interfaceSlice";
import { menuToggle } from "../redux/interfaceSlice";
import { useDispatch, useSelector } from "react-redux";

const Interface = () => {
  return (
    <>
      <NavBar />
      <div className="routesPosition">
        <Routes>
          <Route path="/" element={<HomeBody />} />
          <Route exact path="/login" element={<OverviewDash />} />
          <Route path="/login/reportDash" element={<ReportDash />} />
          <Route path="/login/calendarDash" element={<CalendarDash />} />
          <Route path="/login/meetingDash" element={<MeetingDash />} />
          <Route path="/login/hierachyDash" element={<HierachyDash />} />
          <Route path="/login/settingsDash" element={<SettingsDash />} />
        </Routes>
      </div>
    </>
  );
};

export default Interface;
