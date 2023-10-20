import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BE_URL } from "../../../Configue";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  msg: "Your Cart is Empty",
};

// export const fetchCart = createAsyncThunk('cart/fetchCart', ()=>{
//   return axios({
//     method: 'get',
//     url:`${BE_URL}cart/getAll`,
//     headers:{
//       "Content-Type"
//     }
//   })
// })

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, { payload }) => {
      state.cart.push(payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeCart: (state, { payload }) => {
      state.cart = state.cart.filter((e) => e._id !== payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export default cartSlice.reducer;
export const { addCart, removeCart } = cartSlice.actions;
