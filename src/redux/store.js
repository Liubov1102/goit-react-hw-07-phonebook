import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import contacts from './contactsSlice';
import { middleware } from './middleware';

export const store = configureStore({
  reducer: {
    contacts,
  },

  middleware,
});

export const persistor = persistStore(store);