import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.items;
const getFilter = state => state.filter;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);

export { getContacts, getFilter, getVisibleContacts };
