import Image from "next/image";

export default function Profile() {
  return (
    <div className="hidden md:block m-4"><Image src='/profile.png' alt='user profile' className="rounded-full" width={50} height={50} /></div>
  )
}