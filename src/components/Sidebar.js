import React from 'react'
import { Link } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { GrChannel } from "react-icons/gr";
import { GrHistory } from "react-icons/gr";
import { MdOutlineWatchLater } from "react-icons/md";
import { LiaFileVideoSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";
import { MdChevronRight } from "react-icons/md";
import { BsFire } from "react-icons/bs";
import { LuShoppingBag } from "react-icons/lu";
import { IoMdMusicalNote } from "react-icons/io";
import { PiFilmSlateDuotone } from "react-icons/pi";

const Sidebar = () => {
  return (
    <div className=" w-2/12  pl-8 py-4 mr-20 ">
      <div className='w-30'>
      <ul className='font-semibold'>
      <Link to="/" >
        <div className='flex  py-2'>
        <div className='w-3/12'>
            <IoHomeOutline className='mr-12 w-6 h-6'/>
          </div>
          <li className='w-7/12'>Home</li>
        </div>
      </Link> 
      <Link to="/" >
        <div className='flex  py-2'>
        <div className='w-3/12'>
            <SiYoutubeshorts className='mr-12 w-6 h-6'/>
          </div>
          <li className='w-7/12'>Shorts</li>
        </div>
      </Link> 
      
      <Link to="/" >
        <div className='flex py-2'>
          <div className='w-3/12'>
            <MdOutlineSubscriptions className='mr-12 w-6 h-6'/>
          </div>
          <li className='w-7/12'>Subscriptions</li>
        </div>
      </Link>   
      </ul>

      <div class="my-4 border-t border-gray-400"></div>
      <div className='flex'>
        <h1 className='font-bold pt-1 pb-3'>You</h1>
        <MdChevronRight className='mt-1 mr-12 w-6 h-6'/>
      </div>
      
      <ul className='font-semibold'>
      <Link to="/" >
        <div className='flex py-2'>
        <div className='w-3/12'>
            <GrChannel className='mr-12 w-5 h-5'/>
          </div>
          <li className='w-7/12'>Your Channel</li>
        </div>
      </Link> 
      <Link to="/" >
        <div className='flex  py-2'>
        <div className='w-3/12'>
            <GrHistory className='mr-12 w-5 h-5'/>
          </div>
          <li className='w-7/12'>History</li>
        </div>
      </Link> 
      
      <Link to="/" >
        <div className='flex py-2'>
          <div className='w-3/12'>
            <LiaFileVideoSolid className='mr-12 w-6 h-6'/>
          </div>
          <li className='w-7/12'>Your videos</li>
        </div>
      </Link>  
      <Link to="/" >
        <div className='flex py-2'>
          <div className='w-3/12'>
            <MdOutlineWatchLater className='mr-12 w-6 h-6'/>
          </div>
          <li className='w-7/12'>Watch Later</li>
        </div>
      </Link>  
      <Link to="/" >
        <div className='flex py-2'>
          <div className='w-3/12'>
            <IoIosArrowDown className='mr-12 w-6 h-6'/>
          </div>
          <li className='w-7/12'>Show more</li>
        </div>
      </Link>   
      </ul>

      <div class="my-4 border-t border-gray-400"></div>
      <h1 className='font-bold pt-1 pb-3'>Explore</h1>
      <ul className='font-semibold'>
      <Link to="/" >
        <div className='flex py-2'>
        <div className='w-3/12'>
            <BsFire className='mr-12 w-6 h-6'/>
          </div>
          <li className='w-7/12'>Trending</li>
        </div>
      </Link> 
      <Link to="/" >
        <div className='flex py-2'>
        <div className='w-3/12'>
            <LuShoppingBag className='mr-12 w-6 h-6'/>
          </div>
          <li className='w-7/12'>Shopping</li>
        </div>
      </Link> 
      
      <Link to="/" >
        <div className='flex py-2'>
          <div className='w-3/12'>
            <IoMdMusicalNote className='mr-12 w-6 h-6'/>
          </div>
          <li className='w-7/12'>Music</li>
        </div>
      </Link>  
      <Link to="/" >
        <div className='flex py-2'>
          <div className='w-3/12'>
            <PiFilmSlateDuotone className='mr-12 w-6 h-6'/>
          </div>
          <li className='w-7/12'>Films</li>
        </div>
      </Link> 
      </ul>
      </div>
      
    </div>
  )
}

export default Sidebar