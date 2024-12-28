import React from 'react'
import { IoIosNotificationsOutline ,IoIosHelpCircleOutline,IoIosLogOut  } from "react-icons/io";
import { IoTicketOutline ,IoSettingsOutline } from "react-icons/io5";
import { MdOutlineVideoSettings } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { GoGift } from "react-icons/go";
import { Link } from 'react-router-dom';

const MenuBar = ({profile,isprofile,OpenLoginPage}) => {

  return (
    <div className='absolute z-50'>
        <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    
    <div className="menu bg-white min-h-full w-80 p-0">
      {/* Sidebar content here */}
      {isprofile ? (
        <div className='w-full'>
            <p className='border-b p-4 text-black font-bold text-2xl'>Hey!</p>
            <div className='signup flex w-full justify-between p-4 shadow-lg border-none'>
                <p className='w-36 text-gray-500'>unlock special Offers & great benefit</p>
            <button className='rounded-md text-text_color border font-semibold border-text_color px-2 w-auto h-9 text-xs' onClick={()=>{document.getElementById("my-drawer-4").checked = false;  OpenLoginPage()}} >Login / Register</button>
          
          </div>
        </div>
      ):(
        <ul>
      {profile.map((list)=>
                <div className='flex items-center gap-2 p-4 border-b' key={list.id}>
                
                  <div className="avatar">
                    
                  <div className="w-12 rounded-full">
                  <img src={`${list.profile_img ? `${list.profile_img}` : "/avatar-placeholder.png"}`} alt='broken' />
                  </div>
                  </div>
                  <div>
                  <p className='text-black font-bold text-md'>Hay!,{list.user_name.length > 15 ? list.user_name.slice(0,15)+"..." : list.user_name}</p>
                  <Link to={'/profile'}><button className='text-text_color text-xs'>Edit-Profile</button></Link>
                  </div>
                </div>
              )}
        </ul>
      )}  

        <ul className='text-black text-md'>
            <div className='flex w-full border-b items-center py-4'><span className='w-auto text-[20px] px-2'><IoIosNotificationsOutline/></span><p>Notification</p></div>
            <div className='flex w-full border-b items-center py-4'><span className='w-auto text-[20px] px-2'><IoTicketOutline/></span><p>Your Orders</p></div>
            <div className='flex w-full border-b items-center py-4'><span className='w-auto text-[20px] px-2'><MdOutlineVideoSettings /></span><p>Stream Library</p></div>
            <div className='flex w-full border-b items-center py-4'><span className='w-auto text-[20px] px-2'><RiSecurePaymentFill /></span><p>Play Credit Card</p></div>
            <div className='flex w-full border-b items-center py-4'><span className='w-auto text-[20px] px-2'><IoIosHelpCircleOutline /></span><p>Help & Support</p></div>
            <div className='flex w-full border-b items-center py-4'><span className='w-auto text-[20px] px-2'><IoSettingsOutline /></span><p>Accounts & Settings</p></div>
            <div className='flex w-full border-b items-center py-4'><span className='w-auto text-[20px] px-2'><GoGift /></span><p>Rewards</p></div>
            <div className='flex w-full border-b items-center py-4'><span className='w-auto text-[20px] px-2'><IoIosLogOut /></span><p>Log-out</p></div>
            
        </ul>    
    </div>
  </div>
</div>
    </div>
)}
export default MenuBar