import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import Tabs from "../components/Tabs";
import TopBar from "../components/TopBar";

type Tabs = 'home' | 'messages' | 'profile' | 'more';

export default function Home() {
  return (
    <div className="p-4 md:px-20 text-hr-f-high grid grid-cols-7 grid-flow-row gap-x-4 md:gap-x-10 gap-y-4 md:gap-y-10">
      <TopBar />
      <nav className="relative col-span-2 flex flex-col items-end border-hr-b-med border-r md:border-none">
        <div className="sticky top-4">
          <Tabs />
          <p className="text-hr-f-low text-xs text-right hidden md:block">
            Design by ivy on {new Intl.DateTimeFormat().format(new Date(1663219109000))} <br />
            This website is not affliated with the actual puroto organization <br />
            I just made this for fun (for now)
          </p>
        </div>
      </nav>
      <main className="col-span-5 md:col-span-3">
        <div className="grid grid-flow-row grid-cols-1 gap-y-8 h-screen snap-y overflow-y-scroll">
          <div className="bg-hr-b-med rounded-md" />
          <div className="bg-hr-b-med rounded-md" />
          <div className="bg-hr-b-med rounded-md" />
        </div>
        <div className="flex justify-around items-center mt-4 mx-auto">
          <HiArrowLeft />
          <input className="bg-hr-b-med text-hr-f-high caret-hr-f-high outline-none rounded-md p-4 text-center placeholder:text-hr-f-med" placeholder='1'></input>
          <HiArrowRight />
        </div>
      </main>
      <div className="col-span-2 bg-hr-b-med rounded-md h-1/4 p-4 hidden md:block">
        <h3 className="text-xl font-semibold mb-10">Latest News</h3>
        <div className="flex flex-col">
          <div className="grid grid-cols-4 h-20">
            <div className="hidden md:block bg-hr-b-high rounded-md col-span-1 mr-4"></div>
            <div className="col-span-3 flex flex-col justify-between">
              <div className="h-7 rounded-lg bg-hr-b-high w-full"></div>
              <div className="h-4 rounded-lg bg-hr-b-high w-3/4"></div>
              <div className="h-4 rounded-lg bg-hr-b-high w-1/3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
