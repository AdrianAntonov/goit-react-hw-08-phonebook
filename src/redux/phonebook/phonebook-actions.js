import shortId from "shortid";
// import actionTypes from "./phonebook-types";
// ========================== Redux Toolkit ========================
import { createAction } from "@reduxjs/toolkit";
// ========================== Redux Toolkit ========================

// ==========================   Redux   ========================

// export const addingContact = (name, number) => ({
//   type: actionTypes.ADD_CONTACT,
//   payload: {
//     id: shortId.generate(),
//     name,
//     number,
//   },
// });

// export const deletingingContact = (id) => ({
//   type: actionTypes.DELETE_CONTACT,
//   payload: id,
// });

// export const fiterContact = (value) => ({
//   type: actionTypes.FILTER_CONTACT,
//   payload: value,
// });
// ==========================   Redux   ========================

// ========================== Redux Toolkit ========================

export const addingContact = createAction(
  "phonebook/addingContact",
  (name, number) => ({
    payload: {
      id: shortId.generate(),
      name,
      number,
    },
  })
);

export const deletingContact = createAction("phonebook/deletingContact");

export const filterContact = createAction("phonebook/filterContact");

// ========================== Redux Toolkit ========================
