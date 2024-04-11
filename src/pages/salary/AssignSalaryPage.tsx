import { useEffect, useMemo, useState } from 'react';
import {
  MaterialReactTable,
  type MRT_ColumnDef,
  type MRT_ColumnFiltersState,
  type MRT_PaginationState,
  type MRT_SortingState,
} from 'material-react-table';




type User = {
  title: string;
  price: number
};
const AssignSalaryPage = () => {
  //data and fetching state
  const [data, setData] = useState<User[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefetching, setIsRefetching] = useState(false);
  const [rowCount, setRowCount] = useState(0);

  //table state
  const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>(
    [],
  );
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState<MRT_SortingState>([]);
  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  //if you want to avoid useEffect, look at the React Query example instead
  useEffect(() => {
    const fetchData = async () => {
      if (!data.length) {
        setIsLoading(true);
      } else {
        setIsRefetching(true);
      }

      const url = new URL('/api/data', 'https://www.material-react-table.com');
      // url.searchParams.set('start', `${pagination.pageIndex * pagination.pageSize}`);
      // url.searchParams.set('size', `${pagination.pageSize}`);
      url.searchParams.set('filters', JSON.stringify(columnFilters ?? []));
      url.searchParams.set('globalFilter', globalFilter ?? '');
      url.searchParams.set('sorting', JSON.stringify(sorting ?? []));


      //console.log(JSON.stringify(columnFilters ?? []));

      console.log(globalFilter)

      try {
        const response = await fetch(`https://dummyjson.com/products?skip=${pagination.pageIndex * pagination.pageSize}&limit=${pagination.pageSize}`);
        const json = (await response.json());
        setData(json.products);
        setRowCount(json.total);

      } catch (error) {
        setIsError(true);
        console.error(error);
        return;
      }
      setIsError(false);
      setIsLoading(false);
      setIsRefetching(false);
    };
    fetchData();

  }, [
    columnFilters,
    globalFilter,
    pagination.pageIndex,
    pagination.pageSize,
    sorting,
  ]);

  const columns = useMemo<MRT_ColumnDef<User>[]>(
    () => [
      {
        accessorKey: 'title',
        header: 'First Name',
      },
      //column definitions...
    ],
    [],
  );
  return (
    <div>

      <MaterialReactTable
        columns={columns}
        data={data}
        enableRowSelection
        // enableRowActions
        // getRowId={(row) => row.price}
        // initialState={{ showColumnFilters: true }}
        // manualFiltering
        // manualPagination
        // manualSorting
        // muiToolbarAlertBannerProps={
        //   isError
        //     ? {
        //       color: 'error',
        //       children: 'Error loading data',
        //     }
        //     : undefined
        // }
        onColumnFiltersChange={setColumnFilters}
        onGlobalFilterChange={setGlobalFilter}
        onPaginationChange={setPagination}
        onSortingChange={setSorting}
        rowCount={rowCount}
        state={{
          // columnFilters,
          globalFilter,
          isLoading,
          pagination,
          showAlertBanner: isError,
          showProgressBars: isRefetching,
          sorting,
        }}
      />
    </div>
  )
}

export default AssignSalaryPage