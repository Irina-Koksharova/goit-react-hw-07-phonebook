import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, changeFilter } from './actions';
import initialContacts from '../initial/contacts.json';

const itemsReducer = createReducer(initialContacts, {
  [addContact]: (state, { payload }) => [payload, ...state],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [changeFilter]: (state, { payload }) => payload,
});

export { itemsReducer, filterReducer };
