import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./APIdataState";

export const APIdataSlice = createSlice({
  name: "APIdata",
  initialState,
  reducers: {
    setAPIData: (state, { payload }) => {
      state.todoData = payload;
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
  },
});

export const { setAPIData, setLiked, deleteTodo } = APIdataSlice.actions;

export const selectTodoData = (state) => state.APIdata.todoData;

export default APIdataSlice.reducer;
