import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter: (state, action) => action.payload.toLowerCase(),
        
  },
});

export default filterSlice.reducer;

// Actions
export const {  changeFilter } = filterSlice.actions;
 
// Selectors
export const getFilter = state => state.filter;

