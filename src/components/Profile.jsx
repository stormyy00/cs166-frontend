"use client"
import { useEffect, useContext } from 'react'
import React from 'react'
import Input from './Input'
import Button from './Button'
import Context from './Context'

//table/proile

const Profile = () => {
    const {user, setUser} = useContext(Context);
    useEffect(() => {
      // Fetch user profile from the backend
      const fetchProfile = async () => {
        try {
          const response = await fetch("/api/profile", {
            method: "GET"
        }); // Adjust the URL to your endpoint
          const data = await response.json();
          setUser(data);
        } catch (error) {
          console.error("Error fetching profile:", error);
        }
      };
  
      fetchProfile();
    }, [setUser]);
  
    const handleUpdate = async (event) => {
      event.preventDefault();
      try {
        const response = await fetch("/api/profile", {
          method: "POST", // or "POST" depending on your API
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
          // body: JSON.stringify({
          //   name: user.name,
          //   pwd: user.pwd,
          // }),
        });
        const data = await response.json();
        if (response.ok) {
          console.log("Profile updated successfully:", data);
        } else {
          console.error("Error updating profile:", data);
        }
      } catch (error) {
        console.error("Error updating profile:", error);
      }
    };
  
    return (
      <div className="flex w-full h-screen bg-gradient-to-r from-tm-purple to-tm-blue items-center justify-around">
        <div className="rounded-lg p-12 w-1/3 bg-white/60 flex flex-col justify-center items-start h-fit gap-3">
          <div>
            <div className="text-4xl font-light">Profile</div>
            <div className="text-lg text-gray-600">Jon and Lester Game Rentals</div>
          </div>
          <form className="w-full" onSubmit={handleUpdate}>
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
            <Input
              name="role"
              type="text"
              title="role"
              placeholder="role"
              value={user.role}
              user={user}
              setUser={setUser}
              maxLength={100}
            />
            <Input
              name="favGame"
              type="text"
              title="Favorite Game"
              placeholder="Favorite Game"
              value={user.favGame}
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
              regex={/^\+?\d{10,15}$/}
            />
            <Button type="submit" text="UPDATE" color="white" />
          </form>
        </div>
      </div>
  )
}

export default Profile