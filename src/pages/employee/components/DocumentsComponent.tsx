const DocumentsComponent = () => {
  return (
    <>
      <div className="w-9/12 p-2 bg-gray-300 rounded-r-lg">
        <div className="bg-white py-4 py-7 px-4 px-8 rounded-lg ">
          <div className="mt-7 overflow-x-auto">
            <table className="w-full whitespace-nowrap">
              <tbody>
                <tr className="justify-end h-16 border border-gray-100 rounded">
                  <td className="">
                    <div className="flex items-center pl-5">
                      <p className="text-base font-medium leading-none text-gray-700 mr-2">Resume</p>
                    </div>
                  </td>
                  <td className="">
                    <div className="flex items-center">
                      <p className="text-sm leading-none text-gray-600 ml-2">Created At - 20-09-1999</p>
                    </div>
                  </td>
                  <td className="pl-1">
                    <button className=" text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded">Edit</button>
                    <button className=" text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 ml-1 rounded">Download</button>
                    <button className="py-3 px-3 text-sm  leading-none text-red-700 bg-red-100 rounded ml-1">Delete</button>
                  </td>
                  <td>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default DocumentsComponent