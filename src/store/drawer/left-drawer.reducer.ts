import { createSlice } from '@reduxjs/toolkit';
export const leftDrawerSlice: any = createSlice({
  name: 'leftDrawer',
  initialState: { right: false },
  reducers: {
    leftDrawer(state: any, { payload }) {
      state['right'] = payload;
      return state;
    }


  },

});
export const { leftDrawer } = leftDrawerSlice.actions;
export default leftDrawerSlice.reducer;