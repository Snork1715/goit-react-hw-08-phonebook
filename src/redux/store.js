import { combineReducers } from "redux";
import counterReducer from "./phonebook/phonebook-reducers";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth-slice";
import logger from "redux-logger";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

import AsyncStorage from "@react-native-async-storage/async-storage";

const counterPersistConfig = {
  key: "my_token",
  version: 1,
  storage: AsyncStorage,
  whitelist: ["token"],
};

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: persistReducer(counterPersistConfig, authReducer),
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

export default store;
