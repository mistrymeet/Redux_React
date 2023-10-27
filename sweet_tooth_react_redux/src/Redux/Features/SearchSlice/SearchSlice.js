import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchInput: (state, { payload }) => {
      state.search = payload;
    },
  },
});

export default searchSlice.reducer;
export const { searchInput } = searchSlice.actions;
