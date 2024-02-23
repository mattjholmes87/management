import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";
import { selectTodoData } from "../../redux/APIdataSlice";

const MyTodoList = () => {
  const state = useSelector((state) => {
    return state.APIdata;
  });

  const todoData = useSelector(selectTodoData);

  return (
    <>
      <div className="todoList">
        <h2>My Todos:</h2>

        {todoData.map((todo) => {
          return (
            <div key={todo.id}>
              <Todo {...todo} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MyTodoList;
