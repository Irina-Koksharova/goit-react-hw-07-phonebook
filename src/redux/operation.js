import axios from 'axios';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  updateContactRequest,
  updateContactSuccess,
  updateContactError,
} from './actions';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error.message)));
};

const addContact = (
  name,
  number,
  email,
  skype,
  telegram,
  group,
) => dispatch => {
  const contact = {
    name,
    number,
    email,
    skype,
    telegram,
    group,
  };
  dispatch(addContactRequest());
  axios
    .post('/contacts', contact)
    .then(({ data }) => {
      dispatch(addContactSuccess(data));
    })
    .catch(error => dispatch(addContactError(error)));
};

const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));
};

const updateContact = (
  id,
  name,
  number,
  email,
  skype,
  telegram,
  group,
) => dispatch => {
  const updatedContact = { name, number, email, skype, telegram, group };
  dispatch(updateContactRequest());
  axios
    .patch(`/contacts/${id}`, updatedContact)
    .then(({ data }) => dispatch(updateContactSuccess(data)))
    .catch(error => dispatch(updateContactError(error)));
};

export { fetchContacts, addContact, deleteContact, updateContact };
