import { IoIosAddCircle } from "react-icons/io";
import RightDrawer from "../../../components/common/RightDrawer";
import AddEmergencyContactForm from "../../../components/forms/AddEmergencyContactForm";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { request } from "../../../api/request";
import { getEmployeeProfile } from "../../../store/employee/employee-profile.reducer";


const EmergencyContactComponent = () => {
  const employeeEmergencyData = useSelector((state: any) => state.employeeData);
  const dispatch = useDispatch();

  const deleteEmergencyContact = async (id: number) => {
    await request.delete({ url: '/employee-emergency/delete', id })
    dispatch(getEmployeeProfile(employeeEmergencyData.id))
  }
  return (
    <>
      <div className="tab-2 w-9/12 p-2 bg-gray-300 rounded-r-lg">
        <RightDrawer component={<AddEmergencyContactForm payload={{ side: 'adminSide', action: 'add', userId: employeeEmergencyData.id }} />} config={{ title: 'Add Emergency Contacts', buttonTitle: 'Add Emergency Contacts', buttonIcon: <IoIosAddCircle /> }} />

        <div className='flex flex-wrap'>
          {employeeEmergencyData.employeeEmergency ? <>
            {employeeEmergencyData.employeeEmergency.map((data: any, index: number) => {
              return (
                <>
                  <div key={index} className="justify-between p-8 ml-1  mt-1 w-[49%] bg-white p-6 rounded-lg relative shadow-lg">
                    <button className='text-white bg-red-400  p-1 absolute top-0 right-0 m-2 rounded-lg' onClick={() => {
                      deleteEmergencyContact(data.id)
                    }}>
                      <MdDelete fontSize={20} />
                    </button>
                    <div className="flex items-baseline">
                      <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-lg  font-semibold ">
                        Country - {data.country}
                      </span>
                      <div className="ml-2 bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-lg  font-semibold ">
                        City  : {data.city}
                      </div>
                    </div>
                    <h4 className="mt-1 text-xl  font-semibold ">Name : {data.name}</h4>
                    <div className="mt-1 text-gray-600 text-md">
                      Relationship : {data.relationship}
                    </div>
                    <div className="mt-1 text-gray-600 text-md">
                      Full Address :  {data.fullAddress}
                    </div>
                    <div className="mt-1">
                      <span className="text-teal-600 text-md font-semibold">Mobile No : {data.phoneNumber} </span>
                    </div>
                    <div className="mt-1">
                      <span className="text-teal-600 text-md font-semibold">Email : {data.email} </span>
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

export default EmergencyContactComponent