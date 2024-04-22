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
      const chosenTodo = state.todoData.find((todo) => todo.id === payload.id);
      if (!chosenTodo) {
        console.log("Todo cannot be found to like");
      } else {
        chosenTodo.priority = !chosenTodo.priority;
      }
    },
    deleteTodo: (state, { payload }) => {
      const index = state.todoData.findIndex((todo) => {
        return todo.id === payload.modalPayload.id;
      });
      if (index === -1) {
        console.log("Todo cannot be found to delete");
      } else {
        state.todoData.splice(index, 1);
      }
    },
    completeTodo: (state, { payload }) => {
      const chosenTodo = state.todoData.find((todo) => todo.id === payload.id);
      if (!chosenTodo) {
        console.log("Todo cannot be found to complete");
      } else {
        chosenTodo.completed = !chosenTodo.completed;
      }
    },
    changeTodoCat: (state, { payload }) => {
      const chosenTodo = state.todoData.find((todo) => todo.id === payload.id);
      if (!chosenTodo) {
        console.log("Todo cannot be found to put in category");
      } else {
        if (chosenTodo.cat === 8) {
          chosenTodo.cat = 0;
        } else {
          chosenTodo.cat = (chosenTodo.cat || 0) + 1;
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
