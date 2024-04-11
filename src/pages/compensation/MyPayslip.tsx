

const MyPayslip = () => {
  return (
    <>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-1">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">PaySlip</th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">Month</th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">Action</th>

            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4">Ankit Kumar Sah (100526) - Payslip - 2023 May.pdf</td>

              <td className="px-6 py-4">Jun 2020</td>
              <td className="px-6 py-4">
                <div className="flex gap-2">


                  <span
                    className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600"
                  >
                    Download
                  </span>
                </div>
              </td>

            </tr>


          </tbody>
        </table>
      </div>
    </>
  )
}

export default MyPayslip