import { useForm } from 'react-hook-form';
import { TextField } from '@mui/material';
import { request } from '../../api/request';
import { getProfile } from '../../store/job-desk/job-desk.reducer';
import { useDispatch, useSelector } from 'react-redux';
import { leftDrawer } from '../../store/drawer/left-drawer.reducer';
import { getEmployeeProfile } from '../../store/employee/employee-profile.reducer';

const AddEducationComponent = ({ payload }: any) => {
  const dispatch = useDispatch();
  type Inputs = {
    degreeType: string;
    degree: string;
    specialization: string;
    collegeOrSchool: string;
    university?: string;
    passingYear: string;
    percentageOrGpa: string;
    file?: string;
    employee: any;
  }



  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const state = useSelector((state: any) => state.leftDrawer);
  const onSubmit: any = async (jsonData: any, e: any) => {
    e.preventDefault();
    jsonData.employee = payload.userId;
    const res = await request.create({ url: '/employee-education', jsonData });
    if (res.success) {
      //refresh data
      payload.side === 'adminSide' ? dispatch(getEmployeeProfile(res.data.employee)) : dispatch(getProfile());
      const ds = { ...state, ['right']: false }
      dispatch(leftDrawer(ds.right))
    }
  };



  return (
    <>
      <div className=" w-full ">
        <form className=" text-sm p-4" onSubmit={handleSubmit(onSubmit)}>


          <div className="flex flex-col mb-3">
            <TextField style={{
              backgroundColor: "white"
            }}   {...register("degree", {
              required: {
                value: true,
                message: 'Degree is required!'
              }
            })}
              size="small" label="Degree *" variant="outlined" />
            <p className='text-red-500 text-sm mt-1' >{errors.degree?.message}</p>
          </div>

          <div className="flex flex-col mb-3">
            <TextField style={{
              backgroundColor: "white"
            }}   {...register("specialization", {
              required: {
                value: true,
                message: 'Specialization is required!'
              }
            })}
              size="small" label="Specialization *" variant="outlined" />
            <p className='text-red-500 text-sm mt-1' >{errors.specialization?.message}</p>
          </div>


          <div className="flex flex-col mb-3">
            <TextField style={{
              backgroundColor: "white"
            }}   {...register("collegeOrSchool", {
              required: {
                value: true,
                message: 'College/School Name is required!'
              }
            })}
              size="small" label="College/School *" variant="outlined" />
            <p className='text-red-500 text-sm mt-1' >{errors.collegeOrSchool?.message}</p>
          </div>

          <div className="flex flex-col mb-3">
            <TextField style={{
              backgroundColor: "white"
            }}   {...register("university")}
              size="small" label="University" variant="outlined" />
          </div>

          <div className="flex flex-col mb-3">
            <TextField style={{
              backgroundColor: "white"
            }}   {...register("percentageOrGpa", {
              required: {
                value: true,
                message: 'Percentage/CGPA is required!'
              }
            })}
              size="small" label="Percentage/CGPA  *" variant="outlined" />
            <p className='text-red-500 text-sm mt-1' >{errors.percentageOrGpa?.message}</p>
          </div>


          <div className="flex flex-col mb-3">
            <TextField style={{
              backgroundColor: "white"
            }}   {...register("passingYear", {
              required: {
                value: true,
                message: 'Year of Passing is required!'
              }
            })}
              size="small" label="Year of Passing *" variant="outlined" />
            <p className='text-red-500 text-sm mt-1' >{errors.passingYear?.message}</p>
          </div>



          <div className="mt-5 pb-2 flex items-center justify-end space-x-4">
            <button type='submit' className="bg-teal-500  rounded  py-2 text-gray-100  uppercase w-full">Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddEducationComponent;