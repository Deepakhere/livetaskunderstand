import { createSlice } from "@reduxjs/toolkit";
const initialState: any = 'disabled';

const loaderSlice = createSlice({
  name: 'load',
  initialState,
  reducers: {
    changeLoaderStatus(_state: any, actions: any) {
      return _state = actions.payload;
    }
  }
})
export const { changeLoaderStatus }: any = loaderSlice.actions;
export default loaderSlice.reducer;



