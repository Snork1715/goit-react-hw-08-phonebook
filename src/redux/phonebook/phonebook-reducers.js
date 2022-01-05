import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
  filterContacts,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from "./phonebook-actions";

const itemsReducer = createReducer([], (builder) => {
  builder
    .addCase(fetchContactsSuccess, (state, { payload }) => {
      return payload;
    })
    .addCase(deleteContactsSuccess, (state, { payload }) => {
      return state.filter((item) => item.id !== payload);
    })
    .addCase(addContactsSuccess, (state, { payload }) => {
      const dublicateContact = state.find((item) => item.name === payload.name);
      if (dublicateContact) {
        alert(`Контакт ${dublicateContact.name} уже существует`);
        return state;
      } else {
        return [payload, ...state];
      }
    });
});

const filterReducer = createReducer("", (builder) => {
  builder.addCase(filterContacts, (_, { payload }) => {
    return payload;
  });
});

const loadingReducer = createReducer(true, (builder) => {
  builder.addCase(addContactsRequest, (state, action) => true);
  builder.addCase(addContactsSuccess, (state, action) => false);
  builder.addCase(addContactsError, (state, action) => false);
  builder.addCase(deleteContactsRequest, (state, action) => true);
  builder.addCase(deleteContactsSuccess, (state, action) => false);
  builder.addCase(deleteContactsError, (state, action) => false);
  builder.addCase(fetchContactsRequest, (state, action) => true);
  builder.addCase(fetchContactsSuccess, (state, action) => false);
  builder.addCase(fetchContactsError, (state, action) => false);
});

const errorReducer = createReducer(null, (builder) => {
  builder.addCase(addContactsSuccess, () => null);
  builder.addCase(addContactsError, (state, { _, payload }) => payload);
  builder.addCase(deleteContactsSuccess, () => null);
  builder.addCase(deleteContactsError, (state, { _, payload }) => payload);
  builder.addCase(fetchContactsSuccess, () => null);
  builder.addCase(fetchContactsError, (state, { _, payload }) => payload);
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loading: loadingReducer,
  error: errorReducer,
});
