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
    modalToggle: (state, { payload }) => {
      state.modal = !state.modal;
      state.modalPayload = payload;
    },
    storeToken: (state, { payload }) => {
      state.token = payload;
    },
    toolbarToggle: (state, { payload }) => {
      state.toolbar = payload;
    },
  },
});

export const {
  menuToggle,
  storeToken,
  setActiveButton,
  modalToggle,
  toolbarToggle,
} = interfaceSlice.actions;

export const selectHamburger = (state) => state.interface.nav.hamburger;
export const selectSignUp = (state) => state.interface.nav.signUp;
export const selectActiveButton = (state) => state.interface.activeButton;
export const selectModalToggle = (state) => state.interface.modal;
export const selectModalPayload = (state) => state.interface.modalPayload;
export const selectToken = (state) => state.interface.token;
export const selectToolbarOptions = (state) => state.interface.toolbarOptions;
export const selectToolbar = (state) => state.interface.toolbar;

export default interfaceSlice.reducer;
