import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./APIdataState";

export const APIdataSlice = createSlice({
  name: "APIdata",
  initialState,
  reducers: {
    setAPIData: (state, { payload }) => {
      state.todoData = payload;
    },
  },
});

export const { setAPIData } = APIdataSlice.actions;

export const selectTodoData = (state) => state.APIdata.todoData;

export default APIdataSlice.reducer;
