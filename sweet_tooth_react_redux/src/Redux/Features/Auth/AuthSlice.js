import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  user: JSON.parse(localStorage.getItem("userInfo")),
  token: JSON.parse(localStorage.getItem("token")),

  // when we use token then use this method
  // user: JSON.parse(localStorage.getItem("userInfo")) || {},
  // token: JSON.parse(localStorage.getItem("token")) || "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
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
