import { createSlice } from '@reduxjs/toolkit';
export const changeProfileNavSlice: any = createSlice({
  name: 'profilenavstate',
  initialState: 'close',
  reducers: {
    changeHamburger(_state: any, { payload }) {
      return _state = payload
    }


  },

});
export const { changeHamburger } = changeProfileNavSlice.actions;
export default changeProfileNavSlice.reducer;