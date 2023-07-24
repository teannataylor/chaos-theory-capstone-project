import React,{useState} from 'react';
import {AiOutlineMenu,AiOutlineClose,AiFillHome,AiFillFolderOpen,AiFillProfile, AiFillSchedule,AiFillContacts,AiFillFire} from 'react-icons/ai';

import { GiWhisk } from "react-icons/gi";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [nav,setNav] = useState(false);

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        <div className='flex items-center'>
            <div onClick={() => setNav(!nav)} className='cursor-pointer'>
            <AiOutlineMenu size={30}/>
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
                
                <span className='font-bold italic font-serif'><AiFillFire size={25} className='mr-4'/>Hello,</span>
            </h1>
        </div>
    


        {/* mobile menu */}
       {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
        


       <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-pink-300 z-10 duration-300': 'fixed top-0 left-[-100%] w-[300px] h-screen bg-pink-300 z-10 duration-300'}>
           <AiOutlineClose 
                onClick={()=> setNav(!nav)}
            size={30} className='absolute right-4 top-4 cursor-pointer'/>
            <h2 className='text-2xl p-4 '><span className='font-bold italic font-serif'>Whipped</span></h2>
            <nav>
                <ul className='flex flex-col p-4 text-gray-800'>
                    <li className='text-xl py-4 flex font-bold font-serif'><AiFillHome size={25} className='mr-4'/><NavLink to='/'>Home</NavLink></li>
                    <li className='text-xl py-4 flex font-bold font-serif'><AiFillFolderOpen size={25} className='mr-4'/><NavLink to='/about'>Projects</NavLink></li>
                    <li className='text-xl py-4 flex font-bold font-serif'><AiFillProfile size={25} className='mr-4'/><NavLink to='/recipes'>My Projects</NavLink></li>
                    <li className='text-xl py-4 flex font-bold font-serif'><AiFillSchedule size={25} className='mr-4'/><NavLink to='/new'>My Tasks</NavLink></li>
                    <li className='text-xl py-4 flex font-bold font-serif'><AiFillContacts size={25} className='mr-4'/><NavLink to='/new'>Teams</NavLink></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default NavBar