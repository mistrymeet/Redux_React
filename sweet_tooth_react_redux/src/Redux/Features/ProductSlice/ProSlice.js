import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BE_URL } from "../../../Configue";

const initialState = {
  product: [],
  err: "",
};

export const fetchData = createAsyncThunk("product/fetchData", () => {
  return axios.get(`${BE_URL}product/getAll`).then((resData) => {
    return resData?.data;
    // console.log("resData", resData);
  });
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    add: (state, { payload }) => {},
    update: (state) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, { payload }) => {
        state.product = payload?.data;
      })
      .addCase(fetchData.rejected, (state) => {
        state.err = "Data not founds...";
      });
  },
});

export default productSlice.reducer;
export const { add, update } = productSlice.actions;
