import Icon from "../components/Icon";
import { HiOutlineSearch, HiHome, HiOutlineChatAlt2, HiOutlineUser, HiOutlineDotsHorizontal, HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import Image from "next/image";
import Head from 'next/head';
import Link from 'next/link';
import Tabs from "../components/Tabs";
import { useState } from "react";

type Tabs = 'home' | 'messages' | 'profile' | 'more';

export default function Home() {
  const [selectedTab, setSelectedTab] = useState<Tabs>('home');
  return (
    <>
      <Head>
        <title>Puroto</title>
      </Head>
      <div className="p-4 md:px-20 text-purple-200 grid grid-cols-7 grid-flow-row gap-x-4 md:gap-x-10 gap-y-4 md:gap-y-10">
        <div className="col-span-7 flex justify-between items-center">
          <Link href='/'>
            <span className="flex items-center cursor-pointer">
              <Icon className="stroke-violet-700 h-10 m-4" />
              <span className="text-3xl font-bold hidden md:block">Puroto</span>
            </span>
          </Link>
          <div className="bg-slate-600 flex flex-row rounded-lg items-center h-3/4 p-4">
            <HiOutlineSearch className="w-6 h-6 mr-0 md:mr-4" />
            <input className="hidden md:block bg-slate-600 text-purple-200 caret-purple-200 outline-none" placeholder="Search"></input>
          </div>
        </div>
        <nav className="relative col-span-2 flex flex-col items-end border-purple-200 border-r md:border-none">
          <div className="sticky top-4">
            <div className="hidden md:block"><Image src='/profile.png' alt='user profile' className="rounded-md" width={150} height={150} /></div>
            <Tabs selected={selectedTab} setSelectedTab={setSelectedTab} />
            <p className="text-slate-500 text-xs text-right">
              Design by ivy on {new Intl.DateTimeFormat().format(new Date(1663219109000))} <br />
              This website is not affliated with the actual puroto organization <br />
              I just made this for fun (for now)
            </p>
          </div>
        </nav>
        <main className="col-span-5 md:col-span-3">
          <div className="flex justify-around items-center mb-4 mx-auto">
            <HiArrowLeft />
            <input className="bg-slate-600 text-purple-200 caret-purple-200 outline-none rounded-md p-4 text-center" value='1'></input>
            <HiArrowRight />
          </div>
          <div className="grid grid-flow-row grid-cols-1 gap-y-8 h-screen snap-y overflow-y-scroll">
            <div className="bg-slate-600 rounded-md" />
            <div className="bg-slate-600 rounded-md" />
            <div className="bg-slate-600 rounded-md" />
          </div>
        </main>
        <div className="col-span-2 bg-slate-600 rounded-md max-h-min p-4 hidden md:block">
          <h3 className="text-xl font-semibold mb-10">Latest News</h3>
          <div className="flex flex-col">
            <div className="grid grid-cols-4 h-20">
              <div className="hidden md:block bg-slate-500 rounded-md col-span-1 mr-4"></div>
              <div className="col-span-3 flex flex-col justify-between">
                <div className="h-7 rounded-lg bg-slate-500 w-full"></div>
                <div className="h-4 rounded-lg bg-slate-500 w-3/4"></div>
                <div className="h-4 rounded-lg bg-slate-500 w-1/3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
