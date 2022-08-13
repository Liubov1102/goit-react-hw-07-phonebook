import { configureStore } from '@reduxjs/toolkit';
import filter from './filterSlicer';
import { contactsApi } from './contactsSlice';
import { middleware } from './middleware';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter,
  },

  middleware,
});

