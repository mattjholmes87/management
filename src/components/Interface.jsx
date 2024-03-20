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
import Modal from "./Modal/Modal";
import { selectModalToggle } from "../redux/interfaceSlice";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Interface = () => {
  const modal = useSelector(selectModalToggle);

  return (
    <>
      <NavBar />
      {modal ? <Modal /> : ""}
      <div className="routesPosition">
        <ToastContainer />
        <Routes>
          <Route path="/" element={<HomeBody />} />
          <Route exact path="/overviewDash" element={<OverviewDash />} />
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
