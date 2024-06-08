'use client'
import { useState } from "react";
import { useReactTable, getCoreRowModel, getPaginationRowModel } from '@tanstack/react-table';
import { data, columns } from '../data/mock';
import Image from "next/image";
import Button from "../components/Button";
import Stuff from "../components/Stuff";
import Table from "@/components/Table";
import Navigation from "@/components/Navigation";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [empty, setEmpty] = useState("No data available");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="flex items-center justify-center w-full h-full ">
      <title className="text-tm-blue">MOCK</title>
      <Navigation />
        <div className="w-full flex justify-center items-center h-screen py-12 lg:py-0 z-0 px-4">
          <div className="w-10/12">
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
      </div>
    </div>
  );
};

