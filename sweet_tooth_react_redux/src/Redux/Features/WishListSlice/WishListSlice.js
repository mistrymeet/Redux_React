import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BE_URL } from "../../../Configue";
import { toast } from "react-toastify";

const initialState = {
  wishlist: [],
};

// export const createWish = createAsyncThunk("wishlist/createWish", () => {
//   return axios({
//     method: "post",
//     url: `${BE_URL}wishlist/create`,
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearar ${JSON.parse(localStorage.getItem("token"))}`,
//     },
//     data,
//   });
// });

export const getAllWish = createAsyncThunk("wishlist/getAllWish", (id) => {
  return axios({
    method: "get",
    url: `${BE_URL}wishlist/getWishListById/${id}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearar ${JSON.parse(localStorage.getItem("token"))}`,
    },
  })
    .then((resData) => console.log("wish", resData))
    .catch((err) => toast.error(err?.message));
});

const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWish: (state, { payload }) => {
      console.log("🚀 ~ file: WishListSlice.js:26 ~ payload:", payload);
    },
  },
});

export default wishListSlice.reducer;
export const { addWish } = wishListSlice.actions;
