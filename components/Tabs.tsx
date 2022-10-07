import { HiHome, HiChatAlt2, HiOutlineChatAlt2, HiOutlineUser, HiOutlineDotsHorizontal, HiOutlineHome, HiUser } from 'react-icons/hi';
import { Panels, usePanel } from '../hooks/panel';

export default function Tabs() {
  const selected = usePanel((state) => state.selectedPanel);
  const setSelectedPanel = (selectedPanel: Panels) => { usePanel.setState({ selectedPanel }) }

  return (
    <div className="text-hr-f-med font-bold text-2xl flex flex-col items-end">
      <button aria-label='home' className={`${selected === 'home' ? 'text-hr-f-high' : ''} flex items-center`} onClick={() => {setSelectedPanel('home')}}>
        {selected === 'home' ? <HiHome className="w-10 h-10 m-2 md:w-8 md:h-8" /> : <HiOutlineHome className='w-10 h-10 m-2 md:w-8 md:h-8' />}
        <span className="hidden md:block">Home</span>
      </button>
      <button aria-label='messages' className={`${selected === 'messages' ? 'text-hr-f-high' : ''} flex items-center`} onClick={() => {setSelectedPanel('messages')}}>
        {selected === 'messages' ? <HiChatAlt2 className="w-10 h-10 m-2 md:w-8 md:h-8" /> : <HiOutlineChatAlt2 className="w-10 h-10 m-2 md:w-8 md:h-8" />}
        <span className="hidden md:block">Messages</span>
      </button>
      <button aria-label='profile' className={`${selected === 'profile' ? 'text-hr-f-high' : ''} flex items-center`} onClick={() => {setSelectedPanel('profile')}}>
        {selected === 'profile' ? <HiUser className="w-10 h-10 m-2 md:w-8 md:h-8" /> : <HiOutlineUser className="w-10 h-10 m-2 md:w-8 md:h-8" />}
        <span className="hidden md:block">Profile</span>
      </button>
      <button aria-label='more' className={`${selected === 'more' ? 'text-hr-f-high' : ''} flex items-center`} onClick={() => {setSelectedPanel('more')}}>
        <HiOutlineDotsHorizontal className="w-10 h-10 m-2 md:w-8 md:h-8" />
        <span className="hidden md:block">More</span></button>
    </div>
  )
}