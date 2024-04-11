import { Route, Routes } from 'react-router-dom'
import Layout from './components/layouts/Layout'

import LoaderComponent from './components/Loader/LoaderComponent'
import { useSelector } from 'react-redux'


import EmployeeRoutes from './routes/EmployeeRoutes'
import RoleCheck from './routes/role-check/RoleCheck'

import { Suspense, lazy } from 'react';
import { USERROLE } from './interfaces/constants'
import PermissionPage from './pages/setting/PermissionPage'
import JobDeskPage from './pages/job-desk/JobDeskPage'
import Payslip from './pages/compensation/payslip-template/Payslip'
import PayslipTemplateOne from './pages/compensation/payslip-template/PayslipTemplateOne'

const SalaryTemplateList = lazy(() => import('./pages/salary/SalaryTemplateList'));
const LoginPage = lazy(() => import('./pages/auth/LoginPage'));
const MonthlyAttendanceReport = lazy(() => import('./pages/attendance/MonthlyAttendanceReport'));
const DashboardPage = lazy(() => import('./pages/Dashboard'));
const AttendancePage = lazy(() => import('./pages/attendance/AttendancePage'));
const RequesteLeave = lazy(() => import('./pages/leave/RequesteLeave'));
const MyLeave = lazy(() => import('./pages/leave/MyLeave'));
const HolidayCalender = lazy(() => import('./pages/calender/HolidayCalender'));
const DigitalBussinessCard = lazy(() => import('./pages/job-desk/components/DigitalBussinessCard'));
const MyPayslip = lazy(() => import('./pages/compensation/MyPayslip'));
const MyCompensation = lazy(() => import('./pages/compensation/MyCompensation'));
const GoogleMapTest = lazy(() => import('./pages/googlemap/GoogleMapTest'));
const ApproveLeave = lazy(() => import('./pages/leave/ApproveLeave'));

const WorkShiftPage = lazy(() => import('./pages/administration/work-shift/WorkShiftPage'));

const SalaryTemplatePage = lazy(() => import('./pages/salary/SalaryTemplatePage'));
const AssignSalaryPage = lazy(() => import('./pages/salary/AssignSalaryPage'));
const DepartmentPage = lazy(() => import('./pages/administration/department/DepartmentPage'));
const DesignationPage = lazy(() => import('./pages/administration/designation/DesignationPage'));
const HolidayPage = lazy(() => import('./pages/administration/holiday/HolidayPage'));
const CompanyLogin = lazy(() => import('./pages/auth/CompanyLogin'));
const UnAuthorized = lazy(() => import('./pages/error/UnAuthorized'));
const NotFound = lazy(() => import('./pages/error/NotFound'));
const SetAttendanceRadius = lazy(() => import('./components/map/leflet/SetAttendanceRadius'));



const App = () => {
  const loading = useSelector((state: any) => state.loader);
  return (
    <>
      {/* <LoaderComponent /> */}
      {loading == 'active' ? <LoaderComponent /> :

        <Routes  >
          <Route path="/" element={
            <Suspense fallback={<LoaderComponent />}>
              <LoginPage />
            </Suspense>
          } />


          <Route path="/admin" element={
            <Suspense fallback={<LoaderComponent />}>
              <CompanyLogin />
            </Suspense>
          } />


          <Route path="/pay" element={
            <Suspense fallback={<LoaderComponent />}>
              <Payslip />
            </Suspense>
          } />

          <Route path="/payslip-template-one" element={
            <Suspense fallback={<LoaderComponent />}>
              <PayslipTemplateOne />
            </Suspense>
          } />



          <Route element={<Layout />}>

            <Route path="/dashboard" element={
              <Suspense fallback={<LoaderComponent />}>
                <DashboardPage />
              </Suspense>
            }
            />

            <Route path="/attendance" element={
              <Suspense fallback={<LoaderComponent />}>
                <AttendancePage />
              </Suspense>
            } />

            <Route path="/request-leave" element={
              <Suspense fallback={<LoaderComponent />}>
                <RequesteLeave />
              </Suspense>
            } />
            <Route path="/job-desk" element={
              <Suspense fallback={<LoaderComponent />}>
                <JobDeskPage />
              </Suspense>
            } />

            <Route path="/my-leave" element={
              <Suspense fallback={<LoaderComponent />}>
                <MyLeave />
              </Suspense>
            } />

            <Route path="/calender" element={
              <Suspense fallback={<LoaderComponent />}>
                <HolidayCalender />
              </Suspense>
            } />

            <Route path="/my-compensation" element={
              <Suspense fallback={<LoaderComponent />}>
                <MyCompensation />
              </Suspense>
            } />


            <Route path="/my-payslip" element={
              <Suspense fallback={<LoaderComponent />}>
                <MyPayslip />
              </Suspense>
            } />

            <Route path="/digital-bussiness-card" element={
              <Suspense fallback={<LoaderComponent />}>
                <DigitalBussinessCard />
              </Suspense>
            } />


            <Route path="/digital-bussiness-card" element={
              <Suspense fallback={<LoaderComponent />}>
                <GoogleMapTest />
              </Suspense>
            } />


            <Route path="/approve-leave" element={
              <Suspense fallback={<LoaderComponent />}>
                <ApproveLeave />
              </Suspense>
            } />







            {/* <Route path="/my-profile" element={<MyProfileComponent />} /> */}
            <Route path="/permission" element={
              <Suspense fallback={<LoaderComponent />}>
                <PermissionPage />
              </Suspense>
            } />


            <Route path="/monthly-attendance-report" element={
              <Suspense fallback={<LoaderComponent />}>
                <MonthlyAttendanceReport />
              </Suspense>
            } />


            <Route path="/work-shift" element={
              <Suspense fallback={<LoaderComponent />}>
                <WorkShiftPage />
              </Suspense>
            } />



            <Route path="/salary-template" element={
              <Suspense fallback={<LoaderComponent />}>
                <SalaryTemplatePage />
              </Suspense>
            } />


            <Route path="/salary-template-list" element={
              <Suspense fallback={<LoaderComponent />}>
                <SalaryTemplateList />
              </Suspense>
            } />

            <Route path="/assign-salary" element={
              <Suspense fallback={<LoaderComponent />}>
                <AssignSalaryPage />
              </Suspense>
            } />


            {/* for employee */}

            {/* {EmployeeRoutes} */}
            <Route path="/*" element={<EmployeeRoutes />} />


            <Route path="/adminstration/holiday" element={
              <Suspense fallback={<LoaderComponent />}>
                <HolidayPage />
              </Suspense>
            } />

            <Route path="/department/lists" element={
              <Suspense fallback={<LoaderComponent />}>
                <DepartmentPage />
              </Suspense>
            } />


            <Route element={<RoleCheck allowedRoles={[USERROLE.HR]} />}>
              <Route path="/designation/lists" element={
                <Suspense fallback={<LoaderComponent />}>
                  <DesignationPage />
                </Suspense>
              } />
            </Route>


            <Route path="/unauthorized" element={
              <Suspense fallback={<LoaderComponent />}>
                <UnAuthorized />
              </Suspense>
            } />
            <Route path="/setting/location" element={
              <Suspense fallback={<LoaderComponent />}>
                <SetAttendanceRadius />
              </Suspense>
            } />


          </Route>

          <Route path="*" element={
            <Suspense fallback={<LoaderComponent />}>
              <NotFound />
            </Suspense>
          } />

        </Routes >
      }

    </>
  )
}

export default App