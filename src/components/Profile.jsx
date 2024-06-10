"use client";
import { useEffect, useContext, useState } from "react";
import React from "react";
import Input from "./Input";
import Button from "./Button";
import Context from "./Context";
import Loading from "./Loading";

const Profile = () => {
  const { user, setUser } = useContext(Context);
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Fetch user profile from the backend
  //   const fetchProfile = async () => {
  //     try {
  //       const response = await fetch("/api/profile", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ name: user?.name, pwd: user?.password }),
  //       });
  //       const data = await response.json();
  //       setUser(data.profile);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching profile:", error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchProfile();
  // }, [setUser]);

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: user.name,
          favgames: user.favgames,
          phoneNum: user.num,
          password: newPassword || user.password, // Only update if new password is provided
        }),
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

  // if (loading) {
  //   return <div><Loading/></div>;
  // }

  return (
    <div className="flex w-full h-screen bg-gradient-to-r from-tm-purple to-tm-blue items-center justify-around">
       <div className="rounded-lg p-12 w-1/3 bg-white/60 flex flex-col justify-center items-start h-fit gap-3">

          <div className="text-4xl font-light">Account Profile</div>
        {user && (
          <div className="text-lg text-gray-700">
            <p>Name: {user.name}</p>
            <p>Favorite Games: {user.favgames}</p>
            <p>Number of Overdue Games: {user.rentalDue}</p>
            <p>Phone Number: {user.num}</p>
          </div>
        )}
        </div>
      <div className="rounded-lg p-12 w-1/3 bg-white/60 flex flex-col justify-center items-start h-fit gap-3">
        <div>
          <div className="text-4xl font-light">Update Profile</div>
          <div className="text-lg text-gray-600">Jon and Lester Game Rentals</div>
        </div>
        <form className="w-full" onSubmit={handleUpdate}>
          <Input
            name="favgames"
            type="text"
            title="Favorite Games"
            placeholder="Favorite Games"
            value={user?.favgames || ""}
            user={user}
            setUser={setUser}
            maxLength={100}
          />
          <Input
            name="num"
            type="text"
            title="Phone Number"
            placeholder="Phone Number"
            value={user?.num}
            user={user}
            setUser={setUser}
            maxLength={15}
            regex={/^\+?\d{10,15}$/}
          />
          <Input
            name="newPassword"
            type="password"
            title="New Password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            maxLength={100}
          />
          <Button type="submit" text="UPDATE" color="white" />
        </form>
      </div>
    </div>
  );
};

export default Profile;
