import React, { useState ,useEffect} from 'react'
import { GoSearch } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import Logo from '../svgs/Logo';
import Loginpage from '../../pages/auth/Loginpage';
import SearchandFilter from '../../pages/SearchandFilter/SearchandFilter';
import MenuBar from './MenuBar';


const Navbar = () => {
  const nav = useNavigate();
  const [loginOpen,isLoginOpen]= useState(false)
  const [SearchOpen,isSearchOpen]= useState(false)


  var profile =[{
    id:1,
    profile_img:'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
    user_name:"",
  }]


 var isprofile = profile.some((data)=>!data.user_name || !data.profile_img) 

  var homebutton=()=>{
    nav('/')
  }

  var OpenLoginPage=()=>{
      isLoginOpen(!loginOpen)
  }

  var OpenSearch=()=>{
    isSearchOpen(!SearchOpen)
  }

  useEffect(()=>{
    if(SearchOpen===true || loginOpen===true){
      document.body.style.overflow='hidden'
    }
    else{
      document.body.style.overflow='auto'
    }
  },[SearchOpen , loginOpen])
  

  return (
    
    
    
    <div className=" bg-white mx-auto z-40">
      
        <Loginpage loginOpen={loginOpen} isLoginOpen={isLoginOpen}/>
  
      {SearchOpen=== true && (
        <SearchandFilter SearchOpen={SearchOpen} isSearchOpen={isSearchOpen}/>
      )}

      <MenuBar isprofile={isprofile} profile={profile} OpenLoginPage={OpenLoginPage}/>
      
      <div className='navbar border-b md:border-none max-w-screen-xl mx-auto bg-base-100 md:px-8'>
        <div className="flex-1">
            <span className='block md:hidden text-xl font-extrabold text-black'>its all stars here!</span>
              <span onClick={()=>homebutton()}><Logo/></span>
            {/* <span className="svg hidden md:block text-xl font-extrabold cursor-pointer text-black">BookShow</span> */}
            <div className='search hidden md:flex justify-start items-center ml-8 px-2 w-1/2 h-auto border cursor-text rounded-md'onClick={()=>OpenSearch()}>
              <GoSearch />
            <button className='h-8 px-2 capitalize text-sm cursor-text w-auto'>search for movies,events,plays,sports and activities</button>
            </div>
        </div>
        <div className='md:hidden text-black text-[20px]'onClick={()=>OpenSearch()}>
           <span><GoSearch /></span> 
        </div>
        <div className="hidden  flex-none md:flex">
          <div className='loc text-black text-sm mr-2'>chennai</div>
          {isprofile ? (
          <div className='signup'>
            <button className='btn-primary w-14 h-6 text-xs font-normal' onClick={()=>isLoginOpen(true)} >Sign up</button>
          </div>):
          (
            <div>
              <label htmlFor="my-drawer-4" className="drawer-button btn btn-white bg-white border-none hover:bg-white text-black">
              {profile.map((list)=>
                <div className='flex items-center gap-2' key={list.id}>
                
                  <div className="avatar">
                    
                  <div className="w-8 rounded-full">
                  <img src={`${list.profile_img ? `${list.profile_img}` : "/avatar-placeholder.png"}`} alt='broken' />
                  </div>
                  </div>
                  <p>{`${list.user_name ? list.user_name.length > 8 ? list.user_name.slice(0,8)+"..." : list.user_name : "Hey! Guest"}`}</p>
                </div>
              )} 
                </label>
              
            </div>
          )}

          {isprofile &&(<div className="drawer-content">
              {/* Page content here */}
            <label htmlFor="my-drawer-4" className="drawer-button btn btn-white bg-white border-none hover:bg-white text-black">=</label>
            
          </div>
          )}
        </div>
  </div>
    <div className='hidden md:block subnavbar bg-primary mx-auto'>
    <div className='subnav bg-primary max-w-screen-xl mx-auto px-8'>
        <div className='subnav_container flex justify-between py-2 items-center text-black text-sm'>
          <div className='subnav_content flex gap-5 cursor-pointer'>
            <span>Movies</span>
            <span>Stream</span>
            <span>Events</span>
            <span>Plays</span>
            <span>Sports</span>
            <span>Activities</span>
          </div>
          <div className='subnav_content flex gap-5 cursor-pointer text-xs'>
            <span>ListYourShow</span>
            <span>Corporates</span>
            <span>Offers</span>
            <span>Gift Cards</span>
          </div>
        </div>
    </div>
    </div>
</div>
  )
}

export default Navbar