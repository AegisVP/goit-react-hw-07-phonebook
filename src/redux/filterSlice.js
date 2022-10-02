const { createSlice } = require('@reduxjs/toolkit');
const { initialFilter } = require('redux/constants');

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilter,
  reducers: {
    searchFilter(filter, action) {
      filter.search = action.payload;
    },
  },
});

export const { searchFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
