import { Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import LoaderComponent from '../components/Loader/LoaderComponent';
// import RoleCheck from './role-check/RoleCheck';
// import { USERROLE } from '../interfaces/constants';

const AdminEmployeeProfile = lazy(() => import('../pages/employee/AdminEmployeeProfile'));
const AddEmployeeComponent = lazy(() => import('../components/forms/AddEmployeeComponent'));
const EmployeePage = lazy(() => import('../pages/employee/EmployeePage'));

const EmployeeRoutes = () => {
  return (<>

    <Routes>
      <Route path="/employee/lists" element={<Suspense fallback={<LoaderComponent />}>

        <EmployeePage />

      </Suspense>} />


      <Route path="/employee/add" element={<Suspense fallback={<LoaderComponent />}>
        <AddEmployeeComponent />
      </Suspense>} />

      <Route path="/admin-side/employee/profile" key={3} element={<Suspense fallback={<LoaderComponent />}>

        <AdminEmployeeProfile />

      </Suspense>} />


    </Routes>
  </>)
}


export default EmployeeRoutes