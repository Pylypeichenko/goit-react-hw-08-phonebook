import { createSlice } from '@reduxjs/toolkit';
import { addContact, fetchContacts, deleteContact } from './operations';
// import storage from 'redux-persist/lib/storage';
// import { persistReducer } from 'redux-persist';
// import { nanoid } from 'nanoid';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

// const handlePending = state => (state.isLoading = true);
// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    //----- fecthContact
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
    //----- addContact
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    //----- deleteContact
    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected](state, action) {
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
