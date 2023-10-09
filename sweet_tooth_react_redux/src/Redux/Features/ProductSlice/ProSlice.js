import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { MAIN_URL } from "../../../Configue";

const initialState = {
  product: [],
  err: "",
};

export const fetchData = createAsyncThunk("product/fetchData", () => {
  return axios.get(`${MAIN_URL}product/getAll`).then((resData) => {
    console.log("resData", resData);
    return "xxxxxx";
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
        // state.product = payload?.data;
        console.log("payload", payload);
      })
      .addCase(fetchData.rejected, (state, { payload }) => {
        state.err = "Data not founds...";
      });
  },
});

export default productSlice.reducer;
export const { add, update } = productSlice.actions;
