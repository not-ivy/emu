import { useRouter } from "next/router";
import Image from "next/image";
import { HiLocationMarker, HiClock, HiLink, HiIdentification } from "react-icons/hi";
import TopBar from "../../components/TopBar";
import { useEffect, useState } from "react";
import Link from "next/link";
import { InterfaceUser } from "../../types/db";
import BlankSlate from "../../components/Blankslate";
import { DateTime } from "luxon";

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
    const updateTime = () => { setTime(DateTime.now().setZone(user.timezone).setLocale(navigator.language).toLocaleString(DateTime.DATETIME_SHORT)) };
    updateTime();
    setInterval(updateTime, 60000);
  }, [user])

  if (!user) { return <BlankSlate title="Loading" body="This should not take long..." /> }
  if (user instanceof Error) { return <BlankSlate title="Error" body={user.toString()} /> }

  return (
    <div className="p-4 text-purple-200">
      <TopBar />
      <div className="flex justify-around pb-4 border-b border-purple-200 mx-auto flex-col items-start md:flex-row md:items-end">
        <div className="font-semibold text-3xl w-full text-center md:w-min md:mx-4">
          {user.username}
        </div>
        <div className="flex justify-around flex-col items-start md:flex-row md:items-center">
          <div className="flex items-center md:mx-4">
            <HiIdentification aria-label="pronouns" className="h-6 w-6 m-2" />
            {user.pronouns}
          </div>
          <div className="flex items-center md:mx-4">
            <HiLocationMarker aria-label="location" className="h-6 w-6 m-2" />
            {user.location}
          </div>
          <div className="flex items-center md:mx-4">
            <HiClock aria-label="timezone" className="h-6 w-6 m-2" />
            UTC {DateTime.now().setZone(user.timezone).offset / 60}:00
            <span className="text-slate-500 text-xs ml-2">({time})</span>
          </div>
          <div className="flex items-center md:mx-4">
            <HiLink aria-label="website" className="h-6 w-6 m-2" />
            <Link className="cursor-pointer" href={user.website} target="_blank">{user.website}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}