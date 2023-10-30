import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Features/AuthSlice/AuthSlice";
import productReducer from "../Features/ProductSlice/ProSlice";
import searchReducer from "../Features/SearchSlice/SearchSlice";
import cartReducer from "../Features/CartSlice/CartSlice";
import wishReducer from "../Features/WishListSlice/WishListSlice";

export const authStore = configureStore({
  reducer: {
    authReducer,
    productReducer,
    searchReducer,
    cartReducer,
    wishReducer,
  },
});
