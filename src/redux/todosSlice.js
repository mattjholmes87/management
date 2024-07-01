import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./todosState";

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodoData: (state, { payload }) => {
      state.userTodos = payload;
    },
    setLiked: (state, { payload }) => {
      const chosenTodo = state.userTodos.find(
        (todo) => todo.todoId === payload.todoId
      );
      if (!chosenTodo) {
        console.log("Todo cannot be found to like");
      } else {
        chosenTodo.priority = !chosenTodo.priority;
      }
    },
    deleteTodo: (state, { payload }) => {
      const index = state.userTodos.findIndex((todo) => {
        return todo.todoId === payload.modalPayload.todoId;
      });
      if (index === -1) {
        console.log("Todo cannot be found to delete");
      } else {
        state.userTodos.splice(index, 1);
      }
    },
    completeTodo: (state, { payload }) => {
      const chosenTodo = state.userTodos.find(
        (todo) => todo.todoId === payload.todoId
      );
      if (!chosenTodo) {
        console.log("Todo cannot be found to complete");
      } else {
        chosenTodo.completed = !chosenTodo.completed;
      }
    },
    changeTodoCat: (state, { payload }) => {
      console.log(payload);
      const chosenTodo = state.userTodos.find(
        (todo) => todo.todoId === payload.todoId
      );
      if (!chosenTodo) {
        console.log("Todo cannot be found to put in category");
      } else {
        console.log(chosenTodo.category);
        if (chosenTodo.category === 8) {
          chosenTodo.category = 0;
        } else {
          chosenTodo.category = Number(chosenTodo.category || 0) + 1;
        }
      }
    },
  },
});

export const {
  setTodoData,
  setLiked,
  deleteTodo,
  completeTodo,
  changeTodoCat,
} = todosSlice.actions;

export const selectTodoData = (state) => state.todos.userTodos;

export default todosSlice.reducer;
