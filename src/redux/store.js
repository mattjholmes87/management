import { configureStore } from "@reduxjs/toolkit";
import interfaceReducer from "./interfaceSlice";
import APIdataReducer from "./APIdataSlice";

export const store = configureStore({
  reducer: {
    interface: interfaceReducer,
    APIdata: APIdataReducer,
  },
});
