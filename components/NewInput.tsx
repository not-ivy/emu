import type { MutableRefObject } from "react";

export default function NewInput(props: { placeholder: string, type: string, ref: MutableRefObject<HTMLInputElement> }) {
  const { placeholder, type, ref } = props;
  return (
    <input required type={type} ref={ref} className="rounded-sm transition-colors outline-none bg-hr-b-med hover:bg-hr-b-low my-2 p-4 border-b-2 border-b-hr-b-med w-full focus:border-b-hr-b-high focus:bg-hr-b-low invalid:border-b-red-600" placeholder={placeholder} />
  )
}