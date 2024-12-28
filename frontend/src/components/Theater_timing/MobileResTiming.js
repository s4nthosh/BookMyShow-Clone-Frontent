import React from 'react'
import { GoHeart ,GoInfo ,GoDotFill} from "react-icons/go";
import Loading from '../skeletons/Loading';
import { Theatertiming } from '../../data/dummydata';

const MobileResTiming = () => {

  const isLoading=false

  const data = Theatertiming


  return (
    <div className='overflow-hidden h-full'>
        {isLoading && <div className='w-full  overflow-hidden flex justify-center '>
            <Loading/>
            </div>}
        {!isLoading &&    
        <div className='mx-4'>
            {data.map((list)=>
            <div className='bg-white border-b py-4' key={list.id}>
                <div className='info flex items-start w-full'>
                
                    <button className='text-[20px] mt-1 mx-4'><span ><GoHeart className=' hover:text-red-600'/>
                    </span>
                    </button>
                    <div className='w-full'>
                        <button className='text-black font-semibold text-[12px]'>{list.theater_name}:{list.branch}</button>
                        
                    </div>

                    <div className=' w-fit mx-auto '>
                    <button className='flex items-center text-[14px]'><GoInfo/>
                    Info
                    </button>
                    </div>
                    
                    

                </div>
                <div className='flex items-center text-gray-700 text-[13px] mx-4'>
                        <span className='text-orange-300'><GoDotFill/></span>
                        <p>Non-cancellable</p>
                    </div>

                <div className='time w-full px-4 '>
                    <div className='flex gap-2 my-2 flex-wrap'>
                        {list.timing.split(',').map((time,index)=>
                        <div className='flex ' key={index}>
                        <button className='flex flex-col justify-center text-[11px] rounded-sm text-green-500 border border-gray-400 items-center w-24'>{time}<span className='text-gray-400 text-[10px]'>{list.type}</span></button>
                        </div>
                        )}

                    </div>
                </div>
            </div>
            )}
        </div>
    }
    </div>
  )
}

export default MobileResTiming