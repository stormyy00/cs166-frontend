'use client'
import { useState } from "react";
import Login from "@/components/Login";
// import { useReactTable, getCoreRowModel, getPaginationRowModel } from '@tanstack/react-table';
// import { data } from '../data/mock';
import Image from "next/image";
import Button from "../components/Button";
import Stuff from "../components/Stuff";
import Table from "@/components/Table";
import Navigation from "@/components/Navigation";
// import { COLUMNS } from '@/data/columns';

export default function Home() {
  // const [loading, setLoading] = useState(false);
  // const [empty, setEmpty] = useState("No data available");
  // const [selected, setSelected] = useState([]);
  // const [filters, setFilters] = useState([]);

  // const table = useReactTable({
  //   data: data, // Use mockCatalogData as your data source
  //   columns: COLUMNS.catalog, // Assuming COLUMNS.catalog contains your column definitions
  //   getCoreRowModel: getCoreRowModel(),
  //   // getFilteredRowModel: getFilteredRowModel(),
  //   getPaginationRowModel: getPaginationRowModel(),
  //   // getSortedRowModel: getSortedRowModel(),
  //   onRowSelectionChange: setSelected,
  //   enableRowSelection: true,
  //   state: {
  //     rowSelection: selected,
  //     columnFilters: filters,
  //   },
  // });

  return (
    <div className=""><Login/></div>
    // <div className="flex items-center justify-center w-full h-full ">
    //   <title className="text-tm-blue">MOCK</title>
    //   <Navigation />
    //     <div className="w-full flex justify-center items-center h-screen py-12 lg:py-0 z-0 px-4">
    //       <div className="w-11/12">
    //       <Table
    //         getHeaderGroups={table.getHeaderGroups}
    //         getRowModel={table.getRowModel}
    //         getState={table.getState}
    //         previousPage={table.previousPage}
    //         getCanPreviousPage={table.getCanPreviousPage}
    //         nextPage={table.nextPage}
    //         getCanNextPage={table.getCanNextPage}
    //         getPageCount={table.getPageCount}
    //         Dropdown={() => <div>Dropdown Component</div>}
    //         empty={empty}
    //         loading={loading}
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};

