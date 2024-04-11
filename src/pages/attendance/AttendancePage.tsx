import { useEffect } from "react";

import { DateTime } from "luxon";
import { useDispatch, useSelector } from "react-redux";
import { employeeAttendanceMonthly, employeeAttendanceChangeMonth, employeeAttendanceChangeYear } from "../../store/attendance/employee-attendance.reducer";
import LoaderComponent from "../../components/Loader/LoaderComponent";

const AttendancePage = () => {


  const dispatch = useDispatch();
  const monthlyReport = useSelector((state: any) => state.employeeAttendanceData);
  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    dispatch(employeeAttendanceMonthly({ Year: monthlyReport.currentYear, Month: monthlyReport.currentMonth }));
  }

  const handleClander = async (type: any) => {
    if (type == 'previous') {
      if (monthlyReport.currentMonth > 1) {
        dispatch(employeeAttendanceChangeMonth(monthlyReport.currentMonth - 1));
        //change state and refresh data
        dispatch(employeeAttendanceMonthly({ Year: monthlyReport.currentYear, Month: monthlyReport.currentMonth - 1 }));
      }
      else if (monthlyReport.currentMonth == 1) {
        dispatch(employeeAttendanceChangeYear(monthlyReport.currentYear - 1));
        dispatch(employeeAttendanceChangeMonth(12));
        //change state and refresh data
        dispatch(employeeAttendanceMonthly({ Year: monthlyReport.currentYear - 1, Month: monthlyReport.currentMonth }));
      }
    }
    else if (type == 'next') {
      if (monthlyReport.currentMonth < 12) {
        dispatch(employeeAttendanceChangeMonth(monthlyReport.currentMonth + 1));
        //change state and refresh data
        dispatch(employeeAttendanceMonthly({ Year: monthlyReport.currentYear, Month: monthlyReport.currentMonth + 1 }));
      }
      else if (monthlyReport.currentMonth == 12) {
        dispatch(employeeAttendanceChangeYear(monthlyReport.currentYear + 1));
        dispatch(employeeAttendanceChangeMonth(1));
        //change state and refresh data
        dispatch(employeeAttendanceMonthly({ Year: monthlyReport.currentYear + 1, Month: monthlyReport.currentMonth }));
      }
    }

  }


  // const [data, setData] = useState([]);
  // const allDates = HelperClass.getDaysArray(2023, 9);
  // useEffect(() => {
  //   attendanceLists();
  //   // getDates();
  // }, []);


  // const attendanceLists = async () => {
  //   try {
  //     const res = await api.post('/attendance/lists', { dates: allDates });
  //     //console.log(res)
  //     if (res.data.success) {
  //       setData(res.data.data);
  //     }
  //   } catch (error) {
  //   }
  //   finally {
  //     // setLoader(false);
  //   }

  // }

  // setData(monthlyReport.data.data)
  // console.log(monthlyReport.data.data, 'ty')
  // console.log(data, 'normal')
  return (
    <>

      {monthlyReport.loader ? <LoaderComponent /> : null}
      <p>Month : {monthlyReport.currentMonth} and Year : {monthlyReport.currentYear}</p>

      <div className="flex mb-2 mt-2">
        <button className="bg-teal-500 rounded text-white px-2 py-1 " onClick={() => {
          const type = 'previous';
          handleClander(type);
        }}>Previous Month</button>
        <button className="bg-teal-500 rounded text-white px-2 py-1 ml-2" onClick={() => {
          const type = 'next';
          handleClander(type);
        }}>Next Month</button>
      </div>






      {/* <Logs /> */}
      <div className="w-full py-3 px-3 bg-white rounded-t">
        <p className='text-sm text-gray-500'>Justify the attendance on Late, Early Left and Short Total Time for a day. You can justify your Late by clicking the Justify option under the first punch. You can justify your Early Left by clicking the Justify option under your Last punch. You can justify your Short Total Time by clicking the Justify option under the Total time. You can also request for your missed punch by clicking the Request Punch option.</p>

      </div>
      <hr></hr>
      <div className="w-full p-4 bg-white flex justify-between rounded-b">

        <div className="w-4/6">
          <div className="overflow-hidden">
            <table className="w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-gray-500">
                <tr>
                  <th scope="col" className="px-2 py-4">Date</th>
                  <th scope="col" className="px-2 py-4">Shift</th>
                </tr>
              </thead>
              <tbody>
                {monthlyReport.data.data ? <>
                  {monthlyReport.data.data.map((data: any, index: any) => {
                    return (<>
                      <tr className="border dark:border-gray-500" key={index}>
                        <td className="whitespace-nowrap px-2 py-2 font-medium"> {data.date.day},{DateTime.fromISO(data.date.date).toFormat('MMMM dd, yyyy').toString()}</td>
                        <td className="whitespace-nowrap px-4 py-2">
                          {data.data.length > 0 ? <>
                            {
                              data.data.map((inner: any, index1: number) => {
                                return (
                                  <>
                                    <div className="w-full max-w-full px-3 py-2 mx-auto" key={index1}>
                                      <div className="relative flex flex-col  bg-gray-200 border-0  rounded  ">
                                        <div className="flex items-end flex-auto py-3 pt-0 px-3 ">
                                          <div className="flex flex-col items-center w-full mt-3">
                                            <div className="mx-3 rounded-2xl h-[8px] w-full bg-white/20  mb-2 ">
                                              <div className="rounded-2xl bg-green-500 w-full h-[8px]"></div>
                                            </div>
                                            <div className="flex  w-full mt-auto  text-sm">
                                              <div className="w-5/12"><span className="font-semibold">Punch In : </span>{inner.punchInTime}</div>
                                              <div className="w-4/12"><span className="font-semibold">Total Time: </span>{inner.total ? inner.total : '00:00'}</div>
                                              <div className="w-5/12 text-left"><span className="font-semibold">Punch Out: </span>{inner.punchOutTime ? inner.punchOutTime : <><a href='#' className='text-blue-500'>Request Punch</a></>}</div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                )
                              })
                            }</> : <>
                            <div className="w-full max-w-full px-3 py-2 mx-auto" key={index}>
                              <div className="relative flex flex-col  bg-gray-200 border-0  rounded  ">
                                <div className="flex items-end flex-auto py-3 pt-0 px-3 ">
                                  <div className="flex flex-col items-center w-full mt-3">
                                    <div className="mx-3 rounded-2xl h-[8px] w-full bg-white/20">
                                      <div className="rounded-2xl bg-gray-400 w-full h-[8px]"></div>
                                    </div>

                                  </div>
                                </div>
                              </div>
                            </div>

                          </>}



                        </td>

                      </tr>
                    </>)
                  })}
                </> : null}





                {/* {data ? <>

                  {data.map((data: any, index: number) => {
                    return (
                      <tr className="border dark:border-gray-500" key={index}>
                        <td className="whitespace-nowrap px-2 py-2 font-medium"> {data.date.day},{DateTime.fromISO(data.date.date).toFormat('MMMM dd, yyyy').toString()}</td>
                        <td className="whitespace-nowrap px-4 py-2">
                          {data.data.length > 0 ? <>
                            {
                              data.data.map((inner: any, index1: number) => {
                                return (
                                  <>
                                    <div className="w-full max-w-full px-3 py-2 mx-auto" key={index1}>
                                      <div className="relative flex flex-col  bg-gray-200 border-0  rounded  ">
                                        <div className="flex items-end flex-auto py-3 pt-0 px-3 ">
                                          <div className="flex flex-col items-center w-full mt-3">
                                            <div className="mx-3 rounded-2xl h-[8px] w-full bg-white/20  mb-2 ">
                                              <div className="rounded-2xl bg-green-500 w-full h-[8px]"></div>
                                            </div>
                                            <div className="flex  w-full mt-auto  text-sm">
                                              <div className="w-5/12"><span className="font-semibold">Punch In : </span>{inner.punchInTime}</div>
                                              <div className="w-4/12"><span className="font-semibold">Total Time: </span>{inner.total ? inner.total : '00:00'}</div>
                                              <div className="w-5/12 text-left"><span className="font-semibold">Punch Out: </span>{inner.punchOutTime ? inner.punchOutTime : <><a href='#' className='text-blue-500'>Request Punch</a></>}</div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                )
                              })
                            }</> : <>
                            <div className="w-full max-w-full px-3 py-2 mx-auto" key={index}>
                              <div className="relative flex flex-col  bg-gray-200 border-0  rounded  ">
                                <div className="flex items-end flex-auto py-3 pt-0 px-3 ">
                                  <div className="flex flex-col items-center w-full mt-3">
                                    <div className="mx-3 rounded-2xl h-[8px] w-full bg-white/20">
                                      <div className="rounded-2xl bg-gray-400 w-full h-[8px]"></div>
                                    </div>

                                  </div>
                                </div>
                              </div>
                            </div>

                          </>}



                        </td>

                      </tr>
                    );
                  })}

                </> : null} */}


              </tbody>
            </table>
          </div>
        </div>
        <div className="w-2/6">
          <div className='ml-9 pl-12'>
            <span className="text-gray-900 font-medium ">Attendance Summary</span>
            <div className="flex mb-2 mt-2">
              <div className="w-1/12">
                <span className="bg-green-400 h-4 w-4 rounded-full block "></span>
              </div>
              <div className="w-11/12">
                <span className="text-sm font-semibold block">Present</span>
              </div>
            </div>
            <div className="flex mb-2 mt-2">
              <div className="w-1/12">
                <span className="bg-red-400 h-4 w-4 rounded-full block "></span>
              </div>
              <div className="w-11/12">
                <span className="text-sm font-semibold block">Late</span>
              </div>
            </div>

            <div className="flex mb-2 mt-2">
              <div className="w-1/12">
                <span className="bg-blue-400 h-4 w-4 rounded-full block "></span>
              </div>
              <div className="w-11/12">
                <span className="text-sm font-semibold block">Early Left</span>
              </div>
            </div>


            <div className="flex mb-2 mt-2">
              <div className="w-1/12">
                <span className="bg-yellow-400 h-4 w-4 rounded-full block "></span>
              </div>
              <div className="w-11/12">
                <span className="text-sm font-semibold block"> Late Sitting</span>
              </div>
            </div>

          </div>




        </div>
      </div>





    </>
  )
}

export default AttendancePage