import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContact = createAction('add', (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));
const deleteContact = createAction('delete');
const changeFilter = createAction('changeFilter');

export { addContact, deleteContact, changeFilter };
