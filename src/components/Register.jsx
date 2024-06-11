"use client";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Context from "@/components/Context";

const Register = () => {
    const {user, setUser} = useContext(Context);

    const route = useRouter();

    const register = (e) => {
      e.preventDefault();
      console.log(user.name);
      console.log(user.password);
      console.log(user.favgames);
      console.log(user.num);
      if (!user.name && !user.password && !user.favgames && !user.num) {
          alert("Please fill out all fields");
          return;
      }
      if (!user.num.match(/^\+?\d{10,15}$/)) {
          alert("Please enter a valid phone number");
          return;
      }
  
      fetch('api/register', {
          method: 'POST',
          body: JSON.stringify(user),
          headers: {
              'Content-Type': 'application/json'
          }
      })
      .then((response) => response.json())
      .then((res) => {
          setUser({ ...user, type: "customer" });
          route.push("/table/catalog");
      })
      .catch((err) => {
          alert("Error: " + err.message);
      });
  };
  return (
    <div className="flex w-screen h-full bg-gradient-to-br from-gray-300 to-blue-300 items-center justify-around">
      <div className="rounded-lg p-12 w-1/3 bg-white shadow-lg flex flex-col justify-center items-start h-fit gap-4">
        <div>
          <div className="flex justify-start text-4xl font-light text-gray-800">Register</div>
          <div className="text-lg text-end text-gray-600">Jon and Lester Game Rentals</div>
        </div>
      <form className="w-full">
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
          <Input
          name="favGame"
          type="text"
          title="Favorite Game"
          placeholder="Favorite Game"
          value={user.favgames}
          user={user}
          setUser={setUser}
          maxLength={100}

        />
          <Input
         name="num"
         type="text"
         title="Phone Number"
         placeholder="Phone Number"
         value={user.num}
         user={user}
         setUser={setUser}
         maxLength={15}

        //  regex={/^\+?\d{10,15}$/}
        />
        <Button onClick={register} text="Submit" color="white" />
      </form>
      <p className="w-full text-center">
        Already have an account?
      </p>
      <Link href="/" className="text-blue-500 w-full text-center text-lg transition duration-300 ease-in-out transform hover:text-blue-700 hover:scale-105">
        Login
      </Link>
    </div>
  </div>
  )
}
export default Register