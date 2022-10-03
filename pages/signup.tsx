export default function SignUp() {
  return (
    <div className="max-w-screen-md mx-auto m-4 px-16 py-4 border-4 border-slate-500 rounded-md text-purple-200">
      <div className="w-full font-semibold text-2xl mb-4">Sign Up</div>
      <form className="w-full">
        <label className="block">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500">
            Username
          </span>
          <input aria-placeholder="username" className="rounded-md transition-colors text-center p-2 bg-slate-600 w-full hover:bg-slate-500 focus:bg-slate-500 outline-none"></input>
        </label>
        <label className="block mt-4">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500">
            Password
          </span>
          <input aria-placeholder="password" type="password" className="rounded-md transition-colors text-center p-2 bg-slate-600 w-full hover:bg-slate-500 focus:bg-slate-500 outline-none"></input>
        </label>
      </form>
      <button className="w-full bg-violet-600 rounded-md p-2 my-8">Submit</button>
    </div>
  )
}