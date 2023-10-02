import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: {}, token: "" },
  reducers: {
    login: (state, action) => {
      state.user = action?.payload;
      localStorage.setItem("userInfo", JSON.stringify(action?.payload));
    },
    logout: (state) => {
      state.user = {};
      localStorage.clear("userInfo");
    },
  },
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
