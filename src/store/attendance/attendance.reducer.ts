import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HelperClass } from "../../helpers/helper";
import { request } from "../../api/request";



const date = new Date();
export const attendanceMonthly: any = createAsyncThunk("attendanceMonthly", async ({ Year, Month }: any) => {
  console.log(Year, Month, 'hhh');
  const allDates = HelperClass.getDaysArray(Year, Month);
  const data = await request.create({ url: '/employee/attendance-logs', jsonData: allDates });
  return data;
});


const initialState = {
  data: [],
  isLoading: false,
  loader: false,
  errorMessage: '',
  currentMonth: date.getMonth() + 1,
  currentYear: date.getFullYear()
}

const loadAttendanceMonthlySlice = createSlice({
  name: 'attendanceLogs',
  initialState: initialState,
  extraReducers: {
    [attendanceMonthly.fulfilled]: (_state, { payload }) => {
      _state.isLoading = false;
      _state.loader = true;
      _state.data = payload;
      // state['data'] = state.data.concat(payload);
    },
    [attendanceMonthly.pending]: (_state: any) => {
      _state.isLoading = true;
    },
    [attendanceMonthly.rejected]: (_state: any, { payload }: any) => {
      _state.isLoading = false;
      _state.loader = false;
      _state.errorMessage = payload
    }
  },

  reducers: {
    changeMonth(_state: any, { payload }) {
      _state.currentMonth = payload;
    },
    changeYear(_state: any, { payload }) {
      _state.currentYear = payload;
    }
  }
})
export const { loadAttendanceMonthly, changeMonth, changeYear }: any = loadAttendanceMonthlySlice.actions;
export default loadAttendanceMonthlySlice.reducer;






