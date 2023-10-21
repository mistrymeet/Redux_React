import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  searchArr: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchData: (state, { payload }) => {
      // console.log("🚀 ~ file: SearchSlice.js:13 ~ payload:", payload);
      state.search = payload;
    },
    searchbar: (state, { payload }) => {
      state.search = payload?.toLowerCase?.();
      let data = payload?.filter?.((e) => {
        return e?.title?.toLowerCase?.()?.includes?.(state.search);
      });
      state.searchArr = data;
    },
  },
});

export default searchSlice.reducer;
export const { searchData, searchbar } = searchSlice.actions;
