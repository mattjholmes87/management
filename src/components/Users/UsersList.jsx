import React from "react";
import { useSelector } from "react-redux";
import { selectUsers } from "../../redux/usersSlice";
import UserCard from "./UserCard";

const UsersList = () => {
  const state = useSelector((state) => {
    return state.userAccounts;
  });

  const users = useSelector(selectUsers);

  //Changer filter string to be dyanmic to userName of logged in
  let filterUsers = users.filter((user) => user.managedBy === "Matt Holmes");

  return (
    <>
      <div className="userCardWrap">
        <h2>My Reportees</h2>

        {}
        {filterUsers.map((user) => {
          return (
            <div className="userCard" key={user.id}>
              <UserCard {...user} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UsersList;
