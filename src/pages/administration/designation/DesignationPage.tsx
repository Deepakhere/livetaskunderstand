import { useEffect, useMemo, useState } from 'react';
import AddDesignationComponent from '../../../components/forms/AddDesignationComponent'
import api from '../../../api/api';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { DateTime } from 'luxon';

const DesignationPage = () => {
  const [designation, setDesignation]: any = useState([]);
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
  ////////////////////////////////////////////////////////////////
  useEffect(() => {
    if (sorting.length > 0) {
      const { id, desc }: any = sorting[0];
      getData({ pagnation: { page: table.getState().pagination.pageIndex + 1, limit: table.getState().pagination.pageSize }, sort: `${id}:${desc ? 'desc' : 'asc'}` });
    }
    else {
      // console.log(filtering.length)
      // if (filtering.length > 3) {   }
      getData({ filtering, pagnation: { page: table.getState().pagination.pageIndex + 1, limit: table.getState().pagination.pageSize } });


    }
  }, [filtering, sorting, pagnation]);

  //////////////////////////////////////////////
  const getData = async (payload: { filtering?: any, pagnation: { page: number, limit: number }, sort?: any, }) => {
    const { page, limit } = payload.pagnation;
    let url = `/designation/fetch?search=${payload.filtering ? payload.filtering : ''}&page=${page}&limit=${limit}`;
    if (payload.sort) {
      url += `&sort=${payload.sort}`
    }
    const res = await api.get(url);
    if (res.data) {
      setDesignation(res.data);
    }
  }
  /////////////////////////////////////////////

  const columns = useMemo(
    () => [
      {
        header: 'ID',
        accessorKey: 'id',
        filterable: true
      },

      {
        header: 'Designation',
        accessorKey: 'title'
      },
      {
        header: 'Department Name',
        accessorKey: 'departmentName'
      },
      {
        header: 'Branch Name',
        accessorKey: 'companyBranchName',
        enableSorting: false,
        enableHiding: false,
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
    ],
    []
  );

  ////////////////////////////////////////

  const table: any = useReactTable({
    data: designation.data ? designation.data : [],
    columns,
    state: {
      sorting,
      pagination: pagnation,
      globalFilter: filtering,
    },
    pageCount: Math.ceil(designation.totalCount / designation.limit),
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


      <div className="flex mb-2 justify-between">
        <AddDesignationComponent />
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type='text' value={filtering} onChange={e => setFiltering(e.target.value)} className="focus:outline-teal-500 block w-72 p-2 pl-10 text-sm text-gray-600 border border-gray-300 rounded-lg bg-white   " placeholder="Search Designation Name ..." required />
        </div>

      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-1">

        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-100 border-b-2 ">
            {table.getHeaderGroups().map((headerGroup: any) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header: any) => {
                  return (
                    <th key={header.id} colSpan={header.colSpan} className="px-9 py-3 font-medium text-gray-900">
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
                        <td key={cell.id} className="px-9 py-3">
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

        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3">
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

export default DesignationPage