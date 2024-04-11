
import { lazy, useEffect, useState } from 'react';
import { MdWork, MdSettingsApplications, MdDocumentScanner, MdMenuBook, MdPerson2, MdOutlineArrowCircleRight } from "react-icons/md";
import { useLocation } from 'react-router-dom';
import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployeeProfile } from '../../store/employee/employee-profile.reducer';
import { decrypt } from '../../helpers/encryptDecrypt';
import { request } from '../../api/request';
import { useNavigate } from "react-router-dom";
import { AiFillStepBackward } from 'react-icons/ai';
const BankDetailComponent = lazy(() => import('./components/BankDetailComponent'));
const EducationComponent = lazy(() => import('./components/EducationComponent'));
const UserProfileComponent = lazy(() => import('./components/UserProfileComponent'));
const DocumentsComponent = lazy(() => import('./components/DocumentsComponent'));
const JobHistoryComponent = lazy(() => import('./components/JobHistoryComponent'));
const EmergencyContactComponent = lazy(() => import('./components/EmergencyContactComponent'));

import SalaryTemplate from './components/SalaryTemplate';
type Inputs = {
  password: string;
}

const AdminEmployeeProfile = () => {
  const types = [{
    tabIndex: '1',
    title: 'User Profile',
    icon: <MdPerson2 />
  },
  {
    tabIndex: '2',
    title: 'Education',
    icon: <MdMenuBook />
  },
  {
    tabIndex: '3',
    title: 'Job History',
    icon: <MdWork />
  },
  {
    tabIndex: '4',
    title: 'Emergency',
    icon: <MdDocumentScanner />
  },
  {
    tabIndex: '5',
    title: 'Bank Details',
    icon: <MdDocumentScanner />
  },
  // {
  //   tabIndex: '6',
  //   title: 'Documents',
  //   icon: <MdDocumentScanner />
  // },
  // {
  //   tabIndex: '7',
  //   title: 'Settings',
  //   icon: <MdSettingsApplications />
  // },
  {
    tabIndex: '8',
    title: 'Reset Password',
    icon: <MdSettingsApplications />
  },

  {
    tabIndex: '9',
    title: 'Salary template',
    icon: <MdSettingsApplications />
  },
  ];


  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.employeeData);
  const [active, setActive] = useState(types[0].tabIndex);
  const { state } = useLocation();

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    const userId = await decrypt(state);
    dispatch(getEmployeeProfile(userId));
  }

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: any = async (jsonDate: any, e: any) => {
    e.preventDefault();
    await request.update({ url: '/employee/reset-password-by-admin', data: { userId: data.id, password: jsonDate.password } });
  };


  let navigate = useNavigate();


  return (
    <>

      <button onClick={() => navigate(-1)} className="bg-teal-500  text-white  font-bold py-1 px-4 mb-1 rounded inline-flex items-center">
        <AiFillStepBackward />
        <span>Back</span>
      </button>

      <div className="flex  w-full">
        <div className="w-3/12  border-r">
          <ul className="flex flex-col bg-gray-300 p-4 rounded-l-lg " >
            {types.map((type) => (
              <div
                id={type.tabIndex}
                key={type.tabIndex}
                onClick={() => setActive(type.tabIndex)}
              >
                <li className={`${active === type.tabIndex ? "border-gray-400 flex flex-row mb-2 text-teal-500" : "border-gray-400 flex flex-row mb-2 text-gray-600"}`}>
                  <div className="select-none cursor-pointer bg-white rounded-md flex flex-1 items-center p-3">
                    <div className="flex flex-col rounded-md w-8 h-8 bg-gray-300 justify-center items-center mr-3">
                      {type.icon}
                    </div>
                    <div className="flex-1 pl-1 mr-16">
                      <div className={`${active === type.tabIndex ? "text-teal-500  font-medium text-sm" : "text-gray-600 font-medium text-sm"}`}>{type.title}</div>
                    </div>
                    <div className={`${active === type.tabIndex ? "text-white font-medium bg-teal-500 rounded-full " : "text-gray-600 font-medium"}`}><MdOutlineArrowCircleRight /></div>
                  </div>
                </li>

              </div>
            ))}

          </ul>

        </div>



        {/* user profile section start */}
        {active === "1" && <UserProfileComponent />}
        {/* education section start */}
        {active === "2" && <EducationComponent />}
        {/* job history section start */}
        {active === "3" && <JobHistoryComponent />}
        {/* documnet section start */}
        {active === "4" && <EmergencyContactComponent />}
        {/* documnet section start */}
        {active === "5" && <BankDetailComponent />}
        {/* documnet section start */}
        {active === "6" && <DocumentsComponent />}
        {/* seting section start */}
        {active === "7" &&
          <div className="w-9/12 p-2 bg-gray-300 rounded-r-lg">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        User
                      </th>
                      <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Rol
                      </th>
                      <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Created at
                      </th>
                      <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>

                    {data.employeeCompanyHistory.map(() => {
                      return (


                        <tr >
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">

                            <p className="text-gray-900 whitespace-no-wrap">
                              {/* {jobHistory.} */}
                            </p>

                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">Admin</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              Jan 21, 2020
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <span
                              className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                              <span aria-hidden
                                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                              <span className="relative">Activo</span>
                            </span>
                          </td>
                        </tr>

                      );
                    })}


                  </tbody>
                </table>

              </div>
            </div>

          </div>
        }

        {active === "8" &&
          <div className="w-9/12 p-2 bg-gray-300 rounded ">
            <div className="-mx-8 px-4 px-8 ">
              <div className="inline-block min-w-full  bg-white p-4">
                <h1 className='mb-4 text-2xl text-center font-bold text-gray-700'>Reset Password</h1>
                <form className=" text-sm p-4" onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-col mb-3 ">
                    <TextField style={{
                      backgroundColor: "white"
                    }}
                      {...register("password", {
                        required: {
                          value: true,
                          message: 'Password is required!'
                        }
                      })}
                      size="small" label="Change Password" variant="outlined" />
                    <p className='text-red-500 text-sm mt-1' >{errors.password?.message}</p>
                  </div>

                  <button className="w-full bg-teal-500 px-2 py-2 rounded text-white">Update Password</button>
                </form>
              </div>
            </div>

          </div>}

        {active === "9" && <SalaryTemplate />}
        {/* {active === "9" && <DocumentsComponent />} */}

        <div>


        </div>



      </div>

    </>
  )
}

export default AdminEmployeeProfile