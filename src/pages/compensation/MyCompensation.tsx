import { useLayoutEffect, useState } from "react"
import { request } from "../../api/request"


const MyCompensation = () => {

  const [data, setData]: any = useState({});
  const [totals, setTotals]: any = useState({});
  useLayoutEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    const res = await request.read({ url: 'employee/salary-load' });
    if (res.success) {
      setData(res.data);
      setTotals(res.totals);
    }
  }
  // 
  return (
    <>


      <div className="bg-[#F4F5FA] h-full w-full  rounded  p-3">
        <div className="w-full  py-2 text-center text-xl">
          <h1 className='text-teal-500'>Monthly compensation details</h1>
        </div>

        {data['salaryTemplate'] ? <>



          <div className="px-6 pt-6 pb-10">
            <div
              className="flex  flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center">

              <div className="bg-[#FFFBEC] rounded-xl w-1/3 ">
                <div className="flex flex-col p-5 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 ">
                  <div className="w-full bg-green-600 text-center p-1 font-semibold text-white rounded-t">
                    Earnings
                  </div>
                  <div className="w-full bg-gray-100 p-2 rounded-b h-60">
                    <div className="flex justify-between mt-1">
                      <span className="text-sm text-gray-600 text-left">Basic</span>
                      <span className=" text-sm text-gray-600 text-right">{data ? <>{data.salaryTemplate.basicSalary}</> : null}</span>
                    </div>


                    {data ? <> {
                      data.salaryTemplate.allowance.map((a: any, i: number) => {
                        return (
                          <div className="flex justify-between mt-1" key={i}>
                            <span className="text-sm text-gray-600 text-left">{a.lable}</span>
                            <span className=" text-sm text-gray-600 text-right">{a.value}</span>
                          </div>
                        )
                      })
                    } </> : null}

                    <hr className='mt-1'></hr>
                    <div className="flex  justify-between mt-1">
                      <span className="text-sm font-bold text-gray-600">Total Earnings</span>
                      <span className=" text-sm font-bold text-gray-600">{totals ? <>{totals.allowance_total}</> : null}</span>
                    </div>
                  </div>
                </div>
              </div>



              <div className="bg-[#F9ECFF] rounded-xl w-1/3 ">
                <div className="flex flex-col p-5 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4">
                  <div className="w-full bg-red-400 text-center p-1 font-semibold text-white rounded-t">
                    Deductions
                  </div>
                  <div className="w-full bg-gray-100 p-2 rounded-b h-60">

                    {data ? <> {
                      data.salaryTemplate.deduction.map((d: any, i: number) => {
                        return (
                          <div className="flex justify-between mt-1" key={i}>
                            <span className="text-sm text-gray-600 text-left">{d.lable}</span>
                            <span className=" text-sm text-gray-600 text-right">{d.value}</span>
                          </div>
                        )
                      })
                    } </> : null}
                    <div className="flex  justify-between mt-1 py-2">
                      <span className="text-sm text-gray-600"> * This may vary depending on bonus, adhoc payments and investments</span>

                    </div>



                    <hr className='mt-1'></hr>
                    <div className="flex  justify-between mt-1">
                      <span className="text-sm font-bold text-gray-600">Total Deductions</span>
                      <span className=" text-sm font-bold text-gray-600">{totals ? <>{totals.deduction_total}</> : null}</span>
                    </div>
                  </div>

                </div>
              </div>



              <div className="bg-[#ECEEFF] rounded-xl w-1/3 ">
                <div className="flex flex-col p-5 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4">
                  <div className="w-full bg-teal-500 text-center p-1 font-semibold text-white rounded-t">
                    Services / Other Cost
                  </div>
                  <div className="w-full bg-gray-100 p-2 rounded-b h-60">


                    {data ? <> {
                      data.salaryTemplate.otherService.map((d: any, i: number) => {
                        return (
                          <div className="flex justify-between mt-1" key={i}>
                            <span className="text-sm text-gray-600 text-left">{d.lable}</span>
                            <span className=" text-sm text-gray-600 text-right">{d.value}</span>
                          </div>
                        )
                      })
                    } </> : null}


                    <div className="flex  justify-between mt-1 py-2">
                      <span className="text-sm text-gray-600"> * This may vary depending on bonus, adhoc payments and investments</span>

                    </div>
                    <hr className='mt-1'></hr>
                    <div className="flex  justify-between mt-1">
                      <span className="text-sm font-bold text-gray-600">Total </span>
                      <span className=" text-sm font-bold text-gray-600">{totals ? <>{totals.other_services_total}</> : null}</span>
                    </div>
                  </div>

                </div>
              </div>



            </div>


          </div>
          <div
            className="flex justify-evenly items-center w-96  p-2  mr-4 border border-gray-300 ms-auto rounded bg-white "
          >

            <div className="text-center">
              <h2 className="text-md font-medium pb-2">INR {totals ? <>{totals.net_salary}</> : null}</h2>
              <h4 className="inline text-gray-500 text-md">NET SALARY</h4>
            </div>
            <div className="text-center">
              <h2 className="text-md font-medium pb-2">INR {totals ? <>{totals.ctc}</> : null}</h2>
              <h4 className="inline text-gray-500 text-md">CTC</h4>
            </div>
          </div>
        </> : <><h1 className="text-center p-4 text-lg font-bold">Waiting for Salary Assign........</h1></>}
        {/* <div className="w-full bg-blue-200 py-2 text-center">
          <p className='text-xl'>Yearly</p>
        </div>

        <div className="px-6 pt-6 pb-10">
          <div
            className="flex  flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center">

            <div className="bg-[#FFFBEC] rounded-xl w-1/3 ">
              <div className="flex flex-col p-5 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 ">
                <div className="w-full bg-green-600 text-center p-1 font-semibold text-white rounded-t">
                  Earnings
                </div>
                <div className="w-full bg-gray-100 p-2 rounded-b h-60">
                  <div className="flex justify-between mt-1">
                    <span className="text-sm text-gray-600 text-left">Basic</span>
                    <span className=" text-sm text-gray-600 text-right">32,000.00</span>
                  </div>
                  <div className="flex  justify-between mt-1">
                    <span className=" text-sm text-gray-600">HRA</span>
                    <span className=" text-sm text-gray-600">12,800.00</span>
                  </div>
                  <div className="flex  justify-between mt-1">
                    <span className="text-sm text-gray-600">Special Allowance</span>
                    <span className=" text-sm text-gray-600">13,417.00</span>
                  </div>
                  <div className="flex  justify-between mt-1">
                    <span className="text-sm text-gray-600"> Mobile Allowance</span>
                    <span className=" text-sm text-gray-600"> 1,000.00</span>
                  </div>

                  <div className="flex  justify-between mt-1">
                    <span className="text-sm text-gray-600">Travel Allowance</span>
                    <span className=" text-sm text-gray-600">13,417.00</span>
                  </div>
                  <div className="flex  justify-between mt-1">
                    <span className="text-sm text-gray-600"> Mobile Allowance</span>
                    <span className=" text-sm text-gray-600"> 1,000.00</span>
                  </div>
                  <div className="flex  justify-between mt-1">
                    <span className="text-sm text-gray-600">Incentive</span>
                    <span className=" text-sm text-gray-600">0.00</span>
                  </div>
                  <div className="flex  justify-between mt-1">
                    <span className="text-sm text-gray-600">Bonus</span>
                    <span className=" text-sm text-gray-600">500.00</span>
                  </div>
                  <hr className='mt-1'></hr>
                  <div className="flex  justify-between mt-1">
                    <span className="text-sm font-bold text-gray-600">Total Earnings</span>
                    <span className=" text-sm font-bold text-gray-600">500.00</span>
                  </div>
                </div>
              </div>
            </div>



            <div className="bg-[#F9ECFF] rounded-xl w-1/3 ">
              <div className="flex flex-col p-5 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4">
                <div className="w-full bg-red-400 text-center p-1 font-semibold text-white rounded-t">
                  Deductions
                </div>
                <div className="w-full bg-gray-100 p-2 rounded-b h-60">
                  <div className="flex justify-between mt-1">
                    <span className="text-sm text-gray-600 text-left">PF</span>
                    <span className=" text-sm text-gray-600 text-right">32,000.00</span>
                  </div>
                  <div className="flex  justify-between mt-1">
                    <span className=" text-sm text-gray-600">Medical Insurance</span>
                    <span className=" text-sm text-gray-600">12,800.00</span>
                  </div>
                  <div className="flex  justify-between mt-1">
                    <span className="text-sm text-gray-600">Miscellaneous Recovery</span>
                    <span className=" text-sm text-gray-600">13,417.00</span>
                  </div>
                  <div className="flex  justify-between mt-1">
                    <span className="text-sm text-gray-600"> Professional Tax</span>
                    <span className=" text-sm text-gray-600"> 1,000.00</span>
                  </div>

                  <div className="flex  justify-between mt-1">
                    <span className="text-sm text-gray-600"> Income Tax</span>
                    <span className=" text-sm text-gray-600">13,417.00</span>
                  </div>
                  <div className="flex  justify-between mt-1 py-2">
                    <span className="text-sm text-gray-600"> * This may vary depending on bonus, adhoc payments and investments</span>

                  </div>



                  <hr className='mt-1'></hr>
                  <div className="flex  justify-between mt-1">
                    <span className="text-sm font-bold text-gray-600">Total Deductions</span>
                    <span className=" text-sm font-bold text-gray-600">500.00</span>
                  </div>
                </div>

              </div>
            </div>



            <div className="bg-[#ECEEFF] rounded-xl w-1/3 ">
              <div className="flex flex-col p-5 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4">
                <div className="w-full bg-teal-500 text-center p-1 font-semibold text-white rounded-t">
                  Services / Other Cost
                </div>
                <div className="w-full bg-gray-100 p-2 rounded-b h-60">
                  <div className="flex justify-between mt-1">
                    <span className="text-sm text-gray-600 text-left">EPF</span>
                    <span className=" text-sm text-gray-600 text-right">32,000.00</span>
                  </div>

                  <div className="flex  justify-between mt-1 py-2">
                    <span className="text-sm text-gray-600"> * This may vary depending on bonus, adhoc payments and investments</span>

                  </div>
                  <hr className='mt-1'></hr>
                  <div className="flex  justify-between mt-1">
                    <span className="text-sm font-bold text-gray-600">Total Deductions</span>
                    <span className=" text-sm font-bold text-gray-600">500.00</span>
                  </div>
                </div>

              </div>
            </div>



          </div>
        </div>

        <div
          className="flex justify-evenly items-center w-96 lg:w-1/3 p-2 mb-6 mr-4 border border-gray-300 ms-auto rounded bg-white"
        >

          <div className="text-center">
            <h2 className="text-md font-medium pb-2">INR 59,871.00</h2>
            <h4 className="inline text-gray-500 text-md">NET SALARY</h4>
          </div>
          <div className="text-center">
            <h2 className="text-md font-medium pb-2">INR 66,667.00</h2>
            <h4 className="inline text-gray-500 text-md">CTC</h4>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default MyCompensation