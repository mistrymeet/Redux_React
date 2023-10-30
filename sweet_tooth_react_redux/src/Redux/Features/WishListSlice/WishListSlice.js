import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};

const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWish: (state, { payload }) => {
      state.wishlist.push(payload);
    },
  },
});

export default wishListSlice.reducer;
export const { addWish } = wishListSlice.actions;
