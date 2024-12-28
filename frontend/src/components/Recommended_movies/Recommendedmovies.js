import React,{useState,useRef} from 'react'
import { Link } from 'react-router-dom'
import {MdKeyboardArrowLeft,MdKeyboardArrowRight,} from 'react-icons/md'
import { RecommendedmovieList } from '../../data/dummydata'

const Recommendedmovies = () => {

  const data = RecommendedmovieList


  const recref = useRef()

    const [recVisibleBtn,setrecVisibleBtn] = useState({left:false,right:true})

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
    <div className='w-full'>
    <div ref={recref}onScroll={()=>btnVisibility(recref,setrecVisibleBtn)} className='overflow-hidden'>
      <div className='mt-4  text-black grid grid-flow-col grid-rows-[repeat(1,1fr)] grid-cols-[repeat(10,calc(50%-25.5px))] gap-x-8 gap-y-8 sm:grid-cols-[repeat(10,calc(40%-25.5px))] md:grid-cols-[repeat(10,calc(20%-25.5px))]' >
          {data.map((movie)=>
            <Link to={`/details/${movie.id}`} key={movie.id}><div className='rec-mov capitalize cursor-pointer'> 
              <img className='rec-mov_img rounded-lg object-cover' src={movie.movieimg} alt={movie.moviename}></img>
              <span >{movie.moviename}</span><br></br>
              <span className='text-gray-500 capitalize' >{movie.genre}</span>
            </div>
            </Link>
          )}

      </div>
        
    </div>
    <div className='w-full mx-auto  top-0 left-0 h-full overflow-hidden absolute flex items-center'>
                    <div className=' flex h-1/2 justify-between  w-[97%] mx-auto items-center   mb-6 text-white'>
                        <div className=' h-full flex items-center'>
                        <button className={`bg-black/[0.5] text-2xl size-12 btn text-white border-none rounded-full ${recVisibleBtn.left ? "" :"hidden"}`} onClick={()=>handleClick("left",recref,setrecVisibleBtn)}><MdKeyboardArrowLeft/></button>
                        </div>
                        <div className=' h-full flex items-center'>
                        <button className={`bg-black/[0.5] text-2xl size-12 btn text-white border-none rounded-full ${recVisibleBtn.right ? '' : "hidden"}`} onClick={()=>handleClick("right",recref,setrecVisibleBtn)}><MdKeyboardArrowRight/></button>
                        </div>
                    </div>
        </div>
    </div>
  )
}

export default Recommendedmovies