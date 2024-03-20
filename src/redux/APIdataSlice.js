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
      const chosenTodo = state.todoData.find((todo) => todo.id == payload.id);
      if (!chosenTodo) {
        console.log("Todo cannot be found");
      } else {
        chosenTodo.priority = !chosenTodo.priority;
      }
    },
  },
});

export const { setAPIData, setLiked } = APIdataSlice.actions;

export const selectTodoData = (state) => state.APIdata.todoData;

export default APIdataSlice.reducer;
