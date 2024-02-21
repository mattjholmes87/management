import { createSlice, current } from "@reduxjs/toolkit";
import { initialState } from "./interfaceState";

export const interfaceSlice = createSlice({
  name: "interface",
  initialState,
  reducers: {
    menuToggle: (state, { payload }) => {
      console.log(state.nav[payload]);
      state.nav[payload] = !state.nav[payload];
    },
    buttonToggle: (state, { payload }) => {
      Object.keys(state.button).forEach((item) => {
        state.button[item] = false;
      });
      state.button[payload] = true;
    },
  },
});

export const { menuToggle, buttonToggle } = interfaceSlice.actions;

export const selectHamburger = (state) => state.interface.nav.hamburger;
export const selectSignUp = (state) => state.interface.nav.signUp;

export default interfaceSlice.reducer;
