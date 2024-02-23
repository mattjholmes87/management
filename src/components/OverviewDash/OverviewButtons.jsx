import React from "react";
import { setActiveButton } from "../../redux/interfaceSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

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
        Overview
      </div>
      <div
        className="innerBox two"
        onClick={() => {
          dispatch(setActiveButton("addTodo"));
        }}
      >
        Add a personal todo
      </div>
      <div
        className="innerBox three"
        onClick={() => {
          dispatch(setActiveButton("pushTodo"));
        }}
      >
        Push a todo to reportees
      </div>
      <div className="innerBox four">Create a weekly 1 to 1</div>
      <div className="innerBox five">Create a one off group meeting</div>
      <div className="innerBox six">Create a rolling group meeting</div>
      <div
        className="innerBox seven"
        onClick={() => {
          dispatch(setActiveButton("bulletin"));
        }}
      >
        View latest bulletin
      </div>
      {/* <div className="innerBox eight"></div> */}
    </>
  );
};

export default OverviewButtons;
