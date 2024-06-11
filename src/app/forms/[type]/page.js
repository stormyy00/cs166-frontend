"use client";
import Button from "@/components/Button";
import Dashboard from "@/components/Dashboard";
import Input from "@/components/Input";
import Navigation from "@/components/Navigation";
import Context from "@/components/Context";
import { COLUMNS } from "@/data/columns";
import { INPUTS } from "@/data/inputs";
import Link from "next/link";

import { useContext, useState } from "react";
import toast from "react-hot-toast";
// import toast from "react-hot-toast";

const Page = ({ params }) => {
  const { user, setUser } = useContext(Context);
  const [data, setdata] = useState({});
  const submit = () => {
    let ready = true;
    if (!user) return;
    INPUTS[params.type].map((input) => {
      if (!data[input]) {
        toast("⚠️ Please fill all the fields");
        ready = false;
        return;
      }
    });
    if (ready)
      fetch("/api/" + params.type, {
        method: "POST",
        body: JSON.stringify({ ...user, ...data }),
      })
        .then((response) => response.json())
        .then((res) => {
          console.log(res.message);
          toast(res.message);
        })
        .catch((err) => {
          console.log(err.message);
        });
  };

  return (
    <div className="flex items-center justify-center w-full h-full ">
      <title>{params.type}</title>
      <Navigation />
      <div className="w-full flex justify-center items-start bg-hackathon-page h-screen py-12 lg:py-0 z-0 px-4">
        <div className="w-full">
          <div className="flex justify-between items-center my-2 text-4xl font-bold  w-full">
            <p className="  bg-gradient-to-r from-blue-400 to-blue-600  bg-clip-text text-transparent">
            {params.type}
            </p>
            <Link className="text-xl text-white bg-gradient-to-r from-blue-400/90 to-blue-500 p-2 rounded-xl hover:opacity-90 duration-300"href={"/"}>Logout</Link>
          </div>
          {INPUTS[params.type].map((input, index) => (
            <Input
              key={index}
              name={input}
              type="text"
              title={input}
              placeholder={input}
              value={data[input]}
              user={data}
              setUser={setdata}
              maxLength={100}
            />
          ))}
          <Button onClick={submit} text="SUBMIT" color="black" />
        </div>
      </div>
    </div>
  );
};

export default Page;