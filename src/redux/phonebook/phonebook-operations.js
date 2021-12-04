// import axios from "axios";
import * as contactsAPI from "../../services/contacts-api";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = "https://61987e15164fa60017c230b2.mockapi.io/api/v1/";
// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = "";
//   },
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
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const contact = { name, number };
      const addContact = await contactsAPI.addingContact(contact);
      return addContact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// export const deleteContact = createAsyncThunk(
//   "contacts/deleteContacts",
//   async (id) => {
//       const data = await contactsAPI.deleteContactsNew(id)
//       return data
//   }
// )

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      console.log(id);
      const deletedContact = await contactsAPI.deleteContacts(id);
      console.log(deletedContact);
      return deletedContact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
