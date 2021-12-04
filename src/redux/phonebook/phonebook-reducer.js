// import { combineReducers } from "redux";
// import { createReducer } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import {
  fetchContacts,
  addingContact,
  deleteContact,
} from "./phonebook-operations";
import { filterContact } from "./phonebook-actions";

// const itemsReducer = createReducer([], {
//   [fetchContacts.fulfilled]: (_, { payload }) => payload,
//   [addingContact.fulfilled]: (state, { payload }) => {
//     return [...state, payload];
//   },
//   [deleteContact.fulfilled]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload.id),
// });

// const loadingContacts = createReducer(false, {
//   [addingContact.pending]: () => true,
//   [addingContact.fulfilled]: () => false,
//   [addingContact.rejected]: () => false,
//   [deleteContact.pending]: () => true,
//   [deleteContact.fulfilled]: () => false,
//   [deleteContact.rejected]: () => false,
//   [fetchContacts.pending]: () => true,
//   [fetchContacts.fulfilled]: () => false,
//   [fetchContacts.rejected]: () => false,
// });

// const itemsFilter = createReducer("", {
//   [filterContact]: (_, { payload }) => payload,
// });

// export default combineReducers({
//   items: itemsReducer,
//   filter: itemsFilter,
//   loading: loadingContacts,
// });

const contactsSlice = createSlice({
  name: "contacts",
  initialState: { items: [], filter: "" },
  // reducers: {
  // [filterContact]: (_, { payload }) => payload,
  //   [deleteContact.fulfilled]: (state, { payload }) =>
  //     state.filter(({ id }) => id !== payload.id),
  // },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, action) => {
      return {
        ...state,
        items: action.payload,
        // loading: false,
      };
    },
    // [fetchContacts.pending]: (state) => {
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // },
    // [fetchContacts.rejected]: (state) => {
    //   return {
    //     ...state,
    //     loading: false,
    //   };
    // },

    [addingContact.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        items: [...state.items, payload],
        // loading: false,
      };
    },
    // [addingContact.pending]: (state) => {
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // },
    // [addingContact.rejected]: (state) => {
    //   return {
    //     ...state,
    //     loading: false,
    //   };
    // },

    [deleteContact.fulfilled]: (state, { payload }) => {
      console.log(payload);
      return {
        ...state,
        items: state.items.filter(({ id }) => id !== payload.id),
        // loading: false,
      };
    },
    // [deleteContact.pending]: (state) => {
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // },
    // [deleteContact.rejected]: (state) => {
    //   return {
    //     ...state,
    //     loading: false,
    //   };
    // },

    [filterContact]: (state, { payload }) => {
      return {
        ...state,
        filter: payload,
      };
    },
  },
});
// console.log(contactsSlice);

export default contactsSlice.reducer;
