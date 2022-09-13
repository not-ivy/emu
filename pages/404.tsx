import Link from 'next/link';
import Icon from "../components/Icon";

export default function Error404() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Icon className="w-16 stroke-purple-200 pr-8" />
      <p className="border-l border-purple-200 text-purple-200 pl-8">
        <span className="font-bold text-lg">404</span> <br />
        That page could not be found. <br />
        <Link href='/'><span className='text-purple-300 cursor-pointer text-right text-xs'>Go Home</span></Link>
      </p>
    </div>
  )
}