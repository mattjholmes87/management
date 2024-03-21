import React, { forwardRef } from "react";

const ModalUser = forwardRef((props, ref) => {
  const { chosenUser } = props;

  return (
    <div className="modal-content-container" ref={ref}>
      <h2>Name: {chosenUser.name}</h2>
      <p>Title: {chosenUser.title}</p>
      <p>UserID: {chosenUser.id}</p>
    </div>
  );
});

export default ModalUser;
