import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./auth-aperations";

const initialState = {
  user: { name: null, email: null, password: null },
  isLoggedIn: false,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null, password: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.refresh.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
});
export default authSlice.reducer;
