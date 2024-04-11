import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HelperClass } from "../../helpers/helper";
import { request } from "../../api/request";



const date = new Date();
export const employeeAttendanceMonthly: any = createAsyncThunk("employeeAttendanceMonthly", async ({ Year, Month }: any) => {
  const allDates = HelperClass.getDaysArray(Year, Month);
  const data = await request.create({ url: '/attendance/lists', jsonData: { dates: allDates } });
  return data;
});


const initialState = {
  data: [],
  loader: false,
  errorMessage: '',
  currentMonth: date.getMonth() + 1,
  currentYear: date.getFullYear()
}

const employeeAttendanceSlice = createSlice({
  name: 'employeeAttendance',
  initialState: initialState,
  extraReducers: {
    [employeeAttendanceMonthly.fulfilled]: (_state, { payload }) => {
      _state.loader = false;
      _state.data = payload;
    },
    [employeeAttendanceMonthly.pending]: (_state: any) => {
      _state.loader = true;
    },
    [employeeAttendanceMonthly.rejected]: (_state: any, { payload }: any) => {
      _state.loader = false;
      _state.errorMessage = payload
    }
  },

  reducers: {
    employeeAttendanceChangeMonth(_state: any, { payload }) {
      _state.currentMonth = payload;
    },
    employeeAttendanceChangeYear(_state: any, { payload }) {
      _state.currentYear = payload;
    }
  }
})
export const { employeeAttendanceChangeMonth, employeeAttendanceChangeYear }: any = employeeAttendanceSlice.actions;
export default employeeAttendanceSlice.reducer;






