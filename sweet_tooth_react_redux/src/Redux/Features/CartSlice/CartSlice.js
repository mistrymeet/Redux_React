import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BE_URL } from "../../../Configue";

const initialState = {
  cart: [],
  pro: [],
};

export const getAllCart = createAsyncThunk("cart/getAllCart", () => {
  return axios({
    method: "get",
    url: `${BE_URL}cart/getAll`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Berar ${JSON.parse(localStorage.getItem("token"))}`,
    },
  }).then((resData) => resData?.data?.data?.[0]?.products?.[0]);
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, { payload }) => {
      state.cart.push(payload);
      // state.cart;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCart.fulfilled, (state, { payload }) => {
      state.pro = payload;
    });
  },
});

export default cartSlice.reducer;
export const { addCart, getCart } = cartSlice.actions;
