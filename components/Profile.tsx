import Image from "next/image";

export default function Profile() {
  return (
    <div className="hidden md:block relative w-10 h-10 m-4"><Image src='/profile.png' alt='user profile' className="rounded-full" layout="fill" objectFit="contain" /></div>
  )
}