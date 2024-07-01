import React from "react";
import Modal from "./Modal/Modal";
import { selectModalToggle, modalToggle } from "../redux/interfaceSlice";
import { useSelector, useDispatch } from "react-redux";

const ReportDash = () => {
  const state = useSelector((state) => {
    return state.interface;
  });

  const modal = useSelector(selectModalToggle);
  const dispatch = useDispatch();

  return (
    <>
      <div className="reportsWrap">
        <button
          onClick={() => {
            dispatch(modalToggle());
          }}
        >
          Pop Up
        </button>{" "}
        {modal ? <Modal /> : ""}
        <div className="outerBox one"></div>
        <div className="outerBox two"></div>
        <div className="outerBox three"></div>
        <div className="outerBox four"></div>
        <div className="outerBox five"></div>
        <div className="outerBox six"></div>
      </div>
    </>
  );
};

export default ReportDash;
