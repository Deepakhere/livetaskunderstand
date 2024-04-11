import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from './loader.reducer'
import changeHamburgerReducer from './hamburger-menu.reducer'
import employeeReducer from './employee/employee-profile.reducer';
import jobDeskReducer from './job-desk/job-desk.reducer'
import loadAttendanceMonthlyReducer from './attendance/attendance.reducer'
import leftDrawerReducer from "./drawer/left-drawer.reducer";
import employeeAttendanceReducer from './attendance/employee-attendance.reducer';
const store = configureStore({
  reducer: {
    loader: loaderReducer,
    hamburgerMenu: changeHamburgerReducer,
    employeeData: employeeReducer,
    jobDeskData: jobDeskReducer,
    loadAttendanceMonthlyReport: loadAttendanceMonthlyReducer,
    employeeAttendanceData: employeeAttendanceReducer,
    leftDrawer: leftDrawerReducer,
  }
})

export default store;

