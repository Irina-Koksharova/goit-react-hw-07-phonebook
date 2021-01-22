import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContact = createAction(
  'add',
  (name, number, email, skype, telegram, group) => ({
    payload: {
      id: shortid.generate(),
      name,
      number,
      email,
      skype,
      telegram,
      group,
    },
  }),
);
const deleteContact = createAction('delete');
const changeFilter = createAction('changeFilter');

export { addContact, deleteContact, changeFilter };
