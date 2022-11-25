import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { persistedContactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: { contacts: persistedContactsReducer, filter: filterReducer },
});

export const persistor = persistStore(store);
