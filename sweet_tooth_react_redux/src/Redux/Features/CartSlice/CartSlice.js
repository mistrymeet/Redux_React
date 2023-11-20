import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BE_URL } from "../../../Configue";

const initialState = {
  cart: [],
};

export const getAllCart = createAsyncThunk("cart/getAllCart", () => {
  return axios({
    method: "get",
    url: `${BE_URL}cart/getAll`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Berar ${JSON.parse(localStorage.getItem("token"))}`,
    },
  }).then((resData) => {
    return resData?.data?.data[0].products;
  });
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    emptyCart: (state) => {
      state.cart = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCart.fulfilled, (state, { payload }) => {
      state.cart = payload;
    });
  },
});

export default cartSlice.reducer;
export const { emptyCart } = cartSlice.actions;
