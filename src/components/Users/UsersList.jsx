import React from "react";
import { useSelector } from "react-redux";
import { selectReportees } from "../../redux/usersSlice";
import UserCard from "./UserCard";

const UsersList = () => {
  const reportees = useSelector(selectReportees);

  return (
    <>
      <div className="userCardWrap">
        <h2>My Reportees</h2>

        {reportees.map((user) => {
          return (
            <div className="userCard" key={user.userId}>
              <UserCard {...user} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UsersList;
