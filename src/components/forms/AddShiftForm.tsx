import { useForm } from "react-hook-form";
import { changeLoaderStatus } from "../../store/loader.reducer";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import api from "../../api/api";
import { Box, Checkbox, Drawer, TextField } from "@mui/material";
import { useState } from "react";
import { Shift } from "../../interfaces/shift.interface";
import { IoIosAddCircle } from "react-icons/io";


const AddShiftForm = () => {
  const dispatch = useDispatch();


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
  //add new shift
  const { register, handleSubmit, formState: { errors } } = useForm<Shift>();
  const onSubmit: any = async (data: any, e: any) => {
    e.preventDefault();
    dispatch(changeLoaderStatus('active'));
    try {
      const res = await api.post("/shift", data);
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



      {/* add work shift form  drawer start*/}
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
              <h1 className='text-xl pt-3 pb-3 font-bold text-white pl-4'> Add New Work Shift </h1>
            </div>
            <div className="w-1/6">
              <button className='text-white bg-red-500  py-1 px-3 mt-2 ' onClick={toggleDrawer(false)}>close</button>
            </div>
          </div>


          <div className="bg-blue-100   w-full ">

            <form className=" text-sm p-4" onSubmit={handleSubmit(onSubmit)}>



              <div className="flex flex-col mb-3">
                <TextField style={{
                  backgroundColor: "white"
                }}   {...register("name", {
                  required: {
                    value: true,
                    message: 'Name is required!'
                  }
                })} id="outlined-basic" size="small" label="Shift Name *" variant="outlined" className="p-2" />
                <p className='text-red-500 text-sm mt-1' >{errors.name?.message}</p>
              </div>

              <div className="flex flex-col mb-3">
                <TextField
                  style={{
                    backgroundColor: "white"
                  }}
                  size="small"
                  id="standard-textarea"
                  label="Description"
                  placeholder="Description"
                  multiline
                  variant="outlined"
                  {...register("description", {
                    required: {
                      value: true,
                      message: 'Description name is required!'
                    }
                  })}
                />
              </div>

              <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                <thead className="bg-gray-400">
                  <tr className="mb-4">
                    <th scope="col" className="py-4 px-6 font-medium text-gray-900">Day</th>
                    <th scope="col" className="py-4 font-medium text-gray-900">Action</th>
                    <th scope="col" className="py-4 font-medium text-gray-900">Start Time</th>
                    <th scope="col" className="py-4 font-medium text-gray-900">End Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 border-t border-gray-100">

                  {/* day start and time section */}
                  <tr className="hover:bg-gray-100 ">
                    <th className="py-4 px-4">
                      Monday
                    </th>
                    <th className="py-4">
                      <Checkbox   {...register("mon")} />
                    </th>
                    <th className="py-4">
                      <TextField
                        label="Choose Time"
                        defaultValue="00:00"
                        type="time"
                        size="small"
                        {...register("monStartTime")}
                      />
                    </th>

                    <th className="py-4">
                      <TextField
                        label="Choose Time"
                        defaultValue="00:00"
                        type="time"
                        size="small"
                        {...register("monEndTime")}
                      />
                    </th>
                  </tr>
                  {/* day end and time section */}

                  {/* day start and time section */}
                  <tr className="hover:bg-gray-100 ">
                    <th className="py-4 px-4">
                      Tuesday
                    </th>
                    <th className="py-4">
                      <Checkbox      {...register("tue")} />
                    </th>
                    <th className="py-4">
                      <TextField
                        label="Choose Time"
                        defaultValue="00:00"
                        size="small"
                        type="time"
                        {...register("tueStartTime")}

                      />
                    </th>
                    <th className="py-4">
                      <TextField
                        label="Choose Time"
                        defaultValue="00:00"
                        type="time"
                        size="small"
                        {...register("tueEndTime")}
                      />
                    </th>
                  </tr>
                  {/* day end and time section */}

                  {/* day start and time section */}
                  <tr className="hover:bg-gray-100 ">
                    <th className="py-4 px-4">
                      Wednesday
                    </th>
                    <th className="py-4">
                      <Checkbox   {...register("wed")} />
                    </th>
                    <th className="py-4">
                      <TextField
                        label="Choose Time"
                        defaultValue="00:00"
                        type="time"
                        size="small"
                        {...register("wedStartTime")}
                      />
                    </th>
                    <th className="py-4">
                      <TextField
                        label="Choose Time"
                        defaultValue="00:00"
                        type="time"
                        size="small"
                        {...register("wedEndTime")}
                      />
                    </th>
                  </tr>
                  {/* day end and time section */}

                  {/* day start and time section */}
                  <tr className="hover:bg-gray-100 ">
                    <th className="py-4 px-4">
                      Thursday
                    </th>
                    <th className="py-4">
                      <Checkbox  {...register("thu")} />
                    </th>
                    <th className="py-4">
                      <TextField
                        label="Choose Time"
                        defaultValue="00:00"
                        type="time"
                        size="small"
                        {...register("thuStartTime")}
                      />
                    </th>
                    <th className="py-4">
                      <TextField
                        label="Choose Time"
                        defaultValue="00:00"
                        size="small"
                        type="time"
                        {...register("thuEndTime")}
                      />
                    </th>
                  </tr>
                  {/* day end and time section */}

                  {/* day start and time section */}
                  <tr className="hover:bg-gray-100 ">
                    <th className="py-4 px-4">
                      Friday
                    </th>
                    <th className="py-4">
                      <Checkbox {...register("fri")} />
                    </th>
                    <th className="py-4">
                      <TextField
                        label="Choose Time"
                        defaultValue="00:00"
                        size="small"
                        type="time"
                        {...register("friStartTime")}
                      />
                    </th>
                    <th className="py-4">
                      <TextField
                        label="Choose Time"
                        defaultValue="00:00"
                        type="time"
                        size="small"
                        {...register("friEndTime")}
                      />
                    </th>
                  </tr>
                  {/* day end and time section */}

                  {/* day start and time section */}
                  <tr className="hover:bg-gray-100 ">
                    <th className="py-4 px-4">
                      Saturday
                    </th>
                    <th className="py-4">
                      <Checkbox {...register("sat")} />
                    </th>
                    <th className="py-4">
                      <TextField
                        label="Choose Time"
                        defaultValue="00:00"
                        size="small"
                        type="time"
                        {...register("satStartTime")}

                      />
                    </th>
                    <th className="py-4">
                      <TextField
                        label="Choose Time"
                        defaultValue="00:00"
                        size="small"
                        type="time"
                        {...register("satEndTime")}

                      />
                    </th>
                  </tr>
                  {/* day end and time section */}
                  {/* day start and time section */}
                  <tr className="hover:bg-gray-100 ">
                    <th className="py-4 px-4">
                      Sunday
                    </th>
                    <th className="py-4">
                      <Checkbox {...register("sun")} />
                    </th>
                    <th className="py-4">
                      <TextField
                        label="Choose Time"
                        defaultValue="00:00"
                        size="small"
                        type="time"
                        {...register("sunStartTime")}

                      />
                    </th>
                    <th className="py-4">
                      <TextField
                        label="Choose Time"
                        defaultValue="00:00"
                        size="small"
                        type="time"
                        {...register("sunEndTime")}
                      />
                    </th>
                  </tr>
                  {/* day end and time section */}


                </tbody>
              </table>
              <div className="mt-5 pb-2 flex items-center justify-end space-x-4">
                <button type='submit' className="bg-teal-500 rounded  py-2 text-gray-100  uppercase w-full">Submit</button>
              </div>
            </form>


          </div>
        </Box >
      </Drawer >
      {/* add work shift form  drawer end*/}
      <button onClick={toggleDrawer(true)} className='text-white bg-teal-500 py-1 px-2  mb-1 mt-1 ml-1 rounded inline-flex items-center'> <IoIosAddCircle />Add Shift</button>

    </>
  )
}

export default AddShiftForm