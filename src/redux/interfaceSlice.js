import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";

export const interfaceSlice = createSlice({
  name: "interface",
  initialState,
  reducers: {
    menuToggle: (state, { payload }) => {
      console.log(payload);
      state[payload] = !state[payload];
    },
  },
});

export const { menuToggle } = interfaceSlice.actions;

export const selectHamburger = (state) => state.interface.hamburger;
export const selectSignUp = (state) => state.interface.signUp;

export default interfaceSlice.reducer;
