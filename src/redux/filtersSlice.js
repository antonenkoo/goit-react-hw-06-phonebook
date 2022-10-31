import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { setStatusFilter } = filtersSlice.actions;
