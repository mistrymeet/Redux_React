import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BE_URL } from "../../../Configue";

const initialState = {
  cart: [],
  count: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, { payload }) => {
      state.cart;
    },
    getCart: (state, { payload }) => {
      // console.log("🚀 ~ file: CartSlice.js:19 ~ payload:", payload);
      state.cart.push(payload);
    },
  },
});

export default cartSlice.reducer;
export const { addCart, getCart } = cartSlice.actions;
