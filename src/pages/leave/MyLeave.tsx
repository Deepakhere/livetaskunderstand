

const MyLeave = () => {
  return (
    <>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-1">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">Name</th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">Date & time</th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">Leave duration</th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">Leave Type</th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">Attachments</th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">Status</th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">Activity</th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            <tr className="hover:bg-gray-50">
              <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                <div className="relative h-10 w-10">
                  <img
                    className="h-full w-full rounded-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-700">Ankit Sah (1001)</div>
                  <div className="text-gray-400">UI & UX</div>
                </div>
              </th>
              <td className="px-6 py-4">21 Jun, 23</td>
              <td className="px-6 py-4">Last half</td>
              <td className="px-6 py-4"> Paid Sicks</td>



              <td className="px-6 py-4">
                <div className="flex gap-2">
                  {/* <span
                    className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
                  >
                    View
                  </span> */}

                  <span
                    className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600"
                  >
                    View
                  </span>
                </div>
              </td>

              <td className="px-6 py-4">
                <span
                  className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                  Approved
                </span>
              </td>
              <td className="px-6 py-4"> --</td>



              <td className="px-6 py-4">
                <div className="flex justify-end gap-4">

                  <a x-data="{ tooltip: 'Edite' }" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"

                      stroke="currentColor"
                      className="h-6 w-6"
                      x-tooltip="tooltip"
                    >
                      <path


                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      />
                    </svg>
                  </a>
                </div>
              </td>
            </tr>




          </tbody>
        </table>
      </div>
    </>
  )
}

export default MyLeave