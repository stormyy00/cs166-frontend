"use client";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Context from "@/components/Context";

const page = () => {
    const {user, setUser} = useContext(Context);

    const route = useRouter();

    const register = (e) => {
        e.preventDefault();
        if (!user.name && !user.pwd && !user.favGame && !user.num) {
            alert("Please fill out all fields");
            return;
        }
        if (!user.num.match(/^\+?\d{10,15}$/)) {
            alert("Please enter a valid phone number");
            return;
        }
            // check if phone number is valid 
        fetch('api/register', {
            method: 'POST',
            body: JSON.stringify(user),
        })
        .then((response)=>{
            response.json();
        }).then((data)=>{
            setUser({...user}); //role: "customer"
            route.push("/login")
        })
        .catch((err) => {
            alert("Error" + err.message);
          });
    };    
  return (
    <div className="flex w-full h-screen bg-gradient-to-r from-tm-purple to-tm-blue items-center justify-around">
    {/* <div className="w-fit flex flex-col items-center justify-center text-white">
      <Image src={logo} alt="logo" width={100} height={100} />
      <div>Elevating Shopping to Prime Satisfaction!</div>
    </div> */}
    <div className="rounded-lg p-12 w-1/3 bg-white/60 flex flex-col justify-center items-start h-fit gap-3">
      <div>
        <div className="text-4xl font-light">REGISTER</div>
        <div className="text-lg text-gray-600">Jon and Lester Game Rentals</div>
      </div>
      <form className="w-full">
        <Input
          name="name"
          type="text"
          title="name"
          placeholder="name"
          value={user.name}
          user={user}
          setUser={setUser}
          maxLength={100}
          required
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
          required
        />
          {/* <Input
          name="role"
          type="text"
          title="role"
          placeholder="role"
          value={user.role}
          user={user}
          setUser={setUser}
          maxLength={100}
          required
        /> */}
          <Input
          name="favGame"
          type="text"
          title="Favorite Game"
          placeholder="Favorite Game"
          value={user.favGame}
          user={user}
          setUser={setUser}
          maxLength={100}
          required
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
         required
         regex={/^\+?\d{10,15}$/}
        />
        <Button onClick={register} text="SUBMIT" color="white" />
      </form>
      <p className="w-full text-center">
        already have an account?
      </p>
      <Link href="/login" className="text-blue-500 w-full text-center text-lg -mt-2">
        LOGIN
      </Link>
    </div>
  </div>
  )
}

export default page;
