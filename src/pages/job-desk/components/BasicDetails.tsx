import { useSelector } from "react-redux";
const jobDesks = () => {
  const jobDesk = useSelector((state: any) => state.jobDeskData);
  return (
    <>
      <div className=" w-full flex  ">
        <div className=" w-3/12  border-r-2 border-teal-500">
          <div className="bg-white p-2 h-full">
            <div className="text-center my-2">
              {/* <img className="h-20 w-20 rounded-full mx-auto"
                src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                alt="" /> */}

              <img className="h-20 w-20 rounded-full mx-auto"
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="" />

            </div>

            <h1 className="text-gray-900 font-bold text-md text-center leading-8 my-1">{jobDesk.name} ({jobDesk.employeeId})</h1>
            {/* <h3 className="text-gray-600 font-lg text-center text-semibold leading-6">{jobDesk.designation}</h3> */}

            <ul
              className="bg-gray-100 text-gray-600  py-2 px-2 mt-2 divide-y rounded shadow-sm">
              <li className="flex items-center">
                <span>Service Status</span>
                <span className="ml-auto"><span
                  className="bg-teal-500 px-1 rounded py-1 text-white text-sm">{jobDesk.serviceStatus}</span></span>
              </li>
            </ul>
          </div>
        </div>

        <div className=" w-9/12">
          <div className="bg-white p-3 ">
            <div className="flex items-center space-x-2 font-semibold text-teal-500 leading-8">
              <span className="text-teal-500">
                <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              <span className="tracking-wide text-teal-500">Profile</span>
            </div>
            <div className="text-gray-700">
              <div className="grid md:grid-cols-2 text-sm">

                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Name</div>
                  <div className="px-4 py-2">{jobDesk.name}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Code</div>
                  <div className="px-4 py-2">{jobDesk.employeeId}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Email</div>
                  <div className="px-4 py-2">{jobDesk.email}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Contact No</div>
                  <div className="px-4 py-2">{jobDesk.mobile}</div>
                </div>

                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Gender</div>
                  <div className="px-4 py-2">{jobDesk.gender}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Date of Birth</div>
                  <div className="px-4 py-2">{jobDesk.dob}</div>
                </div>

                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold"> Date of Joining</div>
                  <div className="px-4 py-2">
                    {jobDesk.dateOfJoining}
                  </div>
                </div>

                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Band</div>
                  <div className="px-4 py-2"> {jobDesk.bandId}</div>
                </div>



                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">PF No</div>
                  <div className="px-4 py-2">{jobDesk.pfNo}</div>
                </div>

                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">UAN No</div>
                  <div className="px-4 py-2">{jobDesk.uanNo}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Employment Type</div>
                  <div className="px-4 py-2">{jobDesk.employmentType}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Department Name</div>
                  <div className="px-4 py-2">{jobDesk.department ? jobDesk.department.name : 'Not assign Yet'}</div>
                </div>

                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Designation</div>
                  <div className="px-4 py-2">{jobDesk.designation ? jobDesk.designation.title : 'Not assign Yet'}</div>
                </div>

                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Reporting Manager</div>
                  <div className="px-4 py-2">{jobDesk.reportingManager ? jobDesk.reportingManager : 'Not assign Yet'}</div>
                </div>

                {/* <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Designation</div>
                  <div className="px-4 py-2">{jobDesk.designation ? jobDesk.designation.title : 'Not assign Yet'}</div>
                </div> */}

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default jobDesks