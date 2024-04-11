import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sideNav: {
    backgroundColor: '',
    textColor: ''
  }
}
export const basicSettingsSlice: any = createSlice({
  name: 'basicSettings',
  initialState,
  reducers: {
    changeHamburger(_state: any, { payload }) {
      return _state = payload
    }
  },

});
export const { changeHamburger } = basicSettingsSlice.actions;
export default basicSettingsSlice.reducer;