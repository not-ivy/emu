import { useEffect, useRef } from "react";
import { HiOutlineSearch, HiX } from "react-icons/hi";
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
      <div className="hidden md:flex bg-hr-b-med items-center p-2 border-hr-b-high border-4 rounded-md cursor-pointer" onClick={() => { setVisibility(true) }}>
        <span className="p-2 w-8 h-8 mx-2 bg-hr-b-low rounded-md"><BiCommand className="text-hr-f-high" /></span>
        <span className="p-2 w-8 h-8 mx-2 bg-hr-b-low rounded-md flex items-center justify-center text-hr-f-high">K</span>
      </div>
      <div className="block md:hidden bg-hr-b-med p-4 rounded-md cursor-pointer" onClick={() => { setVisibility(true) }}><HiOutlineSearch className="w-6 h-6 mr-0 md:mr-4 text-hr-f-high" /></div>
      <div className={`${visibility ? 'block' : 'hidden'} w-screen h-screen absolute top-0 left-0 backdrop-brightness-50 backdrop-blur-md bg-opacity-0 z-50`}>
        <div className="absolute left-2/4 top-1/4 -translate-x-2/4 -translate-y-2/4 bg-hr-b-med flex flex-row rounded-lg items-center h-10 p-8">
          <HiOutlineSearch className="w-6 h-6 mr-0 md:mr-4 text-hr-f-high hidden md:block" />
          <input ref={inputRef} className="bg-hr-b-med text-hr-f-high caret-hr-f-med outline-none placeholder:text-hr-f-low" placeholder="Search"></input>
          <HiX className="cursor-pointer text-hr-f-high w-10 h-10 p-2" onClick={() => {inputRef.current.value ? inputRef.current.value = '' : setVisibility(false)}} />
        </div>
      </div>
    </>
  )
}