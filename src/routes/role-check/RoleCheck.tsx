import { Navigate, Outlet } from 'react-router-dom'
import { getDecodedTokenUser } from '../../helpers/auth.helper';
// import { USERROLE } from '../../interfaces/constants';
// import { Fragment } from 'react';

const RoleCheck = ({ allowedRoles }: any) => {
  console.log(allowedRoles)
  const decoded = getDecodedTokenUser();
  // const allowedRoles = [USERROLE.HR, USERROLE.ADMIN, USERROLE.COMPANY];
  // console.log(allowedRoles.includes(decoded.role))
  return allowedRoles.includes(decoded.role) ? (
    <Outlet />
  ) : (
    <Navigate to="/unauthorized" replace />
  );
}

export default RoleCheck