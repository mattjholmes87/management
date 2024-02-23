import { configureStore } from "@reduxjs/toolkit";
import interfaceReducer from "./interfaceSlice";
import APIdataReducer from "./APIdataSlice";
import usersReducer from "./usersSlice";

export const store = configureStore({
  reducer: {
    interface: interfaceReducer,
    APIdata: APIdataReducer,
    userAccounts: usersReducer,
  },
});
