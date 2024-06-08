// TableComponent.js
import React, { useState } from 'react';
import { useReactTable, getCoreRowModel, getPaginationRowModel } from '@tanstack/react-table';
import { data, columns } from '../data/mock';
import Table from './Table';

const TableComponent = () => {
  const [loading, setLoading] = useState(false);
  const [empty, setEmpty] = useState("No data available");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className=''>
        <Table
          getHeaderGroups={table.getHeaderGroups}
          getRowModel={table.getRowModel}
          getState={table.getState}
          previousPage={table.previousPage}
          getCanPreviousPage={table.getCanPreviousPage}
          nextPage={table.nextPage}
          getCanNextPage={table.getCanNextPage}
          getPageCount={table.getPageCount}
          Dropdown={() => <div>Dropdown Component</div>}
          empty={empty}
          loading={loading}
        />
    </div>
  );
};

export default TableComponent;
