import { useSelector } from "react-redux";

const MyBankComponent = () => {
  const employeeBankData = useSelector((state: any) => state.jobDeskData);
  return (
    <>
      <div className="w-12/12 bg-gray-300 rounded-r-lg p-4">
        <div className='flex flex-wrap'>
          {employeeBankData.employeeBank.map((data: any, index: number) => {
            return (
              <>
                <div key={index} className="w-[49%] flex flex-col bg-white shadow-lg rounded-lg ml-1 mt-1 overflow-hidden">

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

export default MyBankComponent