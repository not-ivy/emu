import Head from 'next/head';
import { FaDiscord, FaGithub, FaTwitter } from 'react-icons/fa';

import Icon from '../components/Icon'

export default function Index() {
  return (
    <>
      <Head>
        <title>Puroto</title>
      </Head>
      <div className='p-4 md:px-20 dark:text-purple-200 text-slate-800'>
        <div className='flex justify-between items-center'>
          <span className="flex items-center">
            <Icon className="stroke-violet-700 h-10 m-4" />
            <span className="text-3xl font-bold">Puroto</span>
          </span>
          <div className="flex justify-around flex-col lg:flex-row">
            <button className="text-xl font-bold bg-fuchsia-600 px-7 py-3 m-1 rounded-md">Support Us</button>
            <button className="text-xl font-bold bg-violet-700 px-7 py-3 m-1 rounded-md">Apply</button>
          </div>
        </div>
        <div className="p-20 md:p-32" />
        <div className="max-w-screen-sm">
          <p className="font-extrabold text-5xl">We are building the fluffiest social network.</p>
          <div className="p-4" />
          <div className="flex justify-between font-semibold text-xl flex-col md:flex-row ">
            <a className="flex items-center text-black dark:text-white" target="_blank" href="#"><div className="m-2"><FaGithub size='2rem' /></div> Github</a>
            <a className="flex items-center text-[#1c9cf0]" target="_blank" href="#"><div className="m-2"><FaTwitter size='2rem' /></div> Twitter</a>
            <a className="flex items-center text-[#5865F2]" target="_blank" href="#"><div className="m-2"><FaDiscord size='2rem' /></div> Discord</a>
          </div>
        </div>
      </div>
    </>
  )
}
