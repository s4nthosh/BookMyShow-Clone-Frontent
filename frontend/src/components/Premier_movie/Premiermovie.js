import React, { useRef ,useState} from 'react'
import {MdKeyboardArrowLeft,MdKeyboardArrowRight,} from 'react-icons/md'
import { Link } from 'react-router-dom'
import { PremiermovieList } from '../../data/dummydata'

const data = PremiermovieList

const Premiermovie = () => {

  const premierref = useRef()

    const [premierVisibleBtn,setPremierVisibleBtn] = useState({left:false,right:true})

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
    <div className=' w-full'>
    <div ref={premierref}onScroll={()=>btnVisibility(premierref,setPremierVisibleBtn)} className='overflow-hidden text-white'>
      <div  className='mt-4 grid grid-flow-col grid-rows-[repeat(1,1fr)] grid-cols-[repeat(10,calc(50%-25.5px))] gap-x-8 gap-y-8 sm:grid-cols-[repeat(10,calc(40%-25.5px))] md:grid-cols-[repeat(10,calc(20%-25.5px))]' >
          {data.map((movie)=>
          <Link to={`/details/${movie.id}`} key={movie.id}>
            <div className='pre-mov capitalize cursor-pointer'> 
              <img className='pre-mov_img rounded-lg object-cover' src={movie.movieimg} alt={movie.moviename}></img>
              <span >{movie.moviename}</span><br></br>
              <span className=' capitalize' >{movie.genre}</span>
            </div>
            </Link>
            
          )}
                      

      </div>
      <div className='w-full mx-auto  top-0 left-0 h-full overflow-hidden absolute flex items-center'>
                    <div className=' flex h-1/2 justify-between  w-[97%] mx-auto items-center   mb-6 text-white'>
                        <div className=' h-full flex items-center'>
                        <button className={`bg-black/[0.5] text-2xl size-12 btn text-white border-none rounded-full ${premierVisibleBtn.left ? "" :"hidden"}`} onClick={()=>handleClick("left",premierref,setPremierVisibleBtn)}><MdKeyboardArrowLeft/></button>
                        </div>
                        <div className=' h-full flex items-center'>
                        <button className={`bg-black/[0.5] text-2xl size-12 btn text-white border-none rounded-full ${premierVisibleBtn.right ? '' : "hidden"}`} onClick={()=>handleClick("right",premierref,setPremierVisibleBtn)}><MdKeyboardArrowRight/></button>
                        </div>
                    </div>
        </div>
    </div>
    </div>
  )
}

export default Premiermovie