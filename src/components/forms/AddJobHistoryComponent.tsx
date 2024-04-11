import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { leftDrawer } from '../../store/drawer/left-drawer.reducer';
import { getEmployeeProfile } from '../../store/employee/employee-profile.reducer';
import { getProfile } from '../../store/job-desk/job-desk.reducer';
import { request } from '../../api/request';
import { TextField } from '@mui/material';

const AddJobHistoryComponent = ({ payload }: any) => {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.leftDrawer);
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  type Inputs = {
    companyName: string,
    companyWebsite: string;
    companyEmail: string;
    companyFullAddress: string;
    designation: string;
    joiningDate: string;
    relievingDate: string;
    reason: string;
    employeeCode: string;
    lastCtc: string;
  };

  const onSubmit: any = async (jsonData: any, e: any) => {
    e.preventDefault();
    jsonData.employee = payload.userId;
    const res = await request.create({ url: '/employee-company-history', jsonData });
    if (res.success) {
      //refresh data
      payload.side === 'adminSide' ? dispatch(getEmployeeProfile(payload.userId)) : dispatch(getProfile());
      const ds = { ...state, ['right']: false }
      dispatch(leftDrawer(ds.right))
    }
  };

  return (
    <>
      <div className="w-full">
        <form className=" text-sm p-4" onSubmit={handleSubmit(onSubmit)} >
          <div className="flex flex-col mb-3">
            <TextField style={{
              backgroundColor: "white"
            }}   {...register("companyName", {
              required: {
                value: true,
                message: 'Company name is required!'
              }
            })}
              size="small" label="Company Name *" variant="outlined" />
            <p className='text-red-500 text-sm mt-1' >{errors.companyName?.message}</p>
          </div>


          <div className="flex flex-col mb-3">
            <TextField style={{
              backgroundColor: "white"
            }}   {...register("designation", {
              required: {
                value: true,
                message: 'Job Title is required!'
              }
            })}
              size="small" label="Designation *" variant="outlined" />
            <p className='text-red-500 text-sm mt-1' >{errors.designation?.message}</p>
          </div>

          <div className="flex flex-col mb-3">
            <TextField style={{
              backgroundColor: "white"
            }}  {...register("companyWebsite")} size="small" label="Company Website" variant="outlined" />
          </div>

          <div className="flex flex-col mb-3">
            <TextField style={{
              backgroundColor: "white"
            }}  {...register("companyEmail")} size="small" label="Company Email" variant="outlined" />
          </div>


          <div className="flex flex-col mb-3">
            <TextField style={{
              backgroundColor: "white"
            }}  {...register("companyFullAddress")} size="small" label="Company Full Address" variant="outlined" />
          </div>

          <div className="flex flex-col mb-3">
            <TextField style={{
              backgroundColor: "white"
            }}  {...register("employeeCode")} size="small" label="Employee Code" variant="outlined" />
          </div>

          <div className="flex flex-col mb-3">
            <TextField style={{
              backgroundColor: "white"
            }}  {...register("lastCtc")} size="small" label="Last CTC" variant="outlined" />
          </div>


          <div className="flex flex-col mb-3">
            <TextField style={{
              backgroundColor: "white"
            }}  {...register("joiningDate", {
              required: {
                value: true,
                message: 'Date of Joining is required!'
              }
            })} size="small" label="Date of Joining *" variant="outlined" />
            <p className='text-red-400 mt-1'>{errors.joiningDate?.message}</p>
          </div>

          <div className="flex flex-col mb-3">
            <TextField style={{
              backgroundColor: "white"
            }}   {...register("relievingDate", {
              required: {
                value: true,
                message: 'Date of Joining is required!'
              }
            })} size="small" label="Last CTC" variant="outlined" />
            <p className='text-red-400 mt-1'>{errors.relievingDate?.message}</p>
          </div>


          <div className="flex flex-col mb-3">
            <TextField style={{
              backgroundColor: "white"
            }}  {...register("reason")} size="small" label="Reason" variant="outlined" />
          </div>
          <div className="mt-5 pb-2 flex items-center justify-end space-x-4">
            <button className="bg-teal-500 rounded   py-2 text-gray-100  uppercase w-full">Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddJobHistoryComponent