import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalToggle } from "../../redux/interfaceSlice";

const Todo = (props) => {
  const state = useSelector((state) => {
    return state.APIdata;
  });
  const { id, todo, userId, completed } = props;

  const dispatch = useDispatch();

  return (
    <>
      <div>
        <div
          className={`todoCard ${completed ? "done" : ""}`}
          key={id}
          onClick={() => {
            dispatch(modalToggle({ type: "TODOEDIT", id }));
          }}
        >
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
