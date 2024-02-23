import React from "react";

const UserCard = (props) => {
  const { name, title, userLevel, id, managedBy, image } = props;

  return (
    <>
      <div className={`userLevel ${userLevel}`}>Name: {name}</div>
      <div>Title: {title}</div>
      <div>ID: {id}</div>
    </>
  );
};

export default UserCard;
