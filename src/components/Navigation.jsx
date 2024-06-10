import {useState, useContext} from 'react'
import { ITEM } from '@/data/nav'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Context from './Context';

const Navigation = () => {
  const { user, setUser } = useContext(Context);
    const [expand, setExpand] = useState(false);
    const pathName = usePathname();
  return (
    <>
      <div className="flex lg:hidden w-full bg-gradient-to-b from-tm-purple to-tm-blue h-12 items-center fixed z-20">
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
      <div
        className={`z-10 lg:flex lg:w-[15%] h-screen ${
          expand ? "left-0  w-1/2 fixed pt-5" : `hidden`
        }`}
      >
    <div className='flex w-fit h-screen flex-col justify-between items-center bg-white'>
    <div className="hidden lg:flex flex-col justify-center items-center my-3">
        ICON
            {/* <Image src={LOGO} className="w-10 h-10 mx-2" alt={` Logo`} /> */}
            <div className="text-black text-xl font-bold">{user.type}</div>
          </div>
          <div className="flex flex-col justify-start items-center mx-6">
            {ITEM.map((item, idx)=> (
              item.type.includes(user.type) && (
                <Link
                key={idx}
                href={item.link}
                className="no-underline p-0 w-full"
            >
                <div
                onClick={() => setExpand(false)}
                className={`w-full flex [&>*]:text-tm-purple/90 font-semibold text-base items-center justify-start py-1 pl-[10%] ${
                    pathName.endsWith(item.link)
                    ? "bg-gray-300 rounded-lg"
                    : "[&>*]:hover:text-tm-purple/60"
                }`}
                >
                {/* {tab.icon} */}
                <p className="text-xl m-0">{item.name}</p>
                </div>
            </Link>
              )
            ))}
        </div>
        <Link href={"profile"}className='flex  h-fit'>

            Profile
        </Link>
        {/* <Link href="/">LOG OUT</Link> */}
    </div>
    </div>
    </>
  )
}

export default Navigation
