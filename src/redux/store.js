import { contactsReducer } from './reducers/contacts/contactsReducer.js';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
console.log(store);

export default store;
