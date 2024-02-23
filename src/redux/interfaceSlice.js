import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./interfaceState";

export const interfaceSlice = createSlice({
  name: "interface",
  initialState,
  reducers: {
    menuToggle: (state, { payload }) => {
      state.nav[payload] = !state.nav[payload];
    },
    setActiveButton: (state, { payload }) => {
      state.activeButton = payload;
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

export const { menuToggle, loginToggle, setActiveButton } =
  interfaceSlice.actions;

export const selectHamburger = (state) => state.interface.nav.hamburger;
export const selectSignUp = (state) => state.interface.nav.signUp;
export const selectActiveButton = (state) => state.interface.activeButton;
export const selectLoginStatus = (state) => state.interface.loginStatus;

export default interfaceSlice.reducer;
