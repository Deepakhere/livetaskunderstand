import { Box, Drawer, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { changeLoaderStatus } from '../../store/loader.reducer';
import { useForm } from 'react-hook-form';
import api from '../../api/api';
import { toast } from 'react-toastify';
import { IoIosAddCircle } from 'react-icons/io';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { HOLIDAYTYPE } from '../../interfaces/constants';

const AddHolidayComponent = () => {
  ////form submit
  type Inputs = {
    title: string;
  }

  const [state, setState] = useState({ right: false });
  const [start, setStartDate] = useState('');
  const [end, setEndDate] = useState('');
  const [color, setColor] = useState('');

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
      data.start = start;
      data.end = end;
      data.color = color;
      const res = await api.post("/holiday", data);
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
  /////////////////////////
  const holidayType = (event: any) => {
    const { target: { value } } = event;
    setColor(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value : value,
    );
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
              <h1 className='text-xl pt-3 pb-3 font-bold text-white pl-4'>Add Holiday</h1>
            </div>
            <div className="w-1/6">
              <button type='button' className='text-white bg-red-500  rounded py-1 px-3 mt-2 ' onClick={toggleDrawer(false)}>close</button>
            </div>
          </div>

          <div className="  w-full ">

            <form className=" text-sm p-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col mb-3">
                <TextField style={{
                  backgroundColor: "white"
                }}
                  {...register("title", {
                    required: {
                      value: true,
                      message: 'Title is required!'
                    }
                  })}

                  size="small" label="Title*" variant="outlined" />
                <p className='text-red-500 text-sm mt-1' >{errors.title?.message}</p>
              </div>

              <div className="flex flex-col  mb-3">

                <FormControl size='small' fullWidth>
                  <InputLabel >Holiday Type</InputLabel>
                  <Select
                    label="Holiday Type"
                    size="small"
                    value={color}
                    onChange={holidayType}
                  >

                    <MenuItem value={HOLIDAYTYPE.EVENTS}>Events</MenuItem>
                    <MenuItem value={HOLIDAYTYPE.HOLIDAY}>Holiday</MenuItem>
                    <MenuItem value={HOLIDAYTYPE.OPTIONAL_HOLIDAY}>Optional Holiday</MenuItem>
                    <MenuItem value={HOLIDAYTYPE.OTHER}>Other</MenuItem>
                  </Select>
                </FormControl>

              </div>
              <div className="flex">


                <div className="w-full">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']} >
                      <DatePicker
                        views={["year", "month", "day"]}
                        format="DD-MM-YYYY"
                        slotProps={{ textField: { size: 'small' } }}
                        label="Select Holiday Start Date"
                        onChange={(e: any) => {
                          setStartDate(e);
                        }}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>

                <div className="w-full">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']} >
                      <DatePicker
                        views={["year", "month", "day"]}
                        format="DD-MM-YYYY"
                        slotProps={{ textField: { size: 'small' } }}
                        label="Select Holiday End Date"
                        onChange={(e: any) => {
                          setEndDate(e);
                        }}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
              </div>
              <div className="mt-5 pb-2 flex items-center justify-end space-x-4">
                <button type='submit' className="bg-teal-500 rounded   py-2 text-gray-100  uppercase w-full">Submit</button>
              </div>
            </form>


          </div>
        </Box >
      </Drawer >
      <button onClick={toggleDrawer(true)} className='text-white  bg-teal-500 py-1 px-2  mb-1 mt-1 ml-1 rounded inline-flex items-center'> <IoIosAddCircle />Add Holiday</button>

    </>
  )
}

export default AddHolidayComponent