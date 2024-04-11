import { useDispatch, useSelector } from "react-redux";
import RightDrawer from "../../../components/common/RightDrawer";
import AddBankDetailComponent from "../../../components/forms/AddBankDetailComponent";
import { IoIosAddCircle } from "react-icons/io";
import { request } from "../../../api/request";
import { getEmployeeProfile } from "../../../store/employee/employee-profile.reducer";
import { MdDelete } from "react-icons/md";


const BankDetailComponent = () => {
  const employeeBankData = useSelector((state: any) => state.employeeData);
  const dispatch = useDispatch();
  // employee-bank
  const deleteBank = async (id: number) => {
    await request.delete({ url: '/employee-bank/delete/', id });
    dispatch(getEmployeeProfile(employeeBankData.id))
  }
  return (
    <>

      <div className="w-9/12 bg-gray-300 rounded-r-lg p-4">
        <RightDrawer component={<AddBankDetailComponent payload={{ side: 'adminSide', action: 'add', userId: employeeBankData.id }} />} config={{ title: 'Add Bank Detail', buttonTitle: 'Add Bank Detail', buttonIcon: <IoIosAddCircle /> }} />
        <div className='flex flex-wrap'>
          {employeeBankData.employeeBank.map((data: any, index: number) => {
            return (
              <>
                <div key={index} className="w-[49%] flex relative flex-col bg-white shadow-lg rounded-lg ml-1 mt-1 overflow-hidden">
                  <button className='text-white bg-red-400  p-1 absolute top-0 right-0 m-2 rounded-lg' onClick={() => {
                    deleteBank(data.id)
                  }}>
                    <MdDelete fontSize={20} />
                  </button>
                  <div className="flex justify-between items-center px-6 py-4">
                    <div className="bg-teal-600 text-xs uppercase px-2 py-1 rounded-lg border border-gray-200 text-gray-200 font-bold">Account Type : {data.accountType}</div>
                    {/* <div className="text-sm">May 14, 1988</div> */}
                  </div>
                  <div className="px-6 py-4 border-t border-gray-200">
                    <div className="border rounded-lg p-4 bg-gray-200">
                      Bank Name : {data.bankName}<br></br>
                      Branch : {data.branch}<br></br>
                      Account No : {data.accountNo}<br></br>
                      IFSC Code :{data.ifsc}
                    </div>
                  </div>
                  <div className="bg-gray-200 px-6 py-4">
                    <div className=" text-xs text-gray-600 font-bold">Created At : {data.createdAt}</div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default BankDetailComponent