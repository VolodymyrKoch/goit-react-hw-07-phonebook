import { createSelector } from '@reduxjs/toolkit';

const getContact = state => state.contacts.items;

const getFilter = state => state.contacts.filter;

const getVisibleFilter = state => state.contacts.items.length > 1;

const getFilteredItems = createSelector(
  [getContact, getFilter],
  (contacts, filter) => {
    return contacts.filter(contactItem =>
      contactItem.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

export default {
  getContact,
  getFilteredItems,
  getVisibleFilter,
  getFilter,
};
