"use client"
import  {useState} from "react"
import { Inter } from "next/font/google";
import "./globals.css";
import Context from "@/components/Context";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, session }) {
  const [user, setUser] = useState({
    name: "",
    password: "",
    type: "manager",
    favgames: "VALORANT",
    num: "9098009676",
    rentaldue: 0,
  });

// className={inter.className}
  console.log('Current user:', user);
  return (
    <html lang="en">
      <body className=" bg-gray-300">

          <Context.Provider value={{user, setUser}}>
          <Toaster />
            {children}
          </Context.Provider>

        </body>
    </html>
  );
}
