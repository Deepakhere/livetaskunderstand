import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { request } from "../../api/request";
import { getDecodedTokenUser } from "../../helpers/auth.helper";

export const getProfile: any = createAsyncThunk("getProfile", async () => {
  const user = await getDecodedTokenUser();
  const { data } = await request.read({ url: `/employee/user-profile-fetch?userId=${user.id}` });
  return data;
});


const initialState: any = {};

const jobDeskDataSlice = createSlice({
  name: 'jobDeskData',
  initialState,
  extraReducers: {
    [getProfile.fulfilled]: (_state, action) => {
      return _state = action.payload;
    },
    [getProfile.pending]: (_state: any) => {
      _state.status = "Fetching todos. Please wait a moment...";
    },
    [getProfile.rejected]: (_state: any) => {
      _state.status = "Failed to fetch data...";
    }
  },
  reducers: {
    jobDeskData(_state, actions) {
      return _state = actions.payload
    }
  }
})
export const { jobDeskData } = jobDeskDataSlice.actions;
export default jobDeskDataSlice.reducer;