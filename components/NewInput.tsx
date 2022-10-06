import type { MutableRefObject } from "react";

export default function NewInput(props: { placeholder: string, type: string, ref: MutableRefObject<HTMLInputElement> }) {
  const { placeholder, type, ref } = props;
  return (
    <input required type={type} ref={ref} className="rounded-sm transition-colors outline-none bg-slate-800 hover:bg-slate-600 my-2 p-4 border-b-2 border-b-slate-500 w-full focus:border-b-white focus:bg-slate-600 invalid:border-b-red-600" placeholder={placeholder} />
  )
}