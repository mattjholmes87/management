import React from "react";
import { useSelector } from "react-redux";
import { selectTodoData } from "../../redux/APIdataSlice";

const Todo = (props) => {
  const state = useSelector((state) => {
    return state.APIdata;
  });
  const { id, todo, userId, completed } = props;
  const todoData = useSelector(selectTodoData);

  return (
    <>
      <div>
        <div className={`todoCard ${completed ? "done" : ""}`} key={id}>
          <div className="todo">
            <span>Todo: </span> {todo}
          </div>
          <div className="id">
            <span>Rank: </span>
            {id}
          </div>
          <div className="usedId">
            <span>ID: </span>
            {userId}
          </div>
          <div className="status">
            <span>Completed: </span>
            {completed ? "Task Completed" : "Task Incomplete"}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
