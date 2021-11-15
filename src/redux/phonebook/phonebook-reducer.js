// import actionTypes from "./phonebook-types";
import { combineReducers } from "redux";

// ==========================  Redux Toolkit ========================

import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./phonebook-actions";

const itemsReducer = createReducer([], {
  [actions.addingContact]: (state, { payload }) => {
    const check = state.some((item) => item.name === payload.name);
    if (check) {
      alert(`${payload.name} is already in Contacts`);
      return state;
    } else return [...state, payload];
  },
  [actions.deletingContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const itemsFilter = createReducer("", {
  [actions.filterContact]: (_, { payload }) => payload,
});

// ==========================  Redux Toolkit ========================

// ==========================  Redux   ========================

// const itemsReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case actionTypes.ADD_CONTACT:
//       const check = state.some((item) => item.name === payload.name);
//       if (check) {
//         alert(`${payload.name} is already in Contacts`);
//         return state;
//       } else return [...state, payload];

//     case actionTypes.DELETE_CONTACT:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const itemsFilter = (state = "", { type, payload }) => {
//   switch (type) {
//     case actionTypes.FILTER_CONTACT:
//       return payload;
//     default:
//       return state;
//   }
// };

// ==========================  Redux  ========================

export default combineReducers({
  items: itemsReducer,
  filter: itemsFilter,
});
