import React, { useContext } from 'react'
import home from '../assets/assets/home.png'
import game_icon from '../assets/assets/game_icon.png'
import automobiles from '../assets/assets/automobiles.png'
import sports from '../assets/assets/sports.png'
import entertainment from '../assets/assets/entertainment.png'
import tech from '../assets/assets/tech.png'
import music from '../assets/assets/music.png'
import blogs from '../assets/assets/blogs.png'
import news from '../assets/assets/news.png'
import jack from '../assets/assets/jack.png'
import simon from '../assets/assets/simon.png'
import tom from '../assets/assets/tom.png'
import megan from '../assets/assets/megan.png'
import cameron from '../assets/assets/cameron.png'
import { SidebarContext } from '../App'

const Sidebar = (props) => {

    const {sidebar , setSidebar} = useContext(SidebarContext);

    return (
        <div className={sidebar ? 'hidden sample:block shadow-lg w-[235px] pl-8  pt-5 text-base h-[640px] fixed left-0' : 'hidden sample:block shadow-lg w-[90px] pl-8  pt-5 text-base h-[640px] fixed left-0'}>
            <div className='flex flex-col gap-2.5 mb-4'>
                <div className='flex flex-row gap-4 cursor-pointer' onClick={ ()=> props.setCategory(0)}>
                    <div className='flex flex-col items-center gap-1.5'>
                        <img className='w-5 h-5' src={home} alt="" />
                        <div className={props.category==0 ? 'h-[3px] w-[20px] bg-red-500 self-center rounded-full' : ""}></div>
                    </div>
                    <p className={sidebar ? props.category==0 ? 'text-red-500 font-bold' : "" : 'hidden' }>Home</p>
                </div>

                <div className='flex flex-row gap-4 cursor-pointer' onClick={ ()=> props.setCategory(20)}>
                    <div className='flex flex-col items-center gap-1.5'>
                        <img className='w-5 h-5' src={game_icon} alt="" />
                        <div className={props.category==20 ? 'h-[3px] w-[20px] bg-red-500 self-center rounded-full' : ""}></div>
                    </div>
                    <p className={sidebar ? props.category==20 ? 'text-red-500 font-bold' : "" : 'hidden' }>Game</p>
                </div>

                <div className='flex flex-row gap-4 cursor-pointer' onClick={ ()=> props.setCategory(2)}>
                    <div className='flex flex-col items-center gap-1.5'>
                        <img className='w-5 h-5' src={automobiles} alt="" />
                        <div className={props.category==2 ? 'h-[3px] w-[20px] bg-red-500 self-center rounded-full' : ""}></div>
                    </div>
                    <p className={sidebar ? props.category==2 ? 'text-red-500 font-bold'  : "" : 'hidden' }>Automobiles</p>
                </div>

                <div className='flex flex-row gap-4 cursor-pointer' onClick={ ()=> props.setCategory(17)}>
                    <div className='flex flex-col items-center gap-1.5'>
                        <img className='w-5 h-5' src={sports} alt="" />
                        <div className={props.category==17 ? 'h-[3px] w-[20px] bg-red-500 self-center rounded-full' : ""}></div>
                    </div>
                    <p className={sidebar ? props.category==17 ? 'text-red-500 font-bold' : "" : 'hidden' }>Sports</p>
                </div>

                <div className='flex flex-row gap-4 cursor-pointer' onClick={ ()=> props.setCategory(24)}>
                    <div className='flex flex-col items-center gap-1.5'>
                        <img className='w-5 h-5' src={entertainment} alt="" />
                        <div className={props.category==24 ? 'h-[3px] w-[20px] bg-red-500 self-center rounded-full' : ""}></div>
                    </div>
                    <p className={sidebar ? props.category==24 ? 'text-red-500 font-bold' : "" : 'hidden' }>Entertainment</p>
                </div>

                <div className='flex flex-row gap-4 cursor-pointer' onClick={ ()=> props.setCategory(28)}>
                    <div className='flex flex-col items-center gap-1.5'>
                        <img className='w-5 h-5' src={tech} alt="" />
                        <div className={props.category==28 ? 'h-[3px] w-[20px] bg-red-500 self-center rounded-full' : ""}></div>
                    </div>
                    <p className={sidebar ? props.category==28 ? 'text-red-500 font-bold' : "" : 'hidden' }>Technology</p>
                </div>

                <div className='flex flex-row gap-4 cursor-pointer' onClick={ ()=> props.setCategory(10)}>
                    <div className='flex flex-col items-center gap-1.5'>
                        <img className='w-5 h-5' src={music} alt="" />
                        <div className={props.category==10 ? 'h-[3px] w-[20px] bg-red-500 self-center rounded-full' : ""}></div>
                    </div>
                    <p className={sidebar ? props.category==10 ? 'text-red-500 font-bold' : "" : 'hidden' }>Music</p>
                </div>

                <div className='flex flex-row gap-4 cursor-pointer' onClick={ ()=> props.setCategory(22)}>
                    <div className='flex flex-col items-center gap-1.5'>
                        <img className='w-5 h-5' src={blogs} alt="" />
                        <div className={props.category==22 ? 'h-[3px] w-[20px] bg-red-500 self-center rounded-full' : ""}></div>
                    </div>
                    <p className={sidebar ? props.category==22 ? 'text-red-500 font-bold' : "" : 'hidden' }>Blogs</p>
                </div>

                <div className='flex flex-row gap-4 cursor-pointer' onClick={ ()=> props.setCategory(25)}>
                    <div className='flex flex-col items-center gap-1.5'>
                        <img className='w-5 h-5' src={news} alt="" />
                        <div className={props.category==25 ? 'h-[3px] w-[20px] bg-red-500 self-center rounded-full' : ""}></div>
                    </div>
                    <p className={sidebar ? props.category==25 ? 'text-red-500 font-bold' : "" : 'hidden' }>News</p>
                </div>
            </div>

            <hr className='mr-9 sample:mr-7 bg-gray-700'/>

            <div className='flex flex-col gap-3 mt-4'>
                <h3 className={sidebar ? 'text-sm font-semibold text-gray-600' : 'hidden'}>SUBSCRIBED</h3>

                <div className='flex flex-row gap-3 mt-2 cursor-pointer'>
                    <img className='w-6 h-6 rounded-full' src={jack} alt="" />
                    <p className={sidebar ? "" : "hidden"}>T Series</p>
                </div>
                <div className='flex flex-row gap-3 cursor-pointer'>
                    <img className='w-6 h-6 rounded-full' src={simon} alt="" />
                    <p className={sidebar ? "" : "hidden"}>Mr. Bean</p>
                </div>
                <div className='flex flex-row gap-3 cursor-pointer'>
                    <img className='w-6 h-6 rounded-full' src={tom} alt="" />
                    <p className={sidebar ? "" : "hidden"}>UR Cristiano</p>
                </div>
                <div className='flex flex-row gap-3 cursor-pointer'>
                    <img className='w-6 h-6 rounded-full' src={megan} alt="" />
                    <p className={sidebar ? "" : "hidden"}>Cocomelon</p>
                </div>
                <div className='flex flex-row gap-3 cursor-pointer'>
                    <img className='w-6 h-6 rounded-full' src={cameron} alt="" />
                    <p className={sidebar ? "" : "hidden"}>Badshah</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
