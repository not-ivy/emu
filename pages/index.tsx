import Link from 'next/link';
import { FaDiscord, FaGithub, FaTwitter } from 'react-icons/fa';

import Icon from '../components/Icon'

export default function Index() {
  return (
    <div className='p-4 md:px-20 text-hr-f-high'>
      <div className='flex justify-between items-center'>
        <span className="flex items-center">
          <Icon className="stroke-hr-b-inv h-10 m-4" />
          <span className="text-3xl font-bold">Puroto</span>
        </span>
        <div className="flex justify-around flex-col lg:flex-row">
          <button className="text-xl font-bold bg-hr-b-low px-7 py-3 m-1 rounded-md">Support Us</button>
          <Link href='/signup'><button className="text-xl font-bold bg-hr-b-med px-7 py-3 m-1 rounded-md">Sign Up</button></Link>
          <Link href='/home'><button className="text-xl font-bold bg-hr-b-high px-7 py-3 m-1 rounded-md">Home</button></Link>
        </div>
      </div>
      <div className="p-20 md:p-32" />
      <div className="max-w-screen-sm fade-in">
        <p className="font-extrabold text-5xl">We are building the fluffiest social network.</p>
        <div className="p-4" />
        <div className="flex justify-between font-semibold text-xl flex-col md:flex-row ">
          <a className="flex items-center text-hr-f-high" target="_blank" href="#"><div className="m-2"><FaGithub size='2rem' /></div> Github</a>
          <a className="flex items-center text-[#1c9cf0]" target="_blank" href="#"><div className="m-2"><FaTwitter size='2rem' /></div> Twitter</a>
          <a className="flex items-center text-[#5865F2]" target="_blank" href="#"><div className="m-2"><FaDiscord size='2rem' /></div> Discord</a>
        </div>
      </div>
    </div>
  )
}
