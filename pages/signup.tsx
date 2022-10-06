import { useRef } from "react";
import Icon from "../components/Icon";
import NewInput from "../components/NewInput";

export default function SignUp() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const submitReq = () => {
    //captcha stuff and send req to server
  }

  return (
    <div className="max-w-screen-md mx-auto mt-8 px-16 py-4 border-4 border-slate-500 rounded-md text-purple-200">
      <div className="flex justify-center items-center"><Icon className="w-8 stroke-purple-200 m-4" /><div className="font-semibold text-2xl my-4 text-center">Sign Up</div></div>
      <form className="w-full">
        <NewInput placeholder="Username" type="text" ref={usernameRef} />
        <NewInput placeholder="Password" type="password" ref={passwordRef} />
      </form>
      <button className="transition-colors w-full bg-violet-600 rounded-md p-2 my-8 focus:bg-green-500 focus:text-slate-700 font-semibold text-lg">Submit</button>
    </div>
  )
}