import { createSlice } from '@reduxjs/toolkit';

const filterInititalState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'setFilter',
  initialState: filterInititalState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

// export const filterReducer = createReducer(filterInititalState, {
//   [setFilter]: (state, action) => {
//     return {
//       ...state,
//       filter: action.payload,
//     };
//   },
// });
