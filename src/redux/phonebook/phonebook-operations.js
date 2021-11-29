import axios from "axios";
// import {
//   // addContactRequest,
//   // addContactSuccess,
//   // addContactError,
//   deleteContactRequest,
//   deleteContactSuccess,
//   deleteContactError,
//   // fetchContactsRequest,
//   // fetchContactsSuccess,
//   // fetchContactsError,
// } from "./phonebook-actions";
import * as contactsAPI from "../../services/contacts-api";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://61987e15164fa60017c230b2.mockapi.io/api/v1/";

// export const fetchContacts = () => async (dispatch) => {
//   dispatch(fetchContactsRequest());
//   try {
//     const contacts = await contactsAPI.fetchContacts();
//     dispatch(fetchContactsSuccess(contacts));
//   } catch (error) {
//     dispatch(fetchContactsError(error));
//   }
// };

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsAPI.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addingContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, phone }, { rejectWithValue }) => {
    try {
      const contact = { name, phone };
      const addContact = await contactsAPI.addingContact(contact);
      return addContact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
//   (name, phone) => async (dispatch) => {
//   try {
//     const addContact = await contactsAPI.addingContact(name, phone);
//     // console.log(addContact);
//     dispatch(addContactSuccess(addContact));
//   } catch (error) {
//     dispatch(addContactError(error));
//   }
// };

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      const deletedContact = await contactsAPI.deleteContacts(id);
      return deletedContact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
// => async (dispatch) => {
//   dispatch(deleteContactRequest());
//   try {
//     const deletedContact = await contactsAPI.deleteContacts(id);
//     // console.log(deletedContact);
//     // console.log(id);

//     dispatch(deleteContactSuccess(deletedContact));
//   } catch (error) {
//     dispatch(deleteContactError(error));
//   }
// };

// export const deleteContact = (id) => async (dispatch) => {
//   dispatch(deleteContactRequest());
//   try {
//     const deletedContact = await contactsAPI.deleteContacts(id);
//     // console.log(deletedContact);
//     // console.log(id);

//     dispatch(deleteContactSuccess(deletedContact));
//   } catch (error) {
//     dispatch(deleteContactError(error));
//   }
// };
