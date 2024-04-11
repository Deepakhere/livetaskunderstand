

import { useEffect, useState, useMemo } from 'react';
import api from '../../api/api';
import AddEmployeeComponent from '../../components/forms/AddEmployeeComponent'
import { DateTime } from 'luxon';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { BiSearch } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import RightDrawer from '../../components/common/RightDrawer';
import { IoIosAddCircle } from 'react-icons/io';
import { encrypt } from '../../helpers/encryptDecrypt';

const EmployeePage = () => {
  const [employee, setEmployee]: any = useState([]);
  //for global filter
  const [filtering, setFiltering]: any = useState('');
  //for row selection
  // const [rowSelect, setRowSelect]: any = useState({});
  const [sorting, setSorting]: any = useState([]);
  //for pagnation
  const [pagnation, setPagnation]: any = useState({
    pageIndex: 0,
    pageSize: 10
  })

  useEffect(() => {
    if (sorting.length > 0) {
      const { id, desc }: any = sorting[0];
      getData({ pagnation: { page: table.getState().pagination.pageIndex + 1, limit: table.getState().pagination.pageSize }, sort: `${id}:${desc ? 'desc' : 'asc'}` });
    }
    else {
      getData({ filtering, pagnation: { page: table.getState().pagination.pageIndex + 1, limit: table.getState().pagination.pageSize } });
    }
  }, [filtering, sorting, pagnation]);
  //////////////////////////////////////////////
  const getData = async (payload: { filtering?: any, pagnation: { page: number, limit: number }, sort?: any, }) => {
    const { page, limit } = payload.pagnation;
    let url = `employee/fetch?search=${payload.filtering ? payload.filtering : ''}&page=${page}&limit=${limit}`;
    if (payload.sort) {
      url += `&sort=${payload.sort}`
    }
    const res = await api.get(url);
    if (res.data) {
      setEmployee(res.data);
    }
  }
  /////////////////////////////////////////////

  const columns = useMemo(
    () => [
      {
        header: 'ID',
        accessorKey: 'id',
        filterable: false,
      },
      {
        header: 'Emp Code',
        accessorKey: 'employeeId',
        filterable: false,
        width: 70

      },

      {
        header: 'Name',
        accessorKey: 'name',
        enableSorting: false,
        enableHiding: false,

      },
      {
        header: 'Mobile',
        accessorKey: 'mobile',

      },
      {
        header: 'Email',
        accessorKey: 'email',
        enableSorting: false,
        enableHiding: false,
        filterable: false,
        width: 170
      },
      {
        header: 'Department',
        accessorKey: 'departmentName',
        enableSorting: false,
        enableHiding: false,
        filterable: false,
        width: 100
      },

      {
        header: 'Designation',
        accessorKey: 'designationName',
        enableSorting: false,
        enableHiding: false,
        filterable: false,
      },

      {
        enableColumnFilter: false,
        filterable: false,
        header: 'Created At',
        accessorKey: 'createdAt',
        cell: ({ getValue }: any) => DateTime.fromISO(getValue()).toLocaleString(DateTime.DATE_MED),
        enableSorting: false,
        enableHiding: false,
      },

      {
        enableColumnFilter: false,
        filterable: false,
        header: 'Salary Template',
        accessorKey: 'salaryTemplateId',
        cell: ({ getValue }: any) => {
          if (getValue() == null || getValue() == '') {
            return <>
              <div className='bg-red-300 px-1 py-1 text-xs text-white rounded inline-flex items-center'>
                Not Assigned
              </div>
            </>
          }
          else {
            return <div className='bg-green-100 px-1 py-1 text-xs rounded inline-flex items-center'>
              Assigned
            </div>
          }

        },
        width: 160,
        enableSorting: false,
        enableHiding: false,
      },

      {

        filterable: false,
        header: 'Actions',
        accessorFn: (row: any) => row,
        button: true,
        cell: (row: any) => (
          <div className='flex'>
            <button
              className="bg-teal-500 px-3 py-2 text-white rounded inline-flex items-center"
              onClick={(e) => handleButtonClick(e, row)}
            >
              <AiFillEye /> View
            </button>


          </div>
        ),
      }
    ],
    []
  );

  const navigate = useNavigate();
  const handleButtonClick = async (e: any, row: any) => {
    e.preventDefault();
    const userId = await encrypt(row.row.original.id);
    navigate(`/admin-side/employee/profile`, { state: userId });
  };
  ////////////////////////////////////////

  const table: any = useReactTable({
    data: employee.data ? employee.data : [],
    columns,
    state: {
      sorting,
      pagination: pagnation,
      globalFilter: filtering,
    },
    pageCount: Math.ceil(employee.totalCount / employee.limit),
    onPaginationChange: setPagnation,
    manualPagination: true,
    manualSorting: true,
    manualFiltering: true,
    sortDescFirst: false,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    onGlobalFilterChange: setFiltering,

  })

  return (
    <>

      {/* <button onClick={() => window.location.reload(false)}>refresh</button> */}

      <div className="flex mb-2 justify-between">
        <RightDrawer component={<AddEmployeeComponent />} config={{ title: 'Add New Employee', buttonTitle: 'Add New Employee', buttonIcon: <IoIosAddCircle /> }} />

        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <BiSearch fontSize={19} style={{ color: '#aaaaaa' }} />
          </div>
          <input type='text' value={filtering} onChange={e => setFiltering(e.target.value)} className="focus:outline-teal-500 block w-72 p-2 pl-10 text-sm text-gray-600 border border-gray-300 rounded-lg bg-white   " placeholder="Enter Mobile No..." required />
        </div>

      </div>
      <div className="overflow-scroll rounded-lg border border-gray-200 shadow-md m-1">

        <table style={{ tableLayout: 'fixed', width: '100%' }} className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-100 border-b-2 ">
            {table.getHeaderGroups().map((headerGroup: any) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header: any) => {
                  return (
                    <th key={header.id} colSpan={header.colSpan} style={{
                      width:
                        header.column.columnDef.width !== 150 ? header.column.columnDef.width : undefined,
                    }} className="px-9 py-3 font-medium text-gray-900 ">

                      {header.isPlaceholder ? null : (
                        <div
                          {...{

                            className: header.column.getCanSort()
                              ? 'cursor-pointer select-none'
                              : '',
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {/* sorting code start */}
                          {{
                            asc: ' 🔼',
                            desc: ' 🔽',
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                      )}
                    </th>
                  )
                })}
              </tr>
            ))}
          </thead>


          <tbody className="divide-y divide-gray-200 border-t border-red-400">
            {table
              .getRowModel()
              .rows
              .map((row: any) => {
                return (
                  <tr key={row.id} className="hover:bg-gray-50">
                    {row.getVisibleCells().map((cell: any) => {
                      return (
                        <td style={{
                          width: cell.column.columnDef.width,
                        }} key={cell.id} className="px-9 py-3">

                          {/* {cell.column.columnDef.width} */}
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
          </tbody>


        </table>

        <div className="flex w-full items-center justify-between border-t border-gray-200 bg-white px-4 py-3">
          <div>
            <p className="text-sm text-gray-700">
              Page &nbsp;
              <span className="font-medium mr-1">{table.options.state.pagination.pageIndex + 1}</span>
              of &nbsp;

              <span className="font-medium mr-1">{table.getPageCount()}</span>

            </p>
          </div>
          <div className='text-sm text-gray-700'>
            {/* <input type='number' className='bg-gray-400' defaultValue={table.options.state.pagination.pageIndex} onChange={(e) => table.setPageIndex(e.target.value)} /> */}
            Rows Per Page :
            <select value={table.options.state.pagination.pageSize} onChange={(e) => table.setPageSize(e.target.value)}>

              {[10, 20, 30].map((pageSize: any) => {
                return (<option key={pageSize} value={pageSize}>{pageSize} </option>)
              })}
            </select>
          </div>
          <div>


            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
              <button onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()} className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-800 disabled:text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                {`<<`} First Page
              </button>

              <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-800 disabled:text-gray-400 ring-1 ring-inset ring-gray-300" >
                {`<`} Previous
              </button>

              <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-800 disabled:text-gray-400 ring-1 ring-inset ring-gray-300">
                Next {`>`}
              </button>
              <button onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()} className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-800 ring-1 ring-inset ring-gray-300  text-gray-800 disabled:text-gray-400 "  >
                Last Page  {`>>`}
              </button>
            </nav>
          </div>
        </div>


      </div >
    </>
  )
}

export default EmployeePage;