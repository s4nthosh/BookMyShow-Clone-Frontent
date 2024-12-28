import React from 'react'
import { GoHeart ,GoInfo ,GoDotFill} from "react-icons/go";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import Loading from '../skeletons/Loading';
import { Theatertiming } from '../../data/dummydata';





const TheaterTime = () => {

    const isLoading=false

    const data = Theatertiming
  return (


    <div className='overflow-hidden h-full'>
        {isLoading && <div className='w-full  overflow-hidden flex justify-center '>
            <Loading/>
            </div>}
        {!isLoading &&    
        <div className=''>
            {data.map((list)=>
            <div className='flex border-b py-4' key={list.id}>
                <div className='info flex items-start w-2/6'>
                
                    <button className='text-[20px] mt-1 mx-4'><span ><GoHeart className=' hover:text-red-600'/>
                    </span>
                    </button>
                    <div className='w-2/3'>
                        <button className='text-black font-semibold text-[12px]'>{list.theater_name}:{list.branch}</button>
                        <div className='flex gap-3 py-4 font-light items-center '>
                        <span className='text-green-600'><MdOutlinePhonelinkRing />
                        </span><p className='text-[12px] text-green-600'>M-Ticket</p>
                       <span className='text-orange-400'><IoFastFoodOutline />
                       </span> <p className='text-[12px] text-orange-400'>Food & Beverage</p>
                        </div>

                    </div>
                    <div className=' w-fit mx-auto '>
                    <button className='flex items-center text-[14px]'><GoInfo/>
                    Info
                    </button>
                    </div>
                    
                    

                </div>
                <div className='time w-4/6 '>
                    <div className='flex gap-3 my-2 flex-wrap'>
                        {list.timing.split(',').map((time,index)=>
                        <div className='flex ' key={index}>
                        <button className='flex flex-col justify-center text-[13px] rounded-md text-green-500 border border-gray-400 items-center w-28'>{time}<span className='text-gray-400'>{list.type}</span></button>
                        </div>
                        )}

                    </div>
                    <div className='flex items-center text-gray-700 text-[13px] mt-3 '>
                        <span className='text-orange-300'><GoDotFill/></span>
                        <p>Non-cancellable</p>
                    </div>
                </div>
            </div>
            )}
        </div>
    }
    </div>

  )
}

export default TheaterTime