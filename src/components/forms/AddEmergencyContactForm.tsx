import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { getEmployeeProfile } from "../../store/employee/employee-profile.reducer";
import { getProfile } from "../../store/job-desk/job-desk.reducer";
import { leftDrawer } from "../../store/drawer/left-drawer.reducer";
import { request } from "../../api/request";

const AddEmergencyContactForm = ({ payload }: any) => {
  type Inputs = {
    name: string;
    relationship: string;
    phoneNumber: string;
    email: string;
    fullAddress: string;
    city: string;
    country: string;
  }
  const dispatch = useDispatch();



  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const state = useSelector((state: any) => state.leftDrawer);
  const onSubmit: any = async (jsonData: any, e: any) => {
    e.preventDefault();
    jsonData.employee = payload.userId;
    const res = await request.create({ url: '/employee-emergency', jsonData });
    if (res.success) {
      //refresh data
      payload.side === 'adminSide' ? dispatch(getEmployeeProfile(payload.userId)) : dispatch(getProfile());
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
            }}   {...register("name", {
              required: {
                value: true,
                message: 'Name is required!'
              }
            })}
              size="small" label="Name *" variant="outlined" />
            <p className='text-red-500 text-sm mt-1' >{errors.name?.message}</p>
          </div>


          <div className="flex flex-col mb-3">
            <TextField style={{
              backgroundColor: "white"
            }}   {...register("relationship", {
              required: {
                value: true,
                message: 'Relationship is required!'
              }
            })}
              size="small" label="Relationship *" variant="outlined" />
            <p className='text-red-500 text-sm mt-1' >{errors.relationship?.message}</p>
          </div>

          <div className="flex flex-col mb-3">
            <TextField style={{
              backgroundColor: "white"
            }}   {...register("phoneNumber", {
              required: {
                value: true,
                message: 'Mobile No  is required!'
              }
            })}
              size="small" label="Mobile No *" variant="outlined" />
            <p className='text-red-500 text-sm mt-1' >{errors.phoneNumber?.message}</p>
          </div>

          <div className="flex flex-col mb-3">
            <TextField style={{
              backgroundColor: "white"
            }}   {...register("email")}
              size="small" label="Email" variant="outlined" />
          </div>


          <div className="flex flex-col mb-3">
            <TextField style={{
              backgroundColor: "white"
            }}   {...register("country", {
              required: {
                value: true,
                message: 'Country  is required!'
              }
            })}
              size="small" label="Country *" variant="outlined" />
            <p className='text-red-500 text-sm mt-1' >{errors.country?.message}</p>
          </div>



          <div className="flex flex-col mb-3">
            <TextField style={{
              backgroundColor: "white"
            }}   {...register("city", {
              required: {
                value: true,
                message: 'City  is required!'
              }
            })}
              size="small" label="City *" variant="outlined" />
            <p className='text-red-500 text-sm mt-1' >{errors.city?.message}</p>
          </div>



          <div className="flex flex-col mb-3">
            <TextField style={{
              backgroundColor: "white"
            }}   {...register("fullAddress", {
              required: {
                value: true,
                message: 'fullAddress  is required!'
              }
            })}
              size="small" label="Full Address *" variant="outlined" />
            <p className='text-red-500 text-sm mt-1' >{errors.fullAddress?.message}</p>
          </div>


          <div className="mt-5 pb-2 flex items-center justify-end space-x-4">
            <button type='submit' className="bg-teal-500  rounded  py-2 text-gray-100  uppercase w-full">Submit</button>
          </div>
        </form>


      </div>
    </>
  )
}

export default AddEmergencyContactForm