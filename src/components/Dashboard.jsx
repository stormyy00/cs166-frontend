"use client";
import { useState, useEffect, useContext } from 'react';
import Context from './Context';
import Table from './Table';
import Navigation from './Navigation';
import Input from "./Input.jsx";
import Button from "./Button.jsx";
import Link from 'next/link';
import toast from 'react-hot-toast';
import { INPUTS } from "@/data/inputs.js";
import {
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
  } from "@tanstack/react-table";

const Dashboard = ({ title, columns, page, tags, Dropdown, empty }) => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState([]);
  const { user, setUser } = useContext(Context);
  const handleReload = async () => {
    let ready = true;
    INPUTS[page].map((input) => {
      if (!user[input]) {
        toast("Please fill all the fields");
        ready = false;
        return;
      }
    });
    if (ready)
      fetch("/api/" + page, {
        method: "POST",
        body: JSON.stringify(user),
      })
      .then((response) => {
        // Check if response is successful
        if (!response.ok) {
          toast(`❌ ${response.status} unauthorized access`);
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((res) => {
          setData(res.message);
          toast("✅ Fetch successful");
        })
        .catch((err) => {
          console.log(err.message);
          setData([]);
          toast.error("❌ Fetch failed");
        });
  };
  useEffect(() => {
    handleReload();
  }, INPUTS[page]);
  const {
    getHeaderGroups,
    getRowModel,
    getFilteredSelectedRowModel,
    toggleAllRowsSelected,
    getState,
    previousPage,
    getCanPreviousPage,
    nextPage,
    getCanNextPage,
    getPageCount,
  } = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: setSelected,
    enableRowSelection: true,
    state: {
      rowSelection: selected,
      columnFilters: filters,
    },
  });

  return (
    <div className="flex items-center justify-center w-full h-full ">
      <title>{title}</title>
      <Navigation />
      <div className="w-full flex justify-center items-start bg-hackathon-page h-screen py-12 lg:py-0 z-0 px-4">
        <div className="w-full">
           <div className="flex justify-between items-center my-2 text-4xl font-bold  w-full">
            <p className=" bg-gradient-to-r from-gray-600 to-blue-500 bg-clip-text text-transparent">
            {title}
            </p>
            <Link className="text-xl text-white bg-gradient-to-r from-blue-400/90 to-blue-500 p-2 rounded-xl hover:opacity-90 duration-300"href={"/"}>Logout</Link>
          </div>
          {INPUTS[page].map((input, index) => (
            <Input
              key={index}
              name={input}
              type="text"
              title={input}
              placeholder={input}
              value={user[input]}
              user={user}
              setUser={setUser}
              maxLength={100}
            />
          ))}
          {INPUTS[page]?.length > 0 && (
            <Button onClick={handleReload} text="submit" color="black" />
          )}
          <div className="h-5" />
          <Table
            getHeaderGroups={getHeaderGroups}
            getRowModel={getRowModel}
            getState={getState}
            previousPage={previousPage}
            getCanPreviousPage={getCanPreviousPage}
            nextPage={nextPage}
            getCanNextPage={getCanNextPage}
            getPageCount={getPageCount}
            Dropdown={Dropdown}
            empty={empty}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;