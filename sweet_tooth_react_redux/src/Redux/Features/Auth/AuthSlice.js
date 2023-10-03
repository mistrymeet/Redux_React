import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: {}, err: "", token: "" },
  reducers: {
    login: (state, { payload }) => {
      console.log("🚀 ~ file: AuthSlice.js:8 ~ action:", payload);
      state.user = payload?.data;
      state.token = payload?.token;
      localStorage.setItem("userInfo", JSON.stringify(payload?.data));
      localStorage.setItem("token", JSON.stringify(payload?.token));
    },
    logout: (state) => {
      state.user = {};
      localStorage.clear();
    },
  },
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
