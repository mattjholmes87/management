import React from "react";
import { useDispatch } from "react-redux";
import { modalToggle } from "../../redux/interfaceSlice";

const UserCard = (props) => {
  const {
    userId,
    firstname,
    surname,
    school,
    schoolId,
    staffcode,
    groupId,
    groupName,
    userLevel,
  } = props;
  const dispatch = useDispatch();

  return (
    <>
      <div
        onClick={() => {
          dispatch(modalToggle({ type: "REPORTEEEDIT", userId }));
        }}
      >
        <div className={`userLevel ${userLevel}`}>
          {" "}
          Name: {firstname} {surname}
        </div>
        <div>Groups: {groupName}</div>
        <div>School: {school}</div>
        <div>Staffcode: {staffcode}</div>
        <div>User ID: {userId}</div>
      </div>
    </>
  );
};

export default UserCard;
