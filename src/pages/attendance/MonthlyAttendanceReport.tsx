
import { useDispatch, useSelector } from 'react-redux';
import { attendanceMonthly, changeMonth, changeYear } from '../../store/attendance/attendance.reducer';
import { useEffect } from 'react';


const MonthlyAttendanceReport = () => {
  const dispatch = useDispatch();
  const monthlyReport = useSelector((state: any) => state.loadAttendanceMonthlyReport);
  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    dispatch(attendanceMonthly({ Year: monthlyReport.currentYear, Month: monthlyReport.currentMonth }));
  }

  const handleClander = async (type: any) => {
    if (type == 'previous') {
      if (monthlyReport.currentMonth > 1) {
        dispatch(changeMonth(monthlyReport.currentMonth - 1));
        //change state and refresh data
        dispatch(attendanceMonthly({ Year: monthlyReport.currentYear, Month: monthlyReport.currentMonth }));
      }
      else if (monthlyReport.currentMonth == 1) {
        dispatch(changeYear(monthlyReport.currentYear - 1));
        dispatch(changeMonth(12));
        //change state and refresh data
        dispatch(attendanceMonthly({ Year: monthlyReport.currentYear, Month: monthlyReport.currentMonth }));
      }
    }
    else if (type == 'next') {
      if (monthlyReport.currentMonth < 12) {
        dispatch(changeMonth(monthlyReport.currentMonth + 1));
        //change state and refresh data
        dispatch(attendanceMonthly({ Year: monthlyReport.currentYear, Month: monthlyReport.currentMonth }));
      }
      else if (monthlyReport.currentMonth == 12) {
        dispatch(changeYear(monthlyReport.currentYear + 1));
        dispatch(changeMonth(1));
        //change state and refresh data
        dispatch(attendanceMonthly({ Year: monthlyReport.currentYear, Month: monthlyReport.currentMonth }));
      }
    }

  }
  const c = () => {
    let a: any = [];
    monthlyReport.data.data.map((data: any, _index: number) => {

      monthlyReport.data.attendance.map((attendance: any) => {
        console.log(attendance)
        if (attendance.date == data.date) {
          a.push(attendance);
        }
      })
      // console.log(data.date)
    })
    console.log(a)
  }


  return (
    <>
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

      <button className='bg-teal-500 px-3 py-1 text-white mb-1 rounded' onClick={() => {
        dispatch(attendanceMonthly());
      }} >
        Refresh
      </button>

      <button className='bg-teal-500 px-3 py-1 text-white mb-1 rounded' onClick={() => {
        c();
      }} >
        ddd
      </button>



      <div className="flex flex-col overflow-x-auto">
        <div className="">
          <div className="inline-block min-w-full p-3 bg-white rounded">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm font-light border-collapse border dark:border-neutral-500">
                <thead className=" font-medium ">
                  <tr>
                    <th scope="col" className="px-6 py-4 border border-slate-600">#</th>
                    {monthlyReport.data.data ? <>
                      {
                        monthlyReport.data.data.map((data: any, index: number) => {
                          return (
                            <th key={index} scope="col" className="px-6 py-4 border border-slate-600">
                              {data.wholeDay}<br></br>
                              {data.day}
                            </th>
                          )
                        })
                      }
                    </> : null}

                  </tr>
                </thead>
                <tbody>


                  <tr>
                    <th scope="col" className="px-6 py-4 border border-slate-600">#</th>
                    {/* {monthlyReport.data ? <>
                      {
                        monthlyReport.data.data.map((data: any, index: number) => {
                          return (
                            <th key={index} scope="col" className="bg-green-100 whitespace-nowrap px-6 py-4 font-medium border border-slate-600">
                              <div className='bg-gray-300 px-2'>134  - 33</div>

                            </th>
                          )
                        })
                      }
                    </> : null} */}
                  </tr>



                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default MonthlyAttendanceReport;