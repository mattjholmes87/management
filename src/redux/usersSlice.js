import { createSlice, current } from "@reduxjs/toolkit";
import { initialState } from "./usersState";

export const usersSlice = createSlice({
  name: "userAccounts",
  initialState,
  reducers: {
    setUsers: (state) => {
      console.log(current(state));
    },
    setSchools: (state, { payload }) => {
      state.schools = payload;
    },
    setReportees: (state, { payload }) => {
      state.reportees = payload;
    },
  },
});

export const { setUsers, setSchools, setReportees } = usersSlice.actions;

export const selectUsers = (state) => state.userAccounts.users;
export const selectSchools = (state) => state.userAccounts.schools;
export const selectReportees = (state) => state.userAccounts.reportees;

export default usersSlice.reducer;
