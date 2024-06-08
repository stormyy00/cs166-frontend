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

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;
    const router = useRouter();
    const login = (e) => {
      e.preventDefault();
      fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: user.name,
          pwd: user.pwd,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            // Handle non-2xx HTTP responses
            throw new Error('Network response was not ok');
          }
          return response.json(); // Parse JSON if response is ok
        })
        .then((res) => {
          if (res.message) {
            setUser(res.message);
            router.push('/table/store');
          } else {
            toast.error('❌ Invalid username or password');
          }
        })
        .catch((error) => {
          console.error('Error during login:', error);
          toast.error('❌ Login failed');
        });
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
          type="password"
          title="password"
          placeholder="password"
          value={user.pwd}
          user={user}
          setUser={setUser}
          maxLength={100}
        />
        <Button onClick={login} text="SUBMIT" color="white" />
      </form>
      <span className="w-full text-center">
        don't have an account?
      </span>
      <Link href="/register" className="text-blue-500 w-full text-center text-lg -mt-2">
        REGISTSER
      </Link>
    </div>
  </div>
  )
}

export default Login