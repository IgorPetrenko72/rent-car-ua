import { createSlice } from '@reduxjs/toolkit';
import { fetchRent } from './api';

const slice = createSlice({
  name: 'adverts',
  initialState: { items: [], isLoading: false, error: null, loadMore: true },
  extraReducers: builder => {
    builder
      .addCase(fetchRent.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchRent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        if (action.payload.length < 8) {
          state.loadMore = false;
        }
        if (action.meta.arg === 1 || action.meta.arg === undefined) {
          state.items = action.payload;
        } else {
          state.items.push(...action.payload);
        }
      })
      .addCase(fetchRent.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const reducer = slice.reducer;
