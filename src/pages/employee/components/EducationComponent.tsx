import { MdDelete, MdDownloadForOffline } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import AddEducationComponent from '../../../components/forms/AddEducationComponent';
import RightDrawer from '../../../components/common/RightDrawer';
import { IoIosAddCircle } from 'react-icons/io';
import { request } from '../../../api/request';
import { getEmployeeProfile } from '../../../store/employee/employee-profile.reducer';

const EducationComponent = () => {
  const data = useSelector((state: any) => state.employeeData);
  const dispatch = useDispatch();
  //delete data
  const deleteEducation = async (id: number) => {
    await request.delete({ url: '/employee-education/delete/', id });
    dispatch(getEmployeeProfile(data.id))
  }
  return (
    <>
      <div className="tab-2 w-9/12 p-2 bg-gray-300 rounded-r-lg">
        <RightDrawer component={<AddEducationComponent payload={{ side: 'adminSide', action: 'add', userId: data.id }} />} config={{ title: 'Add Educational Details', buttonTitle: 'Add Educational Detail', buttonIcon: <IoIosAddCircle /> }} />
        <div className="flex flex-wrap" >
          {data.employeeEducation ? <>
            {data.employeeEducation.map((education: any, index: number) => {
              return (
                <>
                  <div key={index} className="flex w-[49%] flex-col justify-between p-8 ml-1  bg-white border rounded-lg relative mb-1">
                    <button className='text-white bg-red-400  p-1 absolute top-0 right-0 m-2 rounded-lg' onClick={() => {
                      deleteEducation(education.id)
                    }}>
                      <MdDelete fontSize={20} />
                    </button>
                    <div className="text-lg font-semibold">Course : {education.degree}</div>
                    <div className="mt-2 space-y-1">
                      <div className="text-gray-600">Specialization : {education.specialization}</div>
                      <div className="text-gray-600">College/School : {education.collegeOrSchool}</div>
                      <div className="text-gray-600">University : {education.university}</div>
                      <div className="text-gray-600">Percentage/CGPA : {education.percentageOrGpa}</div>
                      <div className="text-gray-600">Year : {education.passingYear}</div>
                    </div>
                    <div>
                      {education.file ? <button className='inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium  text-white   bg-teal-500 rounded shadow-md '
                      >
                        <MdDownloadForOffline fontSize={18} /> <span className='ml-1'> Download File</span>
                      </button> : null}
                    </div>
                  </div>

                </>
              );
            })}

          </> : null}




        </div>
      </div>

    </>
  )
}

export default EducationComponent