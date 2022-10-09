import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import TopBar from "../components/TopBar";


export default function Settings() {
  return (
    <div className="p-4 text-hr-f-high">
      <TopBar />
      <div className="mx-auto max-w-screen-md">
        <h1 className="text-3xl font-medium">Settings</h1>
        <hr className="border-hr-f-med my-4" />
        <div className="flex flex-col">
          <Link href='/settings/theme'>
            <div className="flex items-center justify-around py-4 hover:bg-hr-b-med cursor-pointer">
              <span className="font-medium text-xl">Theme</span>
              <HiArrowRight />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
