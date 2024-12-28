import {useRef, useState} from 'react'
import {MdKeyboardArrowLeft,MdKeyboardArrowRight,} from 'react-icons/md'
import ReviewMovie from './Topreview/ReviewMovie'
import { Cast_Crew } from '../../../data/dummydata'

const CastCrew = () => {

    const castCrew = Cast_Crew 
    

    const castref = useRef()
    const crewref = useRef()

    const [castVisible,setCastVisible] = useState({left:false,right:true})
    const [crewVisible,setCrewVisible] = useState({left:false,right:true})

    var handleClick=(dir,ref,isVisibility)=>{
        const con = ref.current
        const scrollAmount =400

        if(dir==="left"){
            con.scrollBy({left:-scrollAmount,behavior:"smooth"});
        }
        else if(dir==="right"){
            con.scrollBy({left:scrollAmount,behavior:"smooth"})

        }
        setTimeout(()=>btnVisibility(ref,isVisibility),300)
    }

    var btnVisibility=(ref,isVisibility)=>{
        const con = ref.current
    
        const maxScrollLeft = con.scrollWidth - con.clientWidth

        isVisibility({
            left:con.scrollLeft > 0,
            right:con.scrollLeft < maxScrollLeft
        })
    }



  return (
    <div className='md:block bg-primary max-w-screen-xl px-2 md:px-0 mx-auto'>
         <div className='cast w-full md:px-0 md:w-3/4 py-3 relative'>
         <hr/>
                <h1 className='text-xl md:text-2xl mt-4 text-black font-semibold'>Cast</h1>

                <div ref={castref} onScroll={()=>btnVisibility(castref,setCastVisible)} className='cast-container text-black overflow-hidden flex'>
                    {castCrew.map((cast)=>
                <div className="avatar flex w-fit items-center mx-0 my-2 md:mx-4 md:my-4 flex-col" key={cast.id}>
                    <div className="w-24 md:w-32 rounded-full">
                        <img src={cast.img} alt={cast.cast} />
                        
                    </div>
                    <h1 className='text-sm md:text-base md:w-32 flex flex-wrap text-center font-medium justify-center'>{cast.cast}</h1>
                    <p className='w-32 text-sm md:text-base justify-center text-gray-500 flex flex-wrap text-center'>{cast.castName}</p>
                   
                </div>
                )}
                <div className='w-full top-0 h-full overflow-hidden absolute flex items-center'>
                    <div className=' flex h-1/2 justify-between  w-full items-center   mb-6 text-white'>
                        <div className='bg-gradient-to-r from-primary/[0.5] h-full flex items-center'>
                        <button className={`bg-black/[0.5] text-xl md:text-2xl size-12 btn text-white border-none rounded-full ${castVisible.left ? "" :"hidden"}`} onClick={()=>handleClick("left",castref,setCastVisible)}><MdKeyboardArrowLeft/></button>
                        </div>
                        <div className='bg-gradient-to-l from-primary
                        /[0.5] h-full flex items-center'>
                        <button className={`bg-black/[0.5] text-xl md:text-2xl size-12 btn text-white border-none rounded-full ${castVisible.right ? '' : "hidden"}`} onClick={()=>handleClick("right",castref,setCastVisible)}><MdKeyboardArrowRight/></button>
                        </div>
                    </div>
                </div>

                </div>
        </div>



        <div className='crew w-full md:w-3/4 py-3 relative'>
         <hr/>
                <h1 className='text-xl md:text-2xl mt-4 text-black font-semibold'>Crew</h1>

                <div ref={crewref} onScroll={()=>btnVisibility(castref,setCastVisible)} className='cast-container text-black overflow-hidden flex'>
                    {castCrew.map((cast)=>
                <div className="avatar flex w-fit items-center mx-0 my:2 md:mx-4 md:my-4 flex-col" key={cast.id}>
                    <div className="w-24 md:w-32 rounded-full">
                        <img src={cast.img} alt={cast.cast} />
                        
                    </div>
                    <h1 className=' w-32 text-sm md:text-base flex flex-wrap text-center font-medium justify-center'>{cast.cast}</h1>
                    <p className='w-32 text-sm md:text-base justify-center text-gray-500 flex flex-wrap text-center'>{cast.castName}</p>
                   
                </div>
                )}
<div className='w-full top-0 h-full overflow-hidden absolute flex items-center'>
                    <div className=' flex h-1/2 justify-between  w-full items-center   mb-6 text-white'>
                        <div className='bg-gradient-to-r from-primary/[0.5] h-full flex items-center'>
                        <button className={`bg-black/[0.5] text-xl md:text-2xl size-12 btn text-white border-none rounded-full ${crewVisible.left ? "" :"hidden"}`} onClick={()=>handleClick("left",crewref,setCrewVisible)}><MdKeyboardArrowLeft/></button>
                        </div>
                        <div className='bg-gradient-to-l from-primary
                        /[0.5] h-full flex items-center'>
                        <button className={`bg-black/[0.5] text-xl md:text-2xl size-12 btn text-white border-none rounded-full ${crewVisible.right ? '' : "hidden"}`} onClick={()=>handleClick("right",crewref,setCrewVisible)}><MdKeyboardArrowRight/></button>
                        </div>
                    </div>
                </div>

                </div>
        </div>  

         <div className='hidden md:block'>       
        <ReviewMovie handleClick={handleClick} btnVisibility={btnVisibility}/>
        </div>       
    </div>
  )
}

export default CastCrew