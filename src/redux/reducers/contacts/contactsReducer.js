import { createReducer } from '@reduxjs/toolkit';
import {
  addContactSuccess,
  getContactsSuccess,
  removeContactSuccess,
  changeFilter,
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

const filterCreateReducer = createReducer(initialState.filter, {
  [changeFilter]: (state, action) => action.payload,
});

export const contactsReducer = combineReducers({
  items: itemsCreateReducer,
  filter: filterCreateReducer,
});
