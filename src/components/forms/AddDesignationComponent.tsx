import { Box, Drawer, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { changeLoaderStatus } from '../../store/loader.reducer';
import { toast } from 'react-toastify';
import api from '../../api/api';
import { IoIosAddCircle } from 'react-icons/io';

const AddDesignationComponent = () => {
  const [departments, setDepartments]: any = useState([]);


  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    const res = await api.get('/department/lists');
    if (res.data) {
      setDepartments(res.data.data);
    }
  }

  type Inputs = {
    title: string;
    department: string;
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

    // console.log(state)
    setState({ ...state, ['right']: open });
  };

  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: any = async (data: any, e: any) => {
    e.preventDefault();
    dispatch(changeLoaderStatus('active'));
    try {
      const res = await api.post("/designation", data);
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
              <h1 className='text-xl pt-3 pb-3 font-bold text-white pl-4'>Add New Designation</h1>
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
                }}   {...register("title", {
                  required: {
                    value: true,
                    message: 'Designation Name is required!'
                  }
                })}

                  size="small" label="Designation Name *" variant="outlined" />
                <p className='text-red-500 text-sm mt-1' >{errors.title?.message}</p>
              </div>

              <div className="flex flex-col mb-3">
                <FormControl size='small' fullWidth>
                  <InputLabel >Select Department</InputLabel>
                  <Select
                    label="Select Department"
                    size="small"
                    {...register("department", {
                      required: {
                        value: true,
                        message: 'Department is required!'
                      }
                    })}
                  >
                    {departments.map((data: any, index: number) => {
                      return (
                        <MenuItem key={index} value={data.id}>{data.name}</MenuItem>
                      )
                    })}
                  </Select>
                </FormControl>


                <p className='text-red-500 text-sm mt-1' >{errors.department?.message}</p>
              </div>
              <div className="mt-5 pb-2 flex items-center justify-end space-x-4">
                <button type='submit' className="bg-teal-500 rounded   py-2 text-gray-100  uppercase w-full">Submit</button>
              </div>
            </form>


          </div>
        </Box >
      </Drawer >
      <button onClick={toggleDrawer(true)} className='text-white bg-teal-500 py-1 px-2  mb-1 mt-1 ml-1 rounded inline-flex items-center'> <IoIosAddCircle />Add Designation</button>



    </>
  )
}

export default AddDesignationComponent