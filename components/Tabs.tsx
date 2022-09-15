import { Dispatch, SetStateAction } from 'react';
import { HiHome, HiChatAlt2, HiOutlineChatAlt2, HiOutlineUser, HiOutlineDotsHorizontal, HiOutlineHome, HiUser } from 'react-icons/hi';

type Tabs = 'home' | 'messages' | 'profile' | 'more';

export default function Tabs(props: { selected: Tabs, setSelectedTab: Dispatch<SetStateAction<Tabs>> }) {
  const { selected, setSelectedTab } = props;

  return (
    <div className="text-purple-400 font-bold text-2xl flex flex-col items-end">
      <button className={`${selected === 'home' ? 'text-purple-200' : ''} flex items-center`} onClick={() => {setSelectedTab('home')}}>
        {selected === 'home' ? <HiHome className="w-10 h-10 m-2 md:w-8 md:h-8" /> : <HiOutlineHome className='w-10 h-10 m-2 md:w-8 md:h-8' />}
        <span className="hidden md:block">Home</span>
      </button>
      <button className={`${selected === 'messages' ? 'text-purple-200' : ''} flex items-center`} onClick={() => {setSelectedTab('messages')}}>
        {selected === 'messages' ? <HiChatAlt2 className="w-10 h-10 m-2 md:w-8 md:h-8" /> : <HiOutlineChatAlt2 className="w-10 h-10 m-2 md:w-8 md:h-8" />}
        <span className="hidden md:block">Messages</span>
      </button>
      <button className={`${selected === 'profile' ? 'text-purple-200' : ''} flex items-center`} onClick={() => {setSelectedTab('profile')}}>
        {selected === 'profile' ? <HiUser className="w-10 h-10 m-2 md:w-8 md:h-8" /> : <HiOutlineUser className="w-10 h-10 m-2 md:w-8 md:h-8" />}
        <span className="hidden md:block">Profile</span>
      </button>
      <button className={`${selected === 'more' ? 'text-purple-200' : ''} flex items-center`} onClick={() => {setSelectedTab('more')}}>
        <HiOutlineDotsHorizontal className="w-10 h-10 m-2 md:w-8 md:h-8" />
        <span className="hidden md:block">More</span></button>
    </div>
  )
}