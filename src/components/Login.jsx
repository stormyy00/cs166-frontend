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
    const [isMounted, setIsMounted] = useState(false);


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
          setUser(res.message);
          router.push("/forms/order");
        } else {
          toast("❌ Invalid username or password");
        }
      } catch (error) {
        console.error('Error during login:', error);
        toast("❌ An error occurred during login");
      }
    };
    
  return (
    <div className="flex w-full h-full bg-gradient-to-r from-tm-purple to-tm-blue items-center justify-around">
    {/* <div className="w-fit flex flex-col items-center justify-center text-white">
      <Image src={logo} alt="logo" width={100} height={100} />
      <div>Elevating Shopping to Prime Satisfaction!</div>
    </div> */}
    <div className="rounded-lg p-12 w-1/3 bg-white/60 flex flex-col justify-center items-start h-fit gap-3">
      <div>
        <div className="text-4xl font-light">LOGIN</div>
        <div className="text-lg text-gray-600">Jon and Lester Game Rentals</div>
      </div>
      <form onSubmit={login} className="w-full">
        <Input
          name="name"
          type="text"
          title="name"
          placeholder="name"
          value={user.name}
          user={user}
          setUser={setUser}
          maxLength={100}
        />
        <Input
          name="password"
          type="text"
          title="password"
          placeholder="password"
          value={user.password}
          user={user}
          setUser={setUser}
          maxLength={100}
        />
        <Button onClick={login} text="SUBMIT" color="white" />
      </form>
      <span className="w-full text-center">
        don{"'"}t have an account?
      </span>
      <Link href="/register" className="text-blue-500 w-full text-center text-lg -mt-2">
        REGISTSER
      </Link>
    </div>
  </div>
  )
}

export default Login