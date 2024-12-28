import React from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { IoMdMail } from "react-icons/io";


const Loginpage = ({loginOpen ,isLoginOpen}) => {

  const handleInput=(e)=>{
    const value = e.target.value.replace(/\D/g, "")
      e.target.value = value
  }

  return (
    <div className={`absolute top-0 h-screen w-full bg-black/[0.4] z-50 transition-opacity duration-500 ${
          loginOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}>
      <div className={`w-[28rem] relative rounded-md mx-auto text-black bg-white h-5/6 duration-500 transform transition-all  ${loginOpen ? 'translate-y-14' : '-translate-y-full' }  `}>
          <div className=' flex w-full h-20 items-center justify-center'>
            <p className='text-md font-bold flex-1 text-center'>Get Started</p>
            <button className='w-10 h-10 text-[26px]' onClick={()=>isLoginOpen(false)}><IoCloseSharp/></button>
          </div>
          <div className='login-details h-full w-full left-0 absolute top-0 pointer-events-none'>
          
          
          <div className='w-full h-full flex flex-col gap-3 justify-center items-center'>
            <div className='google border border-gray-400 rounded-md w-10/12 h-14 flex justify-center items-center'>
              <span className='text-[20px] w-5'><FcGoogle /></span>
              <button className='w-3/4'>Login with google</button>
            </div>
            <div className='e-mail border border-gray-400 rounded-md w-10/12 h-14 flex justify-center items-center cursor-pointer pointer-events-auto'>
              <span className='text-[20px] w-5'><IoMdMail /></span>
              <button className='w-3/4'>Login with E-mail</button>
            </div>
            <div className='number flex w-10/12 h-14 justify-center items-center'>
            <label className='px-2'>+91</label><input type="tel" onInput={handleInput} maxLength={10} placeholder="Continue with mobile number" className="bg-white focus:border-b-red-500 border-b outline-none w-full max-w-xs pointer-events-auto" />
            <div className='absolute bottom-0 z-50 pointer-events-auto py-2'>
              <button className='btn bg-text_color border-none text-white cursor-pointer'>continue</button>
            </div>
            </div>

          
          </div>
          </div>
          </div>
      </div>
    

  )
}

export default Loginpage