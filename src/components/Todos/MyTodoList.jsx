import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";
import { selectTodoData } from "../../redux/todosSlice";
import { BsFilterRight } from "react-icons/bs";

const MyTodoList = () => {
  const todoData = useSelector(selectTodoData);
  if (!todoData) {
    return <p>Loading</p>;
  }

  return (
    <>
      <div className="todoList">
        <div className="todoListHeading">
          <h2>My Todos:</h2>

          <BsFilterRight />
        </div>

        {todoData.map((todo) => {
          return <Todo {...todo} key={todo.todoId} />;
        })}
      </div>
    </>
  );
};

export default MyTodoList;
