import AddEducationComponent from '../../../components/forms/AddEducationComponent';
import { IoIosAddCircle } from 'react-icons/io';
import RightDrawer from '../../../components/common/RightDrawer';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../../store/job-desk/job-desk.reducer';
import { request } from '../../../api/request';

const MyEducationComponent = () => {
  const data = useSelector((state: any) => state.jobDeskData);
  const dispatch = useDispatch();

  //delete data
  const deleteEducation = async (id: number) => {
    await request.delete({ url: '/employee-education/delete/', id })
    dispatch(getProfile());
  }


  return (
    <>
      <div className="bg-white p-3 shadow-sm rounded-sm">
        <div className="flex items-center space-x-2 font-semibold text-teal-500 leading-8 mb-2">
          <span className="text-teal-500">
            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </span>
          <span className="tracking-wide text-grey-700 ">Educational Details</span>

        </div>
        <RightDrawer component={<AddEducationComponent payload={{ side: 'userSide', action: 'add', userId: data.id }} />} config={{ title: 'Add Educational Details', buttonTitle: 'Add Educational Detail', buttonIcon: <IoIosAddCircle /> }} />

        <div className="text-gray-700">
          <div className="w-full">

            <div className="overflow-auto  border border-gray-200 shadow-md m-1">
              <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                <thead className="bg-gray-300">
                  <tr>
                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">Degree</th>
                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">Specialization</th>
                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">College/School</th>
                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">University</th>
                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">Percentage/CGPA</th>
                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">Passing year</th>
                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">File</th>
                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 border-t border-gray-100">

                  {data.employeeEducation ?
                    <>
                      {data.employeeEducation.map((data: any, index: number) => {
                        return (
                          <tr className="hover:bg-gray-50" key={index}>
                            <td className="px-6 py-4">{data.degree}</td>
                            <td className="px-6 py-4">{data.specialization}</td>
                            <td className="px-6 py-4"> {data.collegeOrSchool}</td>
                            <td className="px-6 py-4"> {data.university}</td>
                            <td className="px-6 py-4"> {data.percentageOrGpa}</td>
                            <td className="px-6 py-4"> {data.passingYear}</td>
                            <td className="px-6 py-4">
                              <span
                                className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
                              >
                                <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                                {data.file}
                              </span>
                            </td>

                            <td className="px-6 py-4 text-red-500">
                              <button className="font-medium text-sm text-red-500" onClick={() => {
                                deleteEducation(data.id);
                              }}>Delete</button>

                            </td>
                          </tr>
                        )
                      })}
                    </>

                    : null}





                </tbody>
              </table>
            </div>

          </div>
        </div>

      </div>
      {/* 
      <div className='flex items-center justify-center mt-4'>
        <div className="rounded-xl border p-5 shadow-md w-5/12 bg-white">
          <div className="flex w-full items-center justify-between border-b pb-3">
            <div className="flex items-center space-x-3">

              <div className="text-lg font-bold text-slate-700">Graduation</div>
            </div>
            <div className="flex items-center space-x-8">
              <button className="rounded-2xl border bg-green-200 px-3 py-1 text-xs font-semibold">2016 - 2020</button>

            </div>
          </div>

          <div className="mt-2 ">
            <div className="mb-2 text-md font-bold text-slate-700">Degree - BE (Computer Science Engineering)</div>
            <div className="text-sm text-neutral-600">
              College :Radharaman Engineering College
            </div>
            <div className="text-sm text-neutral-600">
              University :R.G.P.V Bhopal
            </div>

            <div className="text-sm text-neutral-600">
              Percentage/GPA : 78%
            </div>

          </div>

          <div>

          </div>
        </div>
      </div> */}
    </>
  )
}

export default MyEducationComponent;
