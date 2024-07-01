import { configureStore } from "@reduxjs/toolkit";
import interfaceReducer from "./interfaceSlice";
import todosReducer from "./todosSlice";
import usersReducer from "./usersSlice";

export const store = configureStore({
  reducer: {
    interface: interfaceReducer,
    todos: todosReducer,
    userAccounts: usersReducer,
  },
});
