import { createSlice, current } from "@reduxjs/toolkit";
import { initialState } from "./usersState";

export const usersSlice = createSlice({
  name: "userAccounts",
  initialState,
  reducers: {
    setUsers: (state) => {
      console.log(current(state));
    },
  },
});

export const { setUsers } = usersSlice.actions;

export const selectUsers = (state) => state.userAccounts.users;

export default usersSlice.reducer;
