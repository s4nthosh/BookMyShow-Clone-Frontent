import React from 'react'
import { IoMdContact ,IoIosVideocam ,IoMdHome } from "react-icons/io";
import { FaTicket } from "react-icons/fa6";

const Mobilenav = () => {
  return (
<div className="btm-nav text-gray-600" >
  <button className="active">
    <IoMdHome className='w-full h-full'/>
    <span className="btm-nav-label">Home</span>
  </button>
  <button >
    <IoIosVideocam className='w-full h-full'/>
    <span className="btm-nav-label">Movies</span>
  </button>
  <button>
    <FaTicket className='w-full h-full'/>
    <span className="btm-nav-label">Live Events</span>
  </button>
  <button>
        <IoMdContact className='w-full h-full'/>
    <span className="btm-nav-label">Profile</span>
  </button>
</div>  
)
}

export default Mobilenav