import React, { forwardRef } from "react";

const ModalUser = forwardRef((props, ref) => {
  const { chosenUser } = props;

  return (
    <div className="modal-content-container" ref={ref}>
      <h2>First Name: {chosenUser.firstname}</h2>
      <p>Surname: {chosenUser.surname}</p>
      <p>UserID: {chosenUser.userId}</p>
    </div>
  );
});

export default ModalUser;
