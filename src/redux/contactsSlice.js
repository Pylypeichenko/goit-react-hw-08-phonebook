import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';
// import storage from 'redux-persist/lib/storage';
// import { persistReducer } from 'redux-persist';
// import { nanoid } from 'nanoid';

const contactsInitialState = {
  items: [
    // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// export const { fetchingInProgres, fetchingOnSuccess, fetchingOnError } =
//   contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
// export const persistedContactsReducer = persistReducer(
//   persistConfig,
//   contactsReducer
// );
