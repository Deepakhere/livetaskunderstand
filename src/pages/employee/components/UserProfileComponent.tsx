import { useSelector } from "react-redux";


const UserProfileComponent = () => {
  const data = useSelector((state: any) => state.employeeData);
  return (
    <>


      <div className=" tab-1 w-9/12  rounded-r-lg p-1">
        {/* <div className="flex p-4  bg-white border rounded justify-between relative">
          <div className="flex  items-center">
            <div className="w-20 h-20 ">
              <img className="w-full h-full rounded-lg" src="https://static.netshoes.com.br/produtos/tenis-adidas-coreracer-masculino/09/NQQ-4635-309/NQQ-4635-309_zoom1.jpg?ts=1675445414&ims=544x" />
            </div>

          </div>

          <div className="self-center text-center">
            <button className='bg-red-400 px-2 py-1 text-white rounded absolute top-0 right-0 m-2'>Deactive Account</button>
          </div>
        </div> */}
        <div className=" p-6 bg-white rounded relative">
          {/* <button className='bg-teal-500 px-3 py-1 absolute top-0 right-0 rounded m-2 text-white'>Edit</button> */}

          <p className=' absolute top-0 left-0 rounded ml-4 mt-3 text-gray-500 font-medium text-lg '>Personal detail</p>

          <div className="flex flex-row w-full mt-5">
            <div className="w-1/3">
              <p className='text-gray-400 text-sm'>Name</p>
              <p className='text-gray-500'>{data.name}</p>
            </div>
            <div className="w-1/3">
              <p className='text-gray-400 text-sm'>Mobile No</p>
              <p className='text-gray-500'>{data.mobile}</p>
            </div>
            <div className="w-1/3">
              <p className='text-gray-400 text-sm'>Email</p>
              <p className='text-gray-500'>{data.email}</p>
            </div>
          </div>

          <div className="flex flex-row w-full mt-4">
            <div className="w-1/3">
              <p className='text-gray-400 text-sm'>Gender</p>
              <p className='text-gray-500'>{data.gender}</p>
            </div>
            <div className="w-1/3">
              <p className='text-gray-400 text-sm'>Date of Birth</p>
              <p className='text-gray-500'>{data.dob}</p>
            </div>

            <div className="w-1/3">
              <p className='text-gray-400 text-sm'>Date of Joining</p>
              <p className='text-gray-500'>{data.dateOfJoining}</p>
            </div>
          </div>

          <div className="flex flex-row w-full mt-4">
            <div className="w-1/3">
              <p className='text-gray-400 text-sm'>Employment Type</p>
              <p className='text-gray-500'>{data.employmentType}</p>
            </div>
            <div className="w-1/3">
              <p className='text-gray-400 text-sm'>Band Id</p>
              <p className='text-gray-500'>{data.bandId}</p>
            </div>

            <div className="w-1/3">
              <p className='text-gray-400 text-sm'>Service Status</p>
              <p className='text-gray-500'>{data.serviceStatus}</p>
            </div>
          </div>

          <div className="flex flex-row w-full mt-4">
            <div className="w-1/3">
              <p className='text-gray-400 text-sm'>PF No</p>
              <p className='text-gray-500'>{data.pfNo}</p>
            </div>
            <div className="w-1/3">
              <p className='text-gray-400 text-sm'>UAN No</p>
              <p className='text-gray-500'>{data.uanNo}</p>
            </div>


            <div className="w-1/3">
              <p className='text-gray-400 text-sm'>Employee Id</p>
              <p className='text-gray-500'>{data.employeeId}</p>
            </div>

          </div>


          <div className="flex flex-row w-full mt-4">
            <div className="w-1/3">
              <p className='text-gray-400 text-sm'>Department Name</p>
              <p className='text-gray-500'>{data.department ? data.department.name : 'Not assign Yet'}</p>
            </div>
            <div className="w-1/3">
              <p className='text-gray-400 text-sm'>Designation</p>
              <p className='text-gray-500'>{data.designation ? data.designation.title : 'Not assign Yet'} </p>
            </div>

            <div className="w-1/3">
              <p className='text-gray-400 text-sm'>Reporting Manager</p>
              <p className='text-gray-500'>{data.reportingManager ? data.reportingManager : 'Not assign Yet'}</p>
            </div>
          </div>

          <div className="flex flex-row w-full mt-4">
            <div className="w-1/3">
              <p className='text-gray-400 text-sm'>Role</p>
              <p className='text-gray-500'>{data.role}</p>
            </div>



            <div className="w-1/3">
              <p className='text-gray-400 text-sm'>Created At</p>
              <p className='text-gray-500'>{data.createdAt}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserProfileComponent