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
    loginToggle: (state, { payload }) => {
      if (payload === "in") {
        state.loginStatus = true;
      } else {
        state.loginStatus = false;
      }
    },
  },
});

export const { menuToggle, buttonToggle, loginToggle } = interfaceSlice.actions;

export const selectHamburger = (state) => state.interface.nav.hamburger;
export const selectSignUp = (state) => state.interface.nav.signUp;

export default interfaceSlice.reducer;
