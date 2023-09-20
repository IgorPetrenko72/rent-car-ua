import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const favorite = createSlice({
  name: 'filter',
  initialState: { favorites: [], filters: null },
  reducers: {
    addFavorites(state, { payload }) {
      state.favorites.push(payload);
    },
    deleteFavorites(state, { payload }) {
      state.favorites = state.favorites.filter(id => id !== payload);
    },
    addFilters(state, { payload }) {
      state.filters = payload;
    },
  },
});

const persistConfig = {
  key: 'filter',
  storage,
};

export const favoritesReducer = persistReducer(
  persistConfig,
  favorite.reducer
);

export const { addFavorites, deleteFavorites, addFilters } =
  favorite.actions;
