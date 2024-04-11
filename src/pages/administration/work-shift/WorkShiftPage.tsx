import AddShiftForm from "../../../components/forms/AddShiftForm"
import { useEffect, useState } from "react";
import api from "../../../api/api";


const WorkShiftPage = () => {
  const [shiftData, setShiftData] = useState([]);

  useEffect(() => {
    getCompanyLists();
  }, [])

  //load company
  const getCompanyLists = async () => {
    const res = await api.get("/shift/lists");
    if (res.data.success) {
      setShiftData(res.data.data)
    }
  }

  return (
    <>
      <div className="flex justify-between mt-3 mb-3">
        <AddShiftForm />
        <div className="flex">
          <div className="flex">
            <button className="ml-2 bg-green-500  rounded text-white px-3">Enable</button>
          </div>
          <div className="flex">
            <button className="ml-2 bg-red-500 rounded text-white px-3">Disabled</button>
          </div>

        </div>

      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-1">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className=" border-b-2">
            <tr className="mb-4">
              <th scope="col" className="py-4 px-6 font-bold text-gray-600">Name</th>
              <th scope="col" className="py-4 font-bold text-gray-600">Monday</th>
              <th scope="col" className="py-4 font-bold text-gray-600">Tuesday</th>
              <th scope="col" className="py-4 font-bold text-gray-600">Wednesday</th>
              <th scope="col" className="py-4 font-bold text-gray-600">Thursday</th>
              <th scope="col" className="py-4 font-bold text-gray-600">Friday</th>
              <th scope="col" className="py-4 font-bold text-gray-600">Saturday</th>
              <th scope="col" className="py-4 font-bold text-gray-600">Sunday</th>

            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">

            {
              shiftData.map((data: any, index: any) => {
                return (
                  <tr className="hover:bg-gray-100 " key={index}>
                    <th className="py-4 px-6">
                      {data.name}
                    </th>
                    <th className="py-4 ">
                      {data.mon.toString() == 'true' ? <div className="w-4 h-4 bg-green-500 justify-center mb-2 ml-8"></div> : <div className="w-4 h-4 bg-red-500 justify-center mb-2 ml-8"></div>}
                      <div className="text-xs text-violet-600    p-1 m-1">{data.monStartTime} to {data.monEndTime}</div>
                    </th>

                    <th className="py-4">
                      {data.tue.toString() == 'true' ? <div className="w-4 h-4 bg-green-500 justify-center mb-2 ml-8"></div> : <div className="w-4 h-4 bg-red-500 justify-center mb-2 ml-8"></div>}
                      <div className="text-xs text-violet-600   p-1 m-1">{data.tueStartTime} to {data.tueEndTime}</div>
                    </th>

                    <th className="py-4">
                      {data.wed.toString() == 'true' ? <div className="w-4 h-4 bg-green-500 justify-center mb-2 ml-8"></div> : <div className="w-4 h-4 bg-red-500 justify-center mb-2 ml-8"></div>}
                      <div className="text-xs text-violet-600   p-1 m-1">{data.wedStartTime} to {data.wedEndTime}</div>
                    </th>

                    <th className="py-4">
                      {data.thu.toString() == 'true' ? <div className="w-4 h-4 bg-green-500 justify-center mb-2 ml-8"></div> : <div className="w-4 h-4 bg-red-500 justify-center mb-2 ml-8"></div>}
                      <div className="text-xs text-violet-600   p-1 m-1">{data.thuStartTime} to {data.thuEndTime}</div>
                    </th>

                    <th className="py-4">
                      {data.fri.toString() == 'true' ? <div className="w-4 h-4 bg-green-500 justify-center mb-2 ml-8"></div> : <div className="w-4 h-4 bg-red-500 justify-center mb-2 ml-8"></div>}
                      <div className="text-xs text-violet-600   p-1 m-1">{data.friStartTime} to {data.friEndTime}</div>
                    </th>


                    <th className="py-4">
                      {data.sat.toString() == 'true' ? <div className="w-4 h-4 bg-green-500 justify-center mb-2 ml-8"></div> : <div className="w-4 h-4 bg-red-500 justify-center mb-2 ml-8"></div>}
                      <div className="text-xs text-violet-600   p-1 m-1">{data.satStartTime} to {data.satEndTime}</div>
                    </th>
                    <th className="py-4">
                      {data.sun.toString() == 'true' ? <div className="w-4 h-4 bg-green-500 justify-center mb-2 ml-8"></div> : <div className="w-4 h-4 bg-red-500 justify-center mb-2 ml-8"></div>}
                      <div className="text-xs text-violet-600    p-1 m-1">{data.sunStartTime} to {data.sunEndTime}</div>
                    </th>


                  </tr>
                )
              })
            }





          </tbody>
        </table>
      </div>
    </>
  )
}

export default WorkShiftPage