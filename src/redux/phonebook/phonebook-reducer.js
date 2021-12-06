import { createSlice } from "@reduxjs/toolkit";

import {
  fetchContacts,
  addingContact,
  deleteContact,
} from "./phonebook-operations";
import { filterContact } from "./phonebook-actions";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: { items: [], filter: "" },

  extraReducers: {
    [fetchContacts.fulfilled](state, action) {
      state.items = action.payload;
    },

    [addingContact.fulfilled](state, action) {
      state.items.push(action.payload);
    },

    [deleteContact.fulfilled](state, { payload }) {
      state.items = state.items.filter(({ id }) => id !== payload);
    },

    [filterContact](state, { payload }) {
      state.filter = payload;
    },
  },
});

export default contactsSlice.reducer;
