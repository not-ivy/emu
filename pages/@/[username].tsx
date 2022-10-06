import { useRouter } from "next/router";
import Image from "next/image";
import { HiLocationMarker, HiClock, HiLink } from "react-icons/hi";
import TopBar from "../../components/TopBar";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function User() {
  const [time, setTime] = useState('');
  const router = useRouter();
  const { username } = router.query;

  useEffect(() => {
    setInterval(() => { setTime(new Date().toLocaleString(navigator.language, { timeZone: 'America/Los_Angeles', timeStyle: 'long' })) }, 1000)
  })

  return (
    <div className="p-8 text-purple-200">
      <TopBar />
      <div className="flex justify-around items-end pb-4 border-b border-purple-200">
        <div className="flex items-end">
          {/* <Image src="/profile.png" alt={`${username}'s profile`} width={128} height={128} className="rounded-md" /> */}
          <span className="font-semibold text-3xl mx-8">{username}</span>
        </div>
        <div className="flex items-center justify-around">
          <div className="flex items-center mx-4"><HiLocationMarker className="h-5 w-5 m-2" />Los Angeles, United States</div>
          <div className="flex items-center mx-4"><HiClock className="h-5 w-5 m-2" />UTC -07:00<span className="text-slate-500 text-sm ml-2 font-mono">{time}</span></div>
          <div className="flex items-center mx-4 cursor-pointer"><HiLink className="h-5 w-5 m-2" /><Link href="#" target="_blank">about:blank</Link></div>
        </div>
      </div>
    </div>
  )
}