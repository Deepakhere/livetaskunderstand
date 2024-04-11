import AddEmergencyContactForm from '../../../components/forms/AddEmergencyContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { request } from '../../../api/request';
import { getProfile } from '../../../store/job-desk/job-desk.reducer';
import RightDrawer from '../../../components/common/RightDrawer';
import { IoIosAddCircle } from 'react-icons/io';



const EmergencyContactComponent = () => {
  const data = useSelector((state: any) => state.jobDeskData);
  const dispatch = useDispatch();


  //delete data
  const deleteEmergencyContact = async (id: number) => {
    await request.delete({ url: '/employee-emergency/delete', id })
    dispatch(getProfile());
  }



  return (
    <>
      <div className="bg-white p-3 shadow-sm rounded-sm">
        <div className="flex items-center space-x-2 font-semibold text-teal-500 leading-8 mb-2">
          <span className="tracking-wide text-grey-700 ">Emergency Contacts</span>
        </div>

        <RightDrawer component={<AddEmergencyContactForm payload={{ side: 'userSide', action: 'add', userId: data.id }} />} config={{ title: 'Add Emergency Contacts', buttonTitle: 'Add Emergency Contacts', buttonIcon: <IoIosAddCircle /> }} />

        <div className="text-gray-700">
          <div className="w-full">

            <div className="overflow-auto  border border-gray-200 shadow-md m-1">
              <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                <thead className="bg-gray-300">
                  <tr>
                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">Name</th>
                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">Relationship</th>
                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">Phone Number</th>
                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">Email</th>
                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">City</th>
                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">Country</th>
                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">Full Address</th>
                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                  {data.employeeEmergency ? <>
                    {data.employeeEmergency.map((data: any, index: number) => {
                      return (
                        <tr className="hover:bg-gray-50" key={index}>
                          <td className="px-6 py-4">{data.name}</td>
                          <td className="px-6 py-4">{data.relationship}</td>
                          <td className="px-6 py-4"> {data.phoneNumber}</td>
                          <td className="px-6 py-4"> {data.email}</td>
                          <td className="px-6 py-4"> {data.city}</td>
                          <td className="px-6 py-4"> {data.country}</td>
                          <td className="px-6 py-4"> {data.fullAddress} </td>

                          <td className="px-6 py-4 text-red-500">
                            <button className="font-medium text-sm text-red-500" onClick={() => {
                              deleteEmergencyContact(data.id);
                            }}>Delete</button>

                          </td>
                        </tr>
                      )
                    })}
                  </> : null}


                </tbody>
              </table>
            </div>

          </div>
        </div>

      </div>




    </>
  )
}

export default EmergencyContactComponent