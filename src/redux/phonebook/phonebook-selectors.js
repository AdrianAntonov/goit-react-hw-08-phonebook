import { createSelector } from "@reduxjs/toolkit";

export const items = (state) => state.contacts.items;
export const filter = (state) => state.contacts.filter;

export const contactsState = createSelector(
  [items, filter],
  (items, filter) => {
    const contactList = (items) => {
      const filterToLowerCase = filter.toLowerCase();
      const filteredItems = items.filter(({ name }) =>
        name.toLowerCase().includes(filterToLowerCase)
      );

      return (items = filteredItems);
    };
    return contactList(items);
  }
);
