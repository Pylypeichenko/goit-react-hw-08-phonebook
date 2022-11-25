// import { createReducer, createSlice } from '@reduxjs/toolkit';
// import { addContact, deleteContact, setFilter } from './actions';

// const contactsInitialState = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
// };

// const filterInititalState = {
//   filter: '',
// };

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,
//   reducers: {
//     addContact: {
//       reducer(state, action) {
//         state.push(action.payload);
//       },
//       prepare(contact) {
//         return {
//           payload: {
//             id: contact.id,
//             name: contact.name,
//             number: contact.number,
//           },
//         };
//       },
//       deleteContact(state, action) {
//         const index = state.findIndex(contact => contact.id === action.payload);
//         state.splice(index, 1);
//       },
//     },
//   },
// });

// const { addContact, deleteContact } = contactsSlice.actions;
// const contactsReducer = contactsSlice.reducer;

// export const contactsReducer = createReducer(contactsInitialState, {
//   [addContact]: (state, action) => {
//     return {
//       ...state,
//       contacts: [...state.contacts, action.payload],
//     };
//   },
//   [deleteContact]: (state, action) => {
//     return {
//       ...state,
//       contacts: state.contacts.filter(contact => contact.id !== action.payload),
//     };
//   },
// });

// export const filterReducer = createReducer(filterInititalState, {
//   [setFilter]: (state, action) => {
//     return {
//       ...state,
//       filter: action.payload,
//     };
//   },
// });
