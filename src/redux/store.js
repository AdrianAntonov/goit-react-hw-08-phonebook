// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { combineReducers, configureStore } from "@reduxjs/toolkit";

// https://61987e15164fa60017c230b2.mockapi.io/api/v1/:endpoint
import { configureStore } from "@reduxjs/toolkit";
import {
  // --persistStore,---//
  //--- persistReducer,---//
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
//---import storage from "redux-persist/lib/storage"; // defaults to localStorage for web ---//
import logger from "redux-logger";
import phonebookReducer from "./phonebook/phonebook-reducer";

// console.log(getDefaultMiddleware);

// const middleware = [...getDefaultMiddleware(), logger];

//--------------------------------------------------//
// const contactsPersistConfig = {
//   key: "contacts",
//   storage,
//   blacklist: ["filter"],
// };
//-------------------------------------------------//

// const rootReducer = combineReducers({
//   contacts: persistReducer(persistConfig, phonebookReducer),
// });

const store = configureStore({
  reducer: {
    // ---contacts: persistReducer(contactsPersistConfig, phonebookReducer),--- //
    contacts: phonebookReducer,
  },

  // reducer: {
  //   contacts: phonebookReducer,
  // },
  // middleware,
  // middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
  devTools: process.env.NODE_ENV === "development",
});

// ---const persistor = persistStore(store); ---//

// const exportStore = {
//   store,
//   // ---persistor,---//
// };

export default store;
// export default { store, persistor };
