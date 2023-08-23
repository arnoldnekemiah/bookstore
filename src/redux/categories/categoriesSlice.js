import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'Under Consruction',
};

export const CheckStatusFunc = (status) => {
  if (status === 'Under construction') {
    return 'Inactive';
  }
  return 'Active';
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    changeStatus: (state, action) => {
      state.status = CheckStatusFunc(action.payload);
    },
  },
});
export const { changeStatus } = categoriesSlice.actions; // Destructure the action creators
export default categoriesSlice.reducer;
