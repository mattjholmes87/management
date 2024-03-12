import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import { selectTodoData } from "../../redux/APIdataSlice";
import { selectModalPayload } from "../../redux/interfaceSlice";
import { selectUsers } from "../../redux/usersSlice";

const ModalContent = forwardRef((props, ref) => {
  const users = useSelector(selectUsers);
  const todos = useSelector(selectTodoData);
  const modalPayload = useSelector(selectModalPayload);

  if (modalPayload.type === "TODOEDIT") {
    const chosenTodo = todos.find((todo) => todo.id == modalPayload.id);
    if (!chosenTodo) {
      console.log("Todo is not in the array.");
    }
    return (
      <div className="modal-content-container" ref={ref}>
        <h2>ID: {chosenTodo.id}</h2>
        <p>Todo: {chosenTodo.todo}</p>
        <p>
          Completed:{" "}
          {chosenTodo.completed ? "Task Completed!" : "Task Pending..."}
        </p>
      </div>
    );
  }
  if (modalPayload.type === "REPORTEEEDIT") {
    const chosenUser = users.find((user) => user.id == modalPayload.id);
    if (!chosenUser) {
      console.log("Todo is not in the array.");
    }

    return (
      <div className="modal-content-container" ref={ref}>
        <h2>Name: {chosenUser.name}</h2>
        <p>Title: {chosenUser.title}</p>
        <p>UserID: {chosenUser.id}</p>
      </div>
    );
  } else {
    return (
      <div className="modal-content-container" ref={ref}>
        "Invalid or Missing Modal Type Parameter"
      </div>
    );
  }
});

export default ModalContent;
