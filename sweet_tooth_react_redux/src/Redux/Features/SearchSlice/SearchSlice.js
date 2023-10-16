import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  searchbar: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchData: (state, { payload }) => {
      state.search = payload;
    },
    searchbar: (state, { payload }) => {
      let mainData = state?.search;
      let filterData = payload?.filter?.((e) => {
        return e?.title?.toLowerCase?.()?.includes?.(mainData?.toLowerCase?.());
      });
      state.searchbar = filterData;
    },
  },
});

export default searchSlice.reducer;
export const { searchData, searchbar } = searchSlice.actions;
