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

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  ({ id, index }) => {
    return axios.delete(`${BE_URL}product/delete/${id}`).then((resData) => {
      return index;
      // console.log("res", resData);
    });
  }
);

export const addProduct = createAsyncThunk(
  "product/addProduct",
  (productdata) => {
    return axios
      .post(`${BE_URL}product/create`, productdata, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((resData) => {
        return resData?.data;
        // console.log("resData", resData?.data);
      });
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    updateProduct: (state, { payload }) => {
      state.product.splice(payload.index, 1, payload.data);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, { payload }) => {
        state.product = payload?.data;
      })
      .addCase(fetchData.rejected, (state) => {
        state.err = "Data not founds...";
      })
      .addCase(addProduct.fulfilled, (state, { payload }) => {
        state.product.unshift(payload?.data);
      })
      .addCase(deleteProduct.fulfilled, (state, { payload }) => {
        // console.log(payload);
        state.product = state.product.filter((e, i) => i !== payload);
      });
  },
});

export default productSlice.reducer;
export const { top, updateProduct } = productSlice.actions;
