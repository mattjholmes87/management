import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import { selectTodoData } from "../../redux/todosSlice";
import { selectModalPayload } from "../../redux/interfaceSlice";
import { selectReportees } from "../../redux/usersSlice";
import ModalViewTodo from "./ModalViewTodo";
import ModalUser from "./ModalUser";

const ModalContent = forwardRef((props, ref) => {
  const reportees = useSelector(selectReportees);
  const todos = useSelector(selectTodoData);
  const modalPayload = useSelector(selectModalPayload);

  if (modalPayload.type === "TODOEDIT") {
    const chosenTodo = todos.find((todo) => todo.todoId == modalPayload.todoId);
    if (!chosenTodo) {
      console.log("Todo is not in the array.");
    }
    return <ModalViewTodo chosenTodo={chosenTodo} ref={ref} />;
  }
  if (modalPayload.type === "REPORTEEEDIT") {
    const chosenUser = reportees.find(
      (reportee) => reportee.userId == modalPayload.userId
    );
    if (!chosenUser) {
      console.log("Todo is not in the array.");
    }

    return <ModalUser chosenUser={chosenUser} ref={ref} />;
  } else {
    return (
      <div className="modal-content-container" ref={ref}>
        "Invalid or Missing Modal Type Parameter"
      </div>
    );
  }
});

export default ModalContent;
