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
  },
});

export const { setUsers, setSchools } = usersSlice.actions;

export const selectUsers = (state) => state.userAccounts.users;
export const selectSchools = (state) => state.userAccounts.schools;

export default usersSlice.reducer;
