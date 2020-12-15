import axios from 'axios';
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
} from './contactsActions.js';

axios.defaults.baseURL = 'http://localhost:2000';

const addContact = (contac) => dispatch => {
  dispatch(addContactRequest());
  axios
    .post('/contacts', { ...contac })
    .then(response => {
      console.log(response);
      dispatch(addContactSuccess(response.data));
    })
    .catch(error => {
      dispatch(addContactError(error.message));
    });
};
console.log(addContact);

const getContacts = () => dispatch => {
  dispatch(getContactsRequest());
  axios
    .get('/contacts')
    .then(response => {
      // console.log(response);
      dispatch(getContactsSuccess(response.data));
    })
    .catch(error => {
      dispatch(getContactsError(error.message));
      setTimeout(() => {
        dispatch(erroMasage());
      }, 1500);
    });
};

const removeContact = id => dispatch => {
  dispatch(removeContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => {
      dispatch(removeContactSuccess(id));
    })
    .catch(error => {
      dispatch(removeContactError(error.message));
      setTimeout(() => {
        dispatch(erroMasage());
      }, 1500);
    });
};

export default { addContact, getContacts, removeContact };
