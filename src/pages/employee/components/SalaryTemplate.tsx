import Select from 'react-select';
import api from '../../../api/api';
import { useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { request } from '../../../api/request';
import { getEmployeeProfile } from '../../../store/employee/employee-profile.reducer';
const SalaryTemplate = () => {
  const [salaryTemplate, setsalaryTemplate] = useState([]);
  const [selectedValue, setSelected] = useState(0);


  useLayoutEffect(() => {
    getData();
  }, [])
  const getData = async () => {
    const promise1 = api.get('/salary-template/for-form');
    Promise.all([promise1]).then(function (values) {
      setsalaryTemplate(values[0].data.data);
    });
  }
  const employeeDetails = useSelector((state: any) => state.employeeData);
  // salaryTemplate
  const dispatch = useDispatch();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = { id: employeeDetails.id, salaryTemplate: selectedValue };
    const res = await request.update({ url: '/employee/update', data });
    if (res.success) {
      //refresh data
      dispatch(getEmployeeProfile(employeeDetails.id));
    }
  };

  const handleChange = (e: any) => {
    setSelected(e.value);
  }

  return (
    <>


      <div className="w-9/12 p-2 bg-gray-300 rounded ">
        <div className="-mx-8 px-4 px-8 ">

          <div className="inline-block min-w-full  bg-white p-4">
            <h1 className='mb-4 text-xl text-center font-bold text-gray-700'>Set Salary Template</h1>
            <div className='p-4'>
              Current Selected :
              {employeeDetails.salaryTemplate ?
                <div className='bg-green-100 px-1 py-1 text-xs  rounded inline-flex items-center ml-2'>
                  {employeeDetails.salaryTemplate.payGradeName}
                </div> :
                <div className='bg-red-300 px-1 py-1 text-xs text-white rounded inline-flex items-center'>
                  Not Assigned Yet</div>
              }
            </div>
            <form className=" text-sm p-4" onSubmit={handleSubmit} >
              <div className="flex flex-col mb-3 w-full">
                <Select

                  className="basic-single"
                  classNamePrefix="select"
                  defaultValue={employeeDetails.salaryTemplate ? { value: employeeDetails.salaryTemplate.id, label: employeeDetails.salaryTemplate.payGradeName } : null}
                  isDisabled={false}
                  isLoading={false}
                  isClearable={false}
                  isRtl={false}
                  isSearchable={true}
                  name="color"
                  options={salaryTemplate}
                  onChange={e => handleChange(e)}
                />
              </div>

              <button className="w-full bg-teal-500 px-2 py-2 rounded text-white">Update </button>
            </form>
          </div>
        </div>

      </div>
    </ >
  )
}

export default SalaryTemplate