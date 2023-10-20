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
      let filterData = payload?.filter?.((e) => {
        return e?.title
          ?.toLowerCase?.()
          ?.includes?.(state.search?.toLowerCase?.());
      });
      state.searchArr = filterData;
    },
  },
});

export default searchSlice.reducer;
export const { searchData, searchbar } = searchSlice.actions;
