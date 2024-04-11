import { useDispatch, useSelector } from "react-redux";
import RightDrawer from "../../../components/common/RightDrawer"
import AddJobHistoryComponent from "../../../components/forms/AddJobHistoryComponent"
import { IoIosAddCircle } from "react-icons/io";
import { request } from "../../../api/request";
import { getEmployeeProfile } from "../../../store/employee/employee-profile.reducer";

const JobHistoryComponent = () => {
  const jobDetails = useSelector((state: any) => state.employeeData);
  const dispatch = useDispatch();

  const deleteJobHistory = async (id: number) => {
    await request.delete({ url: '/employee-company-history/delete/', id })
    dispatch(getEmployeeProfile(jobDetails.id))
  }

  return (
    <>
      <div className="tab-2 w-9/12 p-2 bg-gray-300 rounded-r-lg">
        <RightDrawer component={<AddJobHistoryComponent payload={{ side: 'adminSide', action: 'add', userId: jobDetails.id }} />} config={{ title: 'Add Job History', buttonTitle: 'Add Job History', buttonIcon: <IoIosAddCircle /> }} />
        <div className="flex flex-wrap w-full">
          {jobDetails.employeeCompanyHistory.map((data: any, index: number) => {
            return (
              <div className=" border p-3  bg-gray-100 mb-2 ml-1 w-[49%] rounded-lg" key={index}>
                <div className="flex items-center border p-2 bg-white">
                  <div>
                    <h3 className="text-lg text-teal-600 font-semibold">Comapny Name : {data.companyName}</h3>
                    <p className="text-md text-gray-600">Address : {data.companyFullAddress}</p>
                    <p className="text-md text-gray-600">Website : {data.companyWebsite}</p>
                    <p className="text-md text-gray-600">Email : {data.companyEmail}</p>
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
          <div>

          </div>
        </div>

      </div>
    </>
  )
}

export default JobHistoryComponent