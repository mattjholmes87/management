import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalToggle } from "../../redux/interfaceSlice";
import {
  IoNotificationsCircleOutline,
  IoNotificationsOffCircleOutline,
} from "react-icons/io5";
import { MdOutlineCategory } from "react-icons/md";

const Todo = (props) => {
  const state = useSelector((state) => {
    return state.APIdata;
  });
  const {
    body,
    category,
    completed,
    createdBy,
    createdOn,
    displayOn,
    dueDate,
    managedBy,
    meetingId,
    name,
    priority,
    signedOff,
    signedOffOn,
    todoId,
    userId,
  } = props;

  const dispatch = useDispatch();

  return (
    <>
      <div
        className={`todoCard ${completed ? "done" : ""} ${
          priority ? "priority" : ""
        }`}
        key={todoId}
        onClick={() => {
          dispatch(modalToggle({ type: "TODOEDIT", todoId }));
        }}
      >
        <div className="todoText">
          <div className="todo">
            <span>Todo: </span> {name}
          </div>
          <div className="id">
            <span>Rank: </span>
            {todoId}
          </div>
          <div className="usedId">
            <span>ID: </span>
            {userId}
          </div>
          <div className="status">
            <span>Status: </span>
            {completed ? "Task Completed" : "Task Incomplete"}
          </div>
        </div>
        <div className="todoIcon">
          <div>
            {priority ? (
              <IoNotificationsCircleOutline className="svg priority" />
            ) : (
              <IoNotificationsOffCircleOutline className="svg notPriority" />
            )}
          </div>
          <div>
            <MdOutlineCategory className={`svg category${category}`} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
