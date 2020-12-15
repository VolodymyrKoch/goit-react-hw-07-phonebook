import { createReducer } from '@reduxjs/toolkit';

// import {
//   addContact,
//   removeContact,
// changeFilter,
// erroMasage,
// } from '../actions/action.js';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  changeFilter,
  erroMasage,
} from '../contacts/contactsActions.js';

import { combineReducers } from 'redux';

const initialState = {
  items: [],
  filter: '',
  erroMasage: '',
};
// ----with Toolkit----
const CreateAddContact = (state, action) => {
  return [...state, { ...action.payload }];
};
const CreateRemoveContact = (state, action) => {
  return state.filter(item => {
    return item.id !== action.payload;
  });
};

const itemsCreateReducer = createReducer(initialState.items, {
  [getContactsSuccess]: (state, action) => action.payload,
  [addContactSuccess]: CreateAddContact,
  [removeContactSuccess]: CreateRemoveContact,
});
console.log(itemsCreateReducer);

const filterCreateReducer = createReducer(initialState.filter, {
  [changeFilter]: (state, action) => action.payload,
});

// const erroMasageCreateReducer = createReducer(initialState.erroMasage, {
//   [erroMasage]: (state, action) => action.payload,
// });

// const loadingReducer = createReducer(false, {})
// const errorReducer  = createReducer(false, {})

export const contactsReducer = combineReducers({
  items: itemsCreateReducer,
  filter: filterCreateReducer,
  // erroMasage: erroMasageCreateReducer,
});
