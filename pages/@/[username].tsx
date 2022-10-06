import { useRouter } from "next/router";
import Image from "next/image";
import { HiLocationMarker, HiClock, HiLink, HiIdentification } from "react-icons/hi";
import TopBar from "../../components/TopBar";
import { useEffect, useState } from "react";
import Link from "next/link";
import { InterfaceUser } from "../../types/db";
import BlankSlate from "../../components/Blankslate";

export default function User() {
  const [time, setTime] = useState('');
  const [user, setUser] = useState<InterfaceUser | undefined | Error>(undefined);
  const router = useRouter();
  const { username } = router.query;

  useEffect(() => {
    if (!username) return;
    fetch(`/api/getUser?username=${username}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((error) => setUser(error))
  }, [username])

  useEffect(() => {
    if (!user || user instanceof Error) return;
    setInterval(() => { setTime(new Date().toLocaleString(navigator.language, { timeZone: user.timezone, timeStyle: 'short' })) }, 1000);
  }, [user])

  if (!user) { return <BlankSlate title="Loading" body="This should not take long..." /> }
  if (user instanceof Error) { return <BlankSlate title="Error" body={user.toString()} /> }

  return (
    <div className="p-8 text-purple-200">
      <TopBar />
      <div className="flex justify-around items-end pb-4 border-b border-purple-200 max-w-screen-lg mx-auto">
        <div className="flex items-end">
          {/* <Image src="/profile.png" alt={`${username}'s profile`} width={128} height={128} className="rounded-md" /> */}
          <span className="font-semibold text-3xl mx-8">{user.username}</span>
        </div>
        <div className="flex items-center justify-around">
          <div className="flex items-center mx-4"><HiIdentification aria-label="pronouns" className="h-6 w-6 m-2" />{user.pronouns}</div>
          <div className="flex items-center mx-4"><HiLocationMarker aria-label="location" className="h-6 w-6 m-2" />{user.location}</div>
          <div className="flex items-center mx-4"><HiClock aria-label="timezone" className="h-6 w-6 m-2" /><span className="text-slate-500 text-sm ml-2">{time}</span></div>
          <div className="flex items-center mx-4 cursor-pointer"><HiLink aria-label="website" className="h-6 w-6 m-2" /><Link href={user.website} target="_blank">{user.website}</Link></div>
        </div>
      </div>
    </div>
  )
}