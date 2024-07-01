import React, { forwardRef } from "react";
import EditTodoToolbar from "./EditTodoToolbar";

const ModalEditTodo = forwardRef((props, ref) => {
  const { chosenTodo } = props;

  return (
    <div className="modal-content-container" ref={ref}>
      <EditTodoToolbar chosenTodo={chosenTodo} />
      <div className="todoText">
        <p>
          <span className="bold">Todo ID: </span> {chosenTodo.todoId}
        </p>
        <p>
          <span className="bold">Todo: </span> {chosenTodo.body}
        </p>
        <p>
          <span className="bold">Priority: </span>
          {chosenTodo.priority ? "Priority task!" : "This is not a priority"}
        </p>
        <p>
          <span className="bold">Status: </span>
          {chosenTodo.completed ? "Task Completed!" : "Task Pending..."}
        </p>
      </div>
    </div>
  );
});

export default ModalEditTodo;
