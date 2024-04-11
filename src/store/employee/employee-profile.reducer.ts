import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { request } from "../../api/request";

export const getEmployeeProfile: any = createAsyncThunk("getProfile", async (userId) => {
  const { data } = await request.read({ url: `/employee/user-profile-fetch?userId=${userId}` });
  return data;
});


const loaderSlice = createSlice({
  name: 'employeeProfile',
  initialState: {},
  extraReducers: {
    [getEmployeeProfile.fulfilled]: (_state: any, action: any) => {
      return _state = action.payload;
    },
    [getEmployeeProfile.pending]: (_state: any) => {
      _state.status = "Fetching todos. Please wait a moment...";
    },
    [getEmployeeProfile.rejected]: (_state: any) => {
      _state.status = "Failed to fetch data...";
    }
  },
  reducers: {
    // employeeData(_state, actions) {
    //   return _state = actions.payload
    // }
  }
})
export const { employeeData }: any = loaderSlice.actions;
export default loaderSlice.reducer;




