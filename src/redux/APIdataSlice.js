import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";

export const APIdataSlice = createSlice({
  name: "APIdata",
  initialState,
  reducers: {
    setAPIData: (state) => {},
  },
});

export const { setAPIData } = APIdataSlice.actions;

export default APIdataSlice.reducer;
