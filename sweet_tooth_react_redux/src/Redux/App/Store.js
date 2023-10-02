import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Features/Auth/AuthSlice";

export const authStore = configureStore({
  reducer: {
    AUTH: authReducer,
  },
});
