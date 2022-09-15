import { Dispatch, SetStateAction, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";

export default function Search(props: { visibility: boolean, setVisibility: Dispatch<SetStateAction<boolean>> }) {
  const { visibility, setVisibility } = props;

  useEffect(() => {
    const exitSearch = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setVisibility(false);
      }
    }
    document.addEventListener('keydown', exitSearch);
    return () => { document.removeEventListener('keydown', exitSearch) };
  }, [setVisibility])

  return (
    <div className={`${visibility ? 'block' : 'hidden'} w-screen h-screen absolute top-0 left-0 backdrop-brightness-50 backdrop-blur-md bg-opacity-0 z-50`}>
      <div className="absolute left-2/4 top-1/4 -translate-x-2/4 -translate-y-2/4 bg-slate-600 flex flex-row rounded-lg items-center h-10 p-8">
        <HiOutlineSearch className="w-6 h-6 mr-0 md:mr-4 text-purple-200" />
        <input className="hidden md:block bg-slate-600 text-purple-200 caret-purple-200 outline-none" placeholder="Search"></input>
      </div>
    </div>
  )
}