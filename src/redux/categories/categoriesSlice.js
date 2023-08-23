import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: '',
};

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setStatus: (state) => {
      state.status = 'Under Consruction';
    },
  },
});

export const { setStatus } = categorySlice.actions;
export default categorySlice.reducer;
