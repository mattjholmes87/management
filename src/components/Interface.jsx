import React from "react";
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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginFullPage from "./Login/LoginFullPage";

const Interface = () => {
  const modal = useSelector(selectModalToggle);

  return (
    <>
      <ToastContainer />
      <NavBar />
      {modal ? <Modal /> : ""}
      <div className="routesPosition">
        <Routes>
          <Route path="/" element={<HomeBody />} />
          <Route exact path="/overviewDash" element={<OverviewDash />} />
          <Route path="/login" element={<LoginFullPage />} />
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
