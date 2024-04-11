import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import api from '../../api/api';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { USERROLE } from '../../interfaces/constants';
import { useDispatch, useSelector } from 'react-redux';
import { leftDrawer } from '../../store/drawer/left-drawer.reducer';
import { request } from '../../api/request';

const AddEmployeeComponent = () => {
  const [department, setDepartment] = useState([]);
  const [designation, setDesignation] = useState([]);
  const [shift, setShift] = useState([]);
  const [_dob, setDob]: any = useState('');
  const [_doj, setDoj]: any = useState('');

  ////form submit
  type Inputs = {
    employeeId: string;
    name: string;
    email: string;
    mobile: string;
    password: string;
    dob: string;
    gender: string;
    profileImage: string;
    dateOfJoining: string;
    department: string;
    designation: string;
    reportingManager: string
    resume: string
    shiftId: string;
    employmentType: string;
    bandId: string;
    pfNo: string;
    uanNo: string;
    serviceStatus: string;
    userRole: string;
  }
  ///////////////////////////////////


  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    const promise1 = api.get('/department/lists');
    const promise2 = api.get('/designation/lists');
    const shift = api.get('/shift/lists');
    Promise.all([promise1, promise2, shift]).then(function (values) {
      setDepartment(values[0].data.data);
      setDesignation(values[1].data.data);
      setShift(values[2].data.data);
    });
  }

  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const state = useSelector((state: any) => state.leftDrawer);
  const onSubmit: any = async (jsonData: any, e: any) => {
    e.preventDefault();
    const res = await request.create({ url: '/employee', jsonData });
    if (res.success) {
      //refresh data
      // payload.side === 'adminSide' ? dispatch(getEmployeeProfile(payload.userId)) : dispatch(getProfile());
      const ds = { ...state, ['right']: false }
      dispatch(leftDrawer(ds.right))
    }
  };

  return (
    <>
      <div className="  w-full ">

        <form className=" text-sm p-4" onSubmit={handleSubmit(onSubmit)}>

          <div className="flex flex-col mb-3">
            <TextField style={{
              backgroundColor: "white"
            }}   {...register("employeeId", {
              required: {
                value: true,
                message: 'Employee Id is required!'
              }
            })}

              size="small" label="Employee Id *" variant="outlined" />
            <p className='text-red-500 text-sm mt-1' >{errors.employeeId?.message}</p>
          </div>

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
            }}   {...register("mobile", {
              required: {
                value: true,
                message: 'Mobile No is required!'
              }
            })}

              size="small" label="Mobile No *" variant="outlined" />
            <p className='text-red-500 text-sm mt-1' >{errors.mobile?.message}</p>
          </div>

          <div className="flex flex-col mb-3">
            <TextField style={{
              backgroundColor: "white"
            }}
              {...register("email")}
              size="small" label="Email" variant="outlined" />
          </div>

          <div className="flex flex-row justify-between mb-3">
            <div className="w-1/2">
              <TextField fullWidth style={{
                backgroundColor: "white"
              }}   {...register("pfNo")}

                size="small" label="PF No" variant="outlined" />
            </div>
            <div className="w-1/2 pl-2">
              <TextField fullWidth style={{
                backgroundColor: "white"
              }}   {...register("uanNo")}

                size="small" label="UAN No" variant="outlined" />

            </div>
          </div>

          <div className="flex flex-row mb-3">
            <div className="w-1/2">
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
                  {department.map((data: any, index: number) => {
                    return (
                      <MenuItem key={index} value={data.id}>{data.name}</MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
              <p className='text-red-500 text-sm mt-1' >{errors.department?.message}</p>
            </div>
            <div className="w-1/2 pl-2">
              <FormControl size='small' fullWidth>
                <InputLabel >Select Designation *</InputLabel>
                <Select
                  label="Select Designation *"
                  size="small"
                  {...register("designation", {
                    required: {
                      value: true,
                      message: 'Designation is required!'
                    }
                  })}
                >
                  {designation.map((data: any, index: number) => {
                    return (
                      <MenuItem key={index} value={data.id}>{data.title}</MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
              <p className='text-red-500 text-sm mt-1' >{errors.designation?.message}</p>
            </div>

          </div>

          <div className="flex flex-row mb-3">
            <div className="w-1/2">
              <FormControl size='small' fullWidth>
                <InputLabel >Band</InputLabel>
                <Select
                  label="Gender"
                  size="small"
                  {...register("bandId")}
                >
                  <MenuItem value={'0'}>0 (No Band)</MenuItem>
                  <MenuItem value={'1'}>1</MenuItem>
                  <MenuItem value={'2'}>2</MenuItem>
                  <MenuItem value={'3'}>3</MenuItem>
                  <MenuItem value={'4'}>4</MenuItem>
                  <MenuItem value={'5'}>5</MenuItem>
                  <MenuItem value={'6'}>6</MenuItem>
                  <MenuItem value={'7'}>7</MenuItem>
                  <MenuItem value={'8'}>8</MenuItem>
                  <MenuItem value={'9'}>9</MenuItem>
                  <MenuItem value={'10'}>10</MenuItem>
                  <MenuItem value={'11'}>11</MenuItem>
                  <MenuItem value={'12'}>12</MenuItem>
                  <MenuItem value={'13'}>13</MenuItem>
                  <MenuItem value={'14'}>14</MenuItem>
                  <MenuItem value={'15'}>15</MenuItem>
                </Select>
              </FormControl>

            </div>
            <div className="w-1/2 pl-2">

              <FormControl size="small" fullWidth>
                <InputLabel>User Role *</InputLabel>
                <Select
                  label='User Role *'
                  {...register("userRole", {
                    required: {
                      value: true,
                      message: 'User Role is required!'
                    }
                  })}
                >
                  <MenuItem value={USERROLE.EMPLOYEE}>Employee</MenuItem>
                  <MenuItem value={USERROLE.ACCOUNTANT}>Accountant</MenuItem>
                  <MenuItem value={USERROLE.HR}>Hr</MenuItem>
                  <MenuItem value={USERROLE.MANAGER}>Manager</MenuItem>
                  <MenuItem value={USERROLE.COMPANYADMIN}>Company Admin</MenuItem>
                </Select>
              </FormControl>
              <p className='text-red-500 text-sm mt-1' >{errors.userRole?.message}</p>
              {/* <Autocomplete
                    style={{
                      backgroundColor: "white"
                    }}
                    size="small"
                    disablePortal
                    id="combo-box-demo"
                    options={data}
                    getOptionLabel={(option: any) => option.name}
                    onChange={(event, newValue) => {
                      console.log(event);
                      console.log(JSON.stringify(newValue, null, ' '));
                    }}
                    renderInput={(params: any) =>

                      <TextField
                        {...params}

                        label="Reporting Manager" />

                    }
                  /> */}

            </div>

          </div>

          <div className="flex flex-row justify-between mb-3">
            <div className="w-1/2">
              <FormControl size='small' fullWidth>
                <InputLabel >Gender*</InputLabel>
                <Select
                  label="Gender*"
                  size="small"
                  {...register("gender", {
                    required: {
                      value: true,
                      message: 'Gender is required!'
                    }
                  })}
                >
                  <MenuItem value={'male'}>Male</MenuItem>
                  <MenuItem value={'female'}>Female</MenuItem>
                  <MenuItem value={'other'}>Other</MenuItem>
                </Select>
              </FormControl>
              <p className='text-red-500 text-sm mt-1' >{errors.gender?.message}</p>
            </div>
            <div className="w-1/2 pl-2">
              <FormControl size='small' fullWidth>
                <InputLabel >Employment Type *</InputLabel>
                <Select
                  label='Employment Type *'
                  size="small"
                  {...register("employmentType", {
                    required: {
                      value: true,
                      message: 'Employment Type is required!'
                    }
                  })}
                >
                  <MenuItem value={'Full Time Permenant'}>Full Time Permenant</MenuItem>
                  <MenuItem value={'Part Time'}>Part Time</MenuItem>

                </Select>
              </FormControl>
              <p className='text-red-500 text-sm mt-1' >{errors.employmentType?.message}</p>
            </div>

          </div>
          <div className="flex flex-row justify-between mb-3">
            <div className="w-1/2">
              <FormControl size="small" fullWidth>
                <InputLabel >Service Status *</InputLabel>
                <Select
                  label='Service Status*'
                  {...register("serviceStatus", {
                    required: {
                      value: true,
                      message: 'Service Status is required!'
                    }
                  })}
                >
                  <MenuItem value={'Confirmed'}>Confirmed</MenuItem>
                  <MenuItem value={'Probition'}>Probition</MenuItem>
                  <MenuItem value={'other'}>Other</MenuItem>
                </Select>
              </FormControl>
              <p className='text-red-500 text-sm mt-1' >{errors.serviceStatus?.message}</p>
            </div>


            <div className="w-1/2 pl-2">

              <FormControl size='small' fullWidth>
                <InputLabel >Select Shift *</InputLabel>
                <Select
                  label="Select Shift *"
                  size="small"
                  {...register("shiftId", {
                    required: {
                      value: true,
                      message: 'Shift is required!'
                    }
                  })}
                >
                  {shift.map((data: any, index: number) => {
                    return (
                      <MenuItem key={index} value={data.id}>{data.name}</MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
              <p className='text-red-500 text-sm mt-1' >{errors.shiftId?.message}</p>
            </div>

          </div>


          <div className="flex flex-row w-full  mb-3">
            <div className="w-full">
              <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DemoContainer components={['DatePicker']}  >
                  <DatePicker
                    disableFuture
                    slotProps={{ textField: { size: 'small', }, }}
                    label="Date of Birth"
                    format="DD-MM-YYYY"
                    onChange={(e) => {
                      setDob(e);
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
                    label="Date of Joining"
                    onChange={(e) => {
                      setDoj(e);
                    }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>


          </div>



          <div className="flex flex-col mb-3">
            <TextField style={{
              backgroundColor: "white"
            }}   {...register("password", {
              required: {
                value: true,
                message: 'Password is required!'
              }
            })}

              size="small" label="Password*" variant="outlined" />
            <p className='text-red-500 text-sm mt-1' >{errors.password?.message}</p>
          </div>

          <div className="mt-5 pb-2 flex items-center justify-end space-x-4">
            <button type='submit' className="bg-teal-500  rounded   py-2 text-gray-100  uppercase w-full">Submit</button>
          </div>
        </form>


      </div>
    </>
  )
}

export default AddEmployeeComponent