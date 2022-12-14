import Image from "next/image";
import { HiChevronDown } from 'react-icons/hi';

export default function Profile() {
  return (
    <>
      <div className="hidden md:flex relative w-12 h-12 m-4">
        <Image src='/profile.png' alt='user profile' className="rounded-md" layout="fill" objectFit="contain" />
      </div>
      <HiChevronDown className="hidden md:flex stroke-hr-f-med stroke-2 hover:stroke-hr-f-high cursor-pointer" />
    </>
  )
}