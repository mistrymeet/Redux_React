import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Features/AuthSlice/AuthSlice";

export const authStore = configureStore({
  reducer: {
    AUTH: authReducer,
  },
});
