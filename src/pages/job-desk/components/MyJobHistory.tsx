import { useDispatch, useSelector } from 'react-redux';
import RightDrawer from '../../../components/common/RightDrawer';
import { IoIosAddCircle } from 'react-icons/io';
import AddJobHistoryComponent from '../../../components/forms/AddJobHistoryComponent';
import { request } from '../../../api/request';
import { getProfile } from '../../../store/job-desk/job-desk.reducer';

const MyJobHistory = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.jobDeskData);

  const deleteJobHistory = async (id: number) => {
    await request.delete({ url: '/employee-company-history/delete/', id })
    dispatch(getProfile());
  }

  return (
    <>
      <div className="bg-white p-3 shadow-sm rounded-sm">
        <div className="flex items-center space-x-2 font-semibold text-teal-500 leading-8 mb-1">
          <span className="tracking-wide">Experince</span>
        </div>
        <RightDrawer component={<AddJobHistoryComponent payload={{ side: 'userSide', action: 'add', userId: data.id }} />} config={{ title: 'Add Job History', buttonTitle: 'Add Job History', buttonIcon: <IoIosAddCircle /> }} />

        <div className="flex flex-wrap space-x-2  w-full">

          {data.employeeCompanyHistory ? <>
            {data.employeeCompanyHistory.map((data: any, index: number) => {
              return (
                <div className=" border p-3  bg-gray-100 mb-2 w-96" key={index}>
                  <div className="flex items-center border p-2 bg-white">
                    <div>
                      <h3 className="text-md text-teal-500">Comapny Name : {data.companyName}</h3>
                      <p className="text-xs">Address : {data.companyFullAddress}</p>
                      <p className="text-xs">Website : {data.companyWebsite}</p>
                      <p className="text-xs">Email : {data.companyEmail}</p>
                    </div>
                  </div>
                  <div className="my-1 border p-2 bg-white">
                    <p className="text-md ">Job Title : {data.designation}</p>
                    <p className="text-sm mt-1">Emp Code : {data.employeeCode}</p>
                    <p className="text-sm  mt-1">Duration : {data.joiningDate} - {data.relievingDate}</p>
                    <p className="text-sm mt-1">Last CTC : {data.lastCtc} per year</p>
                    <p className="text-sm mt-1">Reason : {data.reason}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    {/* <span className="text-sm font-medium text-blue-500">Edit</span> */}
                    <button className="font-medium text-sm text-red-500" onClick={() => {
                      deleteJobHistory(data.id);
                    }}>Delete</button>
                  </div>
                </div>
              )
            })}
          </> : null}
        </div>
      </div>

    </>
  )
}

export default MyJobHistory