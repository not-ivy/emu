import { HiOutlineSearch } from "react-icons/hi";

export default function Search() {
  return (
    <div className="bg-slate-600 flex flex-row rounded-lg items-center h-3/4 p-4">
      <HiOutlineSearch className="w-6 h-6 mr-0 md:mr-4" />
      <input className="hidden md:block bg-slate-600 text-purple-200 caret-purple-200 outline-none" placeholder="Search"></input>
    </div>
  )
}