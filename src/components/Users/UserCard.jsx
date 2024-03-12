import React from "react";
import { useDispatch } from "react-redux";
import { modalToggle } from "../../redux/interfaceSlice";

const UserCard = (props) => {
  const { name, title, userLevel, id, managedBy, image } = props;
  const dispatch = useDispatch();

  return (
    <>
      <div
        onClick={() => {
          dispatch(modalToggle({ type: "REPORTEEEDIT", id }));
        }}
      >
        <div className={`userLevel ${userLevel}`}> Name: {name}</div>
        <div>Title: {title}</div>
        <div>ID: {id}</div>
      </div>
    </>
  );
};

export default UserCard;
