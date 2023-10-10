import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Features/AuthSlice/AuthSlice";
import productReducer from "../Features/ProductSlice/ProSlice";

export const authStore = configureStore({
  reducer: {
    authReducer,
    productReducer,
  },
});
