import { Box, Drawer, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { changeLoaderStatus } from '../../store/loader.reducer';
import { toast } from 'react-toastify';
import api from '../../api/api';
import { useForm } from 'react-hook-form';
import { IoIosAddCircle } from "react-icons/io";
const AddDepartmentComponent = () => {




  ////form submit
  type Inputs = {
    name: string;
  }

  const [state, setState] = useState({ right: false });
  //drawer oprn and close
  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, ['right']: open });
  };

  ///////////////////

  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: any = async (data: any, e: any) => {
    e.preventDefault();
    dispatch(changeLoaderStatus('active'));
    try {
      const res = await api.post("/department", data);
      if (res.data.success) {
        toast.success(res.data.message, {
          position: "top-right", autoClose: 5000,
          hideProgressBar: false,
          progress: undefined,
          theme: "colored",
        });

      }
    } catch (e: any) {

      dispatch(changeLoaderStatus('disabled'));

    }
    finally {
      dispatch(changeLoaderStatus('disabled'));
    }
  };



  return (
    <>
      <Drawer
        anchor={'right'}
        open={state.right}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 550 }}
          role="presentation"
        >
          <div className="w-full  h-12 bg-teal-500 flex">
            <div className="w-5/6 ">
              <h1 className='text-xl pt-3 pb-3 font-bold text-white pl-4'>Add New Department</h1>
            </div>
            <div className="w-1/6">
              <button type='button' className='text-white bg-red-500  py-1 px-3 mt-2 ' onClick={toggleDrawer(false)}>close</button>
            </div>
          </div>

          <div className="  w-full ">

            <form className=" text-sm p-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col mb-3">
                <TextField style={{
                  backgroundColor: "white"
                }}   {...register("name", {
                  required: {
                    value: true,
                    message: 'Department Name is required!'
                  }
                })}

                  size="small" label="Department Name *" variant="outlined" />
                <p className='text-red-500 text-sm mt-1' >{errors.name?.message}</p>
              </div>


              <div className="mt-5 pb-2 flex items-center justify-end space-x-4">
                <button type='submit' className="bg-teal-500 rounded   py-2 text-gray-100  uppercase w-full">Submit</button>
              </div>
            </form>


          </div>
        </Box >
      </Drawer >
      <button onClick={toggleDrawer(true)} className='text-white bg-teal-500 py-1 px-2  mb-1 mt-1 ml-1 rounded inline-flex items-center'> <IoIosAddCircle />Add Department</button>



    </>
  )
}

export default AddDepartmentComponent