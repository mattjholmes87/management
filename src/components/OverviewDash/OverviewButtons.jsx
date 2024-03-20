import React from "react";
import { setActiveButton } from "../../redux/interfaceSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  IoAnalytics,
  IoAddCircleOutline,
  IoArrowDownCircleOutline,
  IoBodyOutline,
  IoReturnDownBack,
  IoRepeat,
  IoBarcodeOutline,
} from "react-icons/io5";

const OverviewButtons = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return state.interface;
  });

  return (
    <>
      {" "}
      <div
        className="innerBox one"
        onClick={() => {
          dispatch(setActiveButton("home"));
        }}
      >
        <IoAnalytics /> Overview
      </div>
      <div
        className="innerBox two"
        onClick={() => {
          dispatch(setActiveButton("addTodo"));
        }}
      >
        <IoAddCircleOutline /> Add a personal todo
      </div>
      <div
        className="innerBox three"
        onClick={() => {
          dispatch(setActiveButton("pushTodo"));
        }}
      >
        <IoArrowDownCircleOutline /> Push a todo to reportees
      </div>
      <div className="innerBox four">
        <IoBodyOutline /> Create a weekly 1 to 1
      </div>
      <div className="innerBox five">
        <IoReturnDownBack /> Create one off group meeting
      </div>
      <div className="innerBox six">
        <IoRepeat /> Create a rolling group meeting
      </div>
      <div
        className="innerBox seven"
        onClick={() => {
          dispatch(setActiveButton("bulletin"));
        }}
      >
        <IoBarcodeOutline /> View latest bulletin
      </div>
      {/* <div className="innerBox eight"></div> */}
    </>
  );
};

export default OverviewButtons;
