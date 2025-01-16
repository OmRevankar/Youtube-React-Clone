import React, { useContext } from 'react'
import menu_icon from '../assets/assets/menu.png'
import logo from '../assets/assets/logo.png'
import search_icon from '../assets/assets/search.png'
import upload_icon from '../assets/assets/upload.png'
import more_icon from '../assets/assets/more.png'
import notification_icon from '../assets/assets/notification.png'
import profile_pic from '../assets/assets/user_profile.jpg'
import { SidebarContext } from '../App'
import { NavLink } from 'react-router-dom'
// import {SidebarContext} from '../App'

const Navbar = () => {

  const {sidebar,setSidebar} = useContext(SidebarContext)

  return (
    <nav className='flex flex-row justify-between h-[55px] items-center shadow-lg sticky top-0 z-10 bg-white'>

        <div className='flex flex-row items-center gap-5 sample:ml-5 ml-2'>
            <img className='hidden sample:block w-5 h-5' src={menu_icon} onClick={()=>setSidebar(prev=>prev===true?false:true)} alt="" />
            <NavLink to={`/`}><img className='h-7' src={logo} alt="" /></NavLink>
        </div>

        <div className='supersm:flex supersm:items-center supersm:relative invisible supersm:visible'>
            <input className='rounded-full p-1.5  sample:w-[500px] border-2 border-gray-400 text-sm supersm:outline-none' type="text" placeholder=' Search'/>
            <img className='absolute right-4 w-4 h-4' src={search_icon} alt="" />
        </div>

        <div className='flex flex-row items-center gap-6 sample:mr-5 mr-2'>
            <img className='hidden sample:block w-6 h-6' src={upload_icon} alt="" />
            <img className='hidden sample:block w-6 h-6' src={more_icon} alt="" />
            <img className='hidden sample:block w-6 h-6' src={notification_icon} alt="" />
            <img className='w-7 h-7 sample:w-8 sample:h-8 rounded-full' src={profile_pic} alt="" />
        </div>

    </nav>
  )
}

export default Navbar
