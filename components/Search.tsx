import { useEffect, useRef } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { BiCommand } from 'react-icons/bi';
import { useSearch } from "../hooks/search";


export default function Search() {
  const visibility = useSearch((state) => state.visibility);
  const setVisibility = (visibility: boolean) => { useSearch.setState({ visibility }) }
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
    const openSearch = (event: KeyboardEvent) => {
      if (event.key === "k" && event.metaKey) {
        event.preventDefault();
        setVisibility(true);
      }
    }
    document.addEventListener('keydown', openSearch);
    const exitSearch = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setVisibility(false);
      }
    }
    document.addEventListener('keydown', exitSearch);
    return () => { document.removeEventListener('keydown', exitSearch); document.removeEventListener('keydown', openSearch) };
  }, [visibility])

  return (
    <>
      <div className="hidden md:flex bg-slate-700 items-center p-2 border-slate-600 border-4 rounded-md cursor-pointer" onClick={() => { setVisibility(true) }}>
        <span className="p-2 w-8 h-8 mx-2 bg-slate-600 rounded-md"><BiCommand /></span>
        <span className="p-2 w-8 h-8 mx-2 bg-slate-600 rounded-md flex items-center justify-center">K</span>
      </div>
      <div className="block md:hidden bg-slate-700 p-4 rounded-md cursor-pointer" onClick={() => { setVisibility(true) }}><HiOutlineSearch className="w-6 h-6 mr-0 md:mr-4 text-purple-200" /></div>
      <div className={`${visibility ? 'block' : 'hidden'} w-screen h-screen absolute top-0 left-0 backdrop-brightness-50 backdrop-blur-md bg-opacity-0 z-50`}>
        <div className="absolute left-2/4 top-1/4 -translate-x-2/4 -translate-y-2/4 bg-slate-600 flex flex-row rounded-lg items-center h-10 p-8">
          <HiOutlineSearch className="w-6 h-6 mr-0 md:mr-4 text-purple-200 hidden md:block" />
          <input ref={inputRef} className="bg-slate-600 text-purple-200 caret-purple-200 outline-none" placeholder="Search"></input>
        </div>
      </div>
    </>
  )
}