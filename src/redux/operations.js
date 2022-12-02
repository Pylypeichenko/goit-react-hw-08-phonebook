import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import {
//   fetchingInProgres,
//   fetchingOnError,
//   fetchingOnSuccess,
// } from './contactsSlice';

axios.defaults.baseURL = 'https://638a0f8e4eccb986e8a2adcb.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchContacts = () => async dispatch => {
//   try {
//     dispatch(fetchingInProgres());
//     const response = await axios.get('/contacts');
//     dispatch(fetchingOnSuccess(response.data));
//   } catch (error) {
//     dispatch(fetchingOnError(error.message));
//   }
// };
