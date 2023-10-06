import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  err: "",
};

const productSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    add: (state, { payload }) => {},
    update: (state) => {},
  },
});

export default productSlice.reducer;
export const { add, update } = productSlice.actions;
