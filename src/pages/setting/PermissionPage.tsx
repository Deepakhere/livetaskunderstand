// import { useState } from "react"
import { MdCreateNewFolder, MdFolderDelete, MdUpdate } from "react-icons/md"


const PermissionPage = () => {
  // const [isChecked, setIsChecked] = useState(false)

  // const handleCheckboxChange = () => {
  //   setIsChecked(!isChecked)
  // }
  return (
    <>

      <div className="bg-white rounded p-3 mb-6">
        <div className="w-2/5">

          <div className="bg-gray-100  p-4 rounded">
            <p className="text-md mb-2 font-bold text-gray-500">Employee Permission</p>
            <div
              className=" text-sm inline-flex items-center font-bold leading-sm uppercase px-3  py-1 bg-green-200 text-green-700 rounded"
            >
              <MdCreateNewFolder />
              <span className="ml-1">Create</span>
            </div>

            <div
              className="ml-4 text-sm inline-flex items-center font-bold leading-sm uppercase px-3  py-1 text-orange-700 bg-orange-200 rounded"
            >
              <MdUpdate />
              <span className="ml-1">Update</span>
            </div>


            <div
              className="ml-4 text-sm inline-flex items-center font-bold leading-sm uppercase px-3  py-1 bg-red-200 text-red-700 rounded"
            >
              <MdFolderDelete />
              <span className="ml-1">Delete</span>
            </div>

          </div>
        </div>



      </div>

      <div className="sm:px-6 w-full">


        <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">

          <div className="mt-7 overflow-x-auto">
            <table className="w-full whitespace-nowrap">
              <tbody>
                <tr className=" h-20 border border-gray-100 rounded">

                  <td className="">
                    <div className="flex items-center pl-5">
                      <p className="text-base font-medium leading-none text-gray-700 mr-2">Work Shift</p>
                    </div>
                  </td>
                  <td className="pl-5">
                    <div className="flex  flex-col items-center">
                      <p className="text-sm  text-gray-800 ml-2 mb-2">Create</p>
                      <div className="bg-gray-300 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                        <input placeholder="checkbox" type="checkbox" className="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                      </div>
                    </div>
                  </td>
                  <td className="pl-5">
                    <div className="flex  flex-col items-center">
                      <p className="text-sm  text-gray-800 ml-2 mb-2">Update</p>
                      <div className="bg-gray-300 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                        <input placeholder="checkbox" type="checkbox" className="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                      </div>
                    </div>
                  </td>


                  <td className="pl-5">
                    <div className="flex  flex-col items-center">
                      <p className="text-sm  text-gray-800 ml-2 mb-2">Delete</p>
                      <div className="bg-gray-300 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                        <input placeholder="checkbox" type="checkbox" className="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                      </div>
                    </div>
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

export default PermissionPage