import { useState, useContext } from 'react';
import { ITEM } from '@/data/nav';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Context from './Context';
import { CgProfile } from 'react-icons/cg';
import logo from '../pictures/logo.png';
import Image from 'next/image';

const Navigation = () => {
  const { user, setUser } = useContext(Context);
  const [expand, setExpand] = useState(false);
  const pathName = usePathname();

  return (
    <>
      {/* Mobile Navbar */}
      <div className="lg:hidden w-full bg-gradient-to-b from-tm-purple to-tm-blue h-12 items-center fixed z-20">
        <div
          className="flex items-center hover:cursor-pointer"
          onClick={() => setExpand(!expand)}
        >
          {/* <Image src={LOGO} className="w-10 h-10 mx-2" alt={`Logo`} /> */}
          {/* <div className="text-black text-xl font-bold">{user.type}</div>
          <div className="text-white text-xl font-semibold">
            {pathName.split("/")[2]}
          </div> */}
        </div>
      </div>

      {/* Expanded Navbar */}
      <div
        className={`z-10 lg:flex lg:w-[15%] h-screen ${
          expand ? 'left-0  w-1/2 fixed pt-5' : 'hidden'
        }`}
        style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}
      >
        <div className={`flex w-fit h-screen flex-col justify-between items-center bg-white ${expand ? 'shadow-right' : ''}`}>
          {/* Logo and User Info */}
          <div className="hidden lg:flex flex-col justify-center items-center my-3">
            <Image src={logo} className="w-16 h-16 mx-2" alt={` Logo`} />
            <div className="text-black text-xl font-bold">{user.type}</div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col justify-start items-center mx-6">
            {ITEM.map(
              (item, idx) =>
                item.type.includes(user.type) && (
                  <Link key={idx} href={item.link} className="no-underline p-0 w-full">
                    <div
                      onClick={() => setExpand(false)}
                      className={`w-full flex  [&>*]:text-blue-600 font-semibold text-base items-center justify-start py-1 pl-[10%] ${
                        pathName.endsWith(item.link)
                          ? 'bg-gray-300/60 rounded-lg'
                          : '[&>*]:hover:text-blue-900'
                      }`}
                    >
                      {/* {tab.icon} */}
                      <p className="text-xl m-0">{item.name}</p>
                    </div>
                  </Link>
                )
            )}
          </div>

          {/* Profile Icon */}
          <Link href={'/table/profile'} className="flex  h-fit">
            <CgProfile className="text-5xl text-blue-700" />
          </Link>
          {/* <Link href="/">LOG OUT</Link> */}
        </div>
      </div>
    </>
  );
};

export default Navigation;
