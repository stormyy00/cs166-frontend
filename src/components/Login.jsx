'use client'
import {useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/navigation';
import Input from "./Input";
import Button from "./Button";
import Link from 'next/link';
import Context from './Context';
import toast from "react-hot-toast";

const Login = () => {
    const {user, setUser} = useContext(Context);
    const router = useRouter();
    const login = async (e) => {
      e.preventDefault();
      
      console.log(user.name);
      console.log(user.password);
      if (!user.name && !user.password) {
        toast("❌Please fill out all fields");
        return;
    } 
      try {
        const response = await fetch('api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: user.name,
            password: user.password,
          }),
        });
        
        if (!response.ok) {
          // Handle non-2xx HTTP responses
          toast("❌ Invalid username or password");
          return;
        }
        
        const res = await response.json().catch(() => {
          // Handle invalid JSON response
          throw new Error('Invalid JSON response');
        });
        
        if (res.message) {
          setUser(({ ...user,
             // This should include the updated type/role
            type: "customer"
          }));
          router.push("/table/catalog");
        } else {
          toast("❌ Invalid username or password");
        }
      } catch (error) {
        console.error('Error during login:', error);
        toast("❌ An error occurred during login");
      }
    };
    
  return (
    <div className="flex w-screen h-full bg-gradient-to-br from-gray-300 to-blue-300 items-center justify-around">
      <div className="rounded-lg p-12 w-1/3 bg-white shadow-lg flex flex-col justify-center items-start h-fit gap-4">
        <div>
          <div className="flex justify-start text-4xl font-light text-gray-800">Login</div>
          <div className="text-lg text-gray-600">Jon and Lester Game Rentals</div>
        </div>
      <form onSubmit={login} className="w-full">
        <Input
          name="name"
          type="text"
          title="Name"
          placeholder="name"
          value={user.name}
          user={user}
          setUser={setUser}
          maxLength={100}
        />
        <Input
          name="password"
          type="text"
          title="Password"
          placeholder="password"
          value={user.password}
          user={user}
          setUser={setUser}
          maxLength={100}
        />
        <Button onClick={login} text="Submit" color="white" />
      </form>
      <span className="w-full text-center text-gray-700">
        Don{"'"}t have an account?
      </span>

      <Link href="/register" className="text-blue-500 w-full text-center text-lg transition duration-300 ease-in-out transform hover:text-blue-700 hover:scale-105">
        Register
      </Link>
    </div>
  </div>
  )
}

export default Login