import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const Tokken = {
  setTokken(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  removeTokken() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk("auth/userRegister", async (credentials) => {
  try {
    const { data } = await axios.post("/users/signup", credentials);
    Tokken.setTokken(data.token);
    return data;
  } catch (error) {
    return error.message;
  }
});

const login = createAsyncThunk("auth/userLogin", async (credentials) => {
  try {
    const { data } = await axios.post("/users/login", credentials);
    Tokken.setTokken(data.token);
    return data;
  } catch (error) {
    return error.message;
  }
});
const logOut = createAsyncThunk("auth/userLogOut", async () => {
  try {
    await axios.post("/users/logout");
    Tokken.removeTokken();
  } catch (error) {
    return error.message;
  }
});

const refresh = createAsyncThunk("auth/userCurrent", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;
  if (persistedToken === null) {
    return thunkAPI.rejectWithValue();
  }

  Tokken.setTokken(persistedToken);
  try {
    const { data } = await axios.get("/users/current");
    return data;
  } catch (error) {
    return error.message;
  }
});

const AuthOperations = { register, login, logOut, refresh };
export default AuthOperations;
