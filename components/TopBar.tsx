import Link from "next/link";
import Icon from "./Icon";
import Profile from "./Profile";
import Search from "./Search";

export default function TopBar() {
  return (
    <div className="col-span-7 flex justify-between items-center text-hr-f-high">
      <Link href='/'>
        <span className="flex items-center cursor-pointer">
          <Icon className="stroke-hr-f-med h-10 m-4" />
          <span className="text-3xl font-bold hidden md:block">Puroto</span>
        </span>
      </Link>
      <div className="flex items-center justify-between">
        <Search />
        <Profile />
      </div>
    </div>
  )
}