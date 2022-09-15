import Icon from "../components/Icon";
import { HiOutlineSearch, HiHome, HiChatAlt, HiUser, HiDotsHorizontal } from 'react-icons/hi';
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4 md:px-20 dark:text-purple-200 text-slate-800 grid grid-cols-7 grid-flow-row gap-x-4 md:gap-x-10 gap-y-4 md:gap-y-10">
      <div className="col-span-7 flex justify-between items-center md:items-end">
        <span className="flex items-center">
          <Icon className="stroke-purple-200 h-10 m-4" />
          <span className="text-3xl font-bold hidden md:block">Puroto</span>
        </span>
        <div className="bg-zinc-600 flex flex-row rounded-lg items-center h-3/4 p-4">
          <HiOutlineSearch className="w-6 h-6 mr-0 md:mr-4" />
          <input className="hidden md:block bg-zinc-600 dark:text-purple-200 dark:caret-purple-200 text-slate-800 outline-none" placeholder="Search"></input>
        </div>
      </div>
      <div className="col-span-2 flex flex-col items-start border-purple-200 border-r md:border-none">
        <div className="hidden md:block m-4"><Image src='/profile.png' alt='user profile' className="rounded-md" width={150} height={150} /></div>
        <div className="dark:text-purple-900 text-slate-600 font-bold text-2xl flex flex-col items-end">
          <button className="dark:text-purple-200 text-slate-800 flex items-center"><HiHome className="w-10 h-10 m-2 md:w-8 md:h-8" /><span className="hidden md:block">Home</span></button>
          <button className="flex items-center"><HiChatAlt className="w-10 h-10 m-2 md:w-8 md:h-8"/><span className="hidden md:block">Messages</span></button>
          <button className="flex items-center"><HiUser className="w-10 h-10 m-2 md:w-8 md:h-8" /><span className="hidden md:block">Profile</span></button>
          <button className="flex items-center"><HiDotsHorizontal className="w-10 h-10 m-2 md:w-8 md:h-8" /><span className="hidden md:block">More</span></button>
        </div>
      </div>
      <div className="grid grid-flow-row grid-cols-1 gap-y-8 h-screen col-span-5 md:col-span-3  ">
        <div className="bg-zinc-600 rounded-md" />
        <div className="bg-zinc-600 rounded-md" />
      </div>
      <div className="col-span-2 bg-zinc-600 rounded-md max-h-min p-4 hidden md:block">
        <h3 className="text-xl font-semibold mb-10">Latest News</h3>
        <div className="flex flex-col">
        <div className="grid grid-cols-4 h-20">
          <div className="hidden md:block bg-zinc-500 rounded-md col-span-1 mr-4"></div>
          <div className="col-span-3 flex flex-col justify-between">
            <div className="h-7 rounded-lg bg-zinc-500 w-full"></div>
            <div className="h-4 rounded-lg bg-zinc-500 w-3/4"></div>
            <div className="h-4 rounded-lg bg-zinc-500 w-1/3"></div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}