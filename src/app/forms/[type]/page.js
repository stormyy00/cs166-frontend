"use client";
import Button from "@/components/Button";
import Dashboard from "@/components/Dashboard";
import Input from "@/components/Input";
import Navigation from "@/components/Navigation";
import Context from "@/components/Context";
import { COLUMNS } from "@/data/columns";
import { INPUTS } from "@/data/inputs";

import { useContext, useState } from "react";
// import toast from "react-hot-toast";

const Page = ({ params }) => {
  const { user, setUser } = useContext(Context);
  const [data, setdata] = useState({});
  const submit = () => {
    let ready = true;
    if (!user) return;
    INPUTS[params.type].map((input) => {
      if (!data[input]) {
        alert("Please fill all the fields");
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
          alert(res.message);
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
          <div className="flex items-center my-2 text-4xl font-bold bg-gradient-to-r from-tm-purple to-blue-400 bg-clip-text text-transparent w-fit">
            {params.type}
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