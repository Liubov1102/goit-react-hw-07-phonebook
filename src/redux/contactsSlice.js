import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    changeFilter(state, action) {
      state.filter = action.payload;
    },
    deleteContact(state, action) {
      state.items = state.items.filter(Item => Item.id !== action.payload.id);
    },
  },
});
export const { addContact, changeFilter, deleteContact } = contactsSlice.actions;
export const getItems = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

const persistConfig = {
  key: 'root',
  storage,
};
  
export const persistedAddContactReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);