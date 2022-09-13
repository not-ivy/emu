import Icon from "../components/Icon";
import { HiOutlineSearch, HiHome } from 'react-icons/hi';
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4 md:px-20 dark:text-purple-200 text-slate-800 grid grid-cols-3 grid-flow-row">
      <div className="col-span-3 flex justify-between items-center">
        <span className="flex items-center">
          <Icon className="stroke-purple-200 h-10 m-4" />
          <span className="text-3xl font-bold">Puroto</span>
        </span>
        <div className="bg-zinc-600 flex flex-row rounded-lg items-center h-3/4 p-4">
          <HiOutlineSearch className="w-6 h-6 mr-0 md:mr-4" />
          <input className="hidden md:block bg-zinc-600 dark:text-purple-200 dark:caret-purple-200 text-slate-800 outline-none" placeholder="Search"></input>
        </div>
      </div>
      <div className="col-span-1 flex flex-col items-end">
        <Image src='/profile.png' alt='user profile' className="rounded-md" width={100} height={100} />
        <div className="p-5" />
        <div className="dark:text-purple-800 text-slate-600 font-bold text-2xl flex flex-col items-end">
          <button className="dark:text-purple-200 text-slate-800 flex items-center"><HiHome className="m-2" />Home</button>
          <button>Messages</button>
          <button>Profile</button>
          <button>Settings</button>
        </div>
      </div>
      <div className="col-span-1">

      </div>
      <div className="col-span-1">

      </div>
    </div>
  )
}