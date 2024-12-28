import React, { useEffect } from 'react'
import Recommendedmovies from '../../components/Recommended_movies/Recommendedmovies'
import Premiermovie from '../../components/Premier_movie/Premiermovie'
import Slider from "../../components/Slider/Slider"
import { useRef } from 'react'
import {MdKeyboardArrowLeft,MdKeyboardArrowRight,} from 'react-icons/md'
import Mobilenav from '../../components/common/Mobilenav'

const Homepage = () => {

  var slider = useRef()
  var left = useRef()
  var right = useRef()


  var handleClick=(type)=> {
    if(!slider.current) return;
    var Slider = slider.current
    var Slide = slider.current.children
  
    right.current.style.pointerEvents = 'none';
    left.current.style.pointerEvents = 'none';
  
    Slider.classList.remove('prev','next')
    if(type==='right'){
      Slider.appendChild(Slide[0])
      Slider.classList.add('next')
    }
    
    else{
      Slider.prepend(Slide[Slide.length-1])
      Slider.classList.add('prev')
    }
    setTimeout(()=>{
      right.current.style.pointerEvents = 'auto';
      left.current.style.pointerEvents = 'auto';
    },1000)

  }
  useEffect(()=>{
    const autoSlide= setInterval(()=>{
      handleClick('right')
    },5000)
  
    return()=>clearInterval(autoSlide)
  },[])

  return (
    <div className='homepage w-auto h-auto' >
      <div className='adbanner overflow-hidden relative'>
        <Slider slider={slider}/>
        <div className=' absolute w-screen h-full flex justify-between items-center top-0'>
          <button ref={left}className='bg-black/[.6] w-11 border-none rounded-e-md text-white left z-20' onClick={()=>handleClick('left')} ><MdKeyboardArrowLeft size="36"/></button>
          <button ref={right} className='bg-black/[.6] w-11 border-none rounded-s-md text-white right z-20' onClick={()=>handleClick('right')} ><MdKeyboardArrowRight size="36"/></button>
          </div>
      </div>
      <div className='px-2 md:px-8 py-8 mt-4  relative '>
        <div className='max-w-screen-xl mx-auto'>
        <div className='flex justify-between items-center'>
          <span className='text-xl font-extrabold text-black'>Recommended movies</span>
          <span className='text-sm font-medium text-text_color cursor-pointer' >see all</span>
        </div>
        
        <Recommendedmovies/>
      </div>
      </div>

      {/* premier-movies */}
      <div className='px-2 bg-secondary md:px-8 py-8 mt-4 relative'>
      <div className=' max-w-screen-xl mx-auto '>
        <div className='flex justify-between items-center'>
          <span className='text-xl font-extrabold text-white'>Premier movies</span>
          <span className='text-sm font-medium text-text_color cursor-pointer' >see all</span>
        </div>

        <Premiermovie/>
      </div>
      </div>
      <div className='md:hidden'>
      <Mobilenav/>
    </div>
    </div>
  )
}

export default Homepage