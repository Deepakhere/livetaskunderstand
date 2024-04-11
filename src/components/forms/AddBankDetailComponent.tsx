import { TextField } from '@mui/material'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { request } from '../../api/request';
import { getEmployeeProfile } from '../../store/employee/employee-profile.reducer';
import { getProfile } from '../../store/job-desk/job-desk.reducer';
import { leftDrawer } from '../../store/drawer/left-drawer.reducer';


const AddBankDetailComponent = ({ payload }: any) => {

  type Inputs = {
    accountHolderName: string;
    accountNo: string;
    ifsc: string;
    accountType: string;
    bankName: string;
    branch: string;
  }
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const state = useSelector((state: any) => state.leftDrawer);
  const onSubmit: any = async (jsonData: any, e: any) => {
    e.preventDefault();
    jsonData.employee = payload.userId;
    const res = await request.create({ url: '/employee-bank', jsonData });
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
            }}   {...register("accountHolderName", {
              required: {
                value: true,
                message: 'Account Holder Name is required!'
              }
            })}
              size="small" label="Account Holder Name *" variant="outlined" />
            <p className='text-red-500 text-sm mt-1' >{errors.accountHolderName?.message}</p>
          </div>
          <div className="flex flex-col mb-3">
            <TextField style={{
              backgroundColor: "white"
            }}   {...register("accountNo", {
              required: {
                value: true,
                message: 'Account No is required!'
              }
            })}
              size="small" label="Account No*" variant="outlined" />
            <p className='text-red-500 text-sm mt-1' >{errors.accountNo?.message}</p>
          </div>

          <div className="flex flex-col mb-3">
            <TextField style={{
              backgroundColor: "white"
            }}   {...register("ifsc", {
              required: {
                value: true,
                message: 'IFSC is required!'
              }
            })}
              size="small" label="Mobile No *" variant="outlined" />
            <p className='text-red-500 text-sm mt-1' >{errors.ifsc?.message}</p>
          </div>

          <div className="flex flex-col mb-3">
            <TextField style={{
              backgroundColor: "white"
            }}   {...register("accountType")}
              size="small" label="Account Type *" variant="outlined" />
          </div>


          <div className="flex flex-col mb-3">
            <TextField style={{
              backgroundColor: "white"
            }}   {...register("bankName", {
              required: {
                value: true,
                message: 'Bank Name  is required!'
              }
            })}
              size="small" label="Bank Name *" variant="outlined" />
            <p className='text-red-500 text-sm mt-1' >{errors.bankName?.message}</p>
          </div>

          <div className="flex flex-col mb-3">
            <TextField style={{
              backgroundColor: "white"
            }}   {...register("branch", {
              required: {
                value: true,
                message: 'Branch  is required!'
              }
            })}
              size="small" label="Branch *" variant="outlined" />
            <p className='text-red-500 text-sm mt-1' >{errors.branch?.message}</p>
          </div>

          <div className="mt-5 pb-2 flex items-center justify-end space-x-4">
            <button type='submit' className="bg-teal-500  rounded  py-2 text-gray-100  uppercase w-full">Submit</button>
          </div>
        </form>


      </div>
    </>
  )
}

export default AddBankDetailComponent