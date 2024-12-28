import {useRef, useState,useEffect} from 'react'
import {MdKeyboardArrowLeft,MdKeyboardArrowRight} from 'react-icons/md'
import { SlLike ,SlDislike} from "react-icons/sl";
import { FaStar} from "react-icons/fa6";
import CircleWithContentSke from '../../../skeletons/CircleWithContentSke';
import { Hash_Tag, ReviewMovieCommend } from '../../../../data/dummydata';


const MobileResReview = () => {






    var daysago = "6 Days ago"
    var isLoading = false
    const reviewref = useRef()
    const [reviewVisible,setreviewVisible] = useState({left:false,right:true})
  
    const data = ReviewMovieCommend

    const hash = Hash_Tag

    const tagref = useRef()
    const [tagVisible,setTagVisible] = useState({left:false,right:true})


    const btnVisibility = (ref, isVisibility) => {
        const con = ref.current;
        const maxScrollLeft = con.scrollWidth - con.clientWidth;
    
        isVisibility({
          left: con.scrollLeft > 0,
          right: con.scrollLeft < maxScrollLeft
        });
      };

    const handleClick = (dir, ref, isVisibility) => {
        const con = ref.current;
        const scrollAmount = 300;
    
        if (dir === "left") {
          con.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        } else if (dir === "right") {
          con.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    
        setTimeout(() => btnVisibility(ref, isVisibility), 300);
      };
    



      // Add touch listeners for mobile
  useEffect(() => {
    const con = reviewref.current;

    const handleTouch = () => btnVisibility(reviewref, setreviewVisible);

    if (con) {
      con.addEventListener("touchmove", handleTouch);
      con.addEventListener("touchend", handleTouch);
    }

    return () => {
      if (con) {
        con.removeEventListener("touchmove", handleTouch);
        con.removeEventListener("touchend", handleTouch);
      }
    };
  }, [])




    return (




    <div className='cast w-full py-3 px-3'>
        <hr></hr>
        <div className='flex justify-between'>
            <h1 className='text-xl mt-4 text-black font-semibold'>Top reviews</h1>
            <button className='text-md font-medium text-text_color'>116.6K reviews</button>
        </div>

        
        {/* hastag */}
        <div className='hashtag  relative'>
            <p className='my-4 text-gray-500 text-md'>Summary of 116.6k reviews.</p>
    
            <div
          ref={tagref}
          onScroll={() => btnVisibility(tagref, setTagVisible)}
          className="flex flex-nowrap overflow-hidden text-text_color gap-2"
        >
          {hash.map((tag) => (
            <div className="w-full" key={tag.id}>
              <p className="border font-medium px-2 py-1 text-md border-gray-600 rounded-full">
                {tag.hashTag}
                <span className="bg-gray-300 text-gray-500 text-sm mx-2 px-1 rounded-sm">
                  68379
                </span>
              </p>
            </div>
          ))}

                <div className='w-full top-0 h-full inset-0 overflow-hidden absolute flex items-center'>
                    <div className=' flex h-full justify-between w-full items-end text-white'>
                        <div className='bg-gradient-to-r from-primary h-1/2 flex items-center'>
                        <button className={`bg-gray-800/[0.5] w-6 h-6 flex justify-center items-center text-white border-none rounded-full ${tagVisible.left ? "" :"hidden"}`} onClick={()=>handleClick("left",tagref,setTagVisible)}><MdKeyboardArrowLeft/></button>
                        </div>
                        <div className='bg-gradient-to-l from-primary
                        /[0.5] h-1/2 flex items-center'>
                        <button className={`bg-gray-800/[0.5] w-6 h-6  flex justify-center items-center text-white border-none rounded-full ${tagVisible.right ? '' : "hidden"}`} onClick={()=>handleClick("right",tagref,setTagVisible)}><MdKeyboardArrowRight/></button>
                        </div>
                    </div>
                </div> 
            </div>

                    
        </div>

        <div className='review relative'>
             {isLoading && 
             <div className='flex gap-4 my-5'>
                <CircleWithContentSke/>
                <CircleWithContentSke/>
            </div>}
            {!isLoading &&
                <div className='flex gap-2 my-5  overflow-hidden' ref={reviewref} onScroll={()=>btnVisibility(reviewref,setreviewVisible)}>
                {data.map((item)=>
                     
                    <div className='w-full h-full rounded-sm border text-black border-gray-500' key={item.id}>
                    
                        <div className='w-[304px] h-44 p-2' >
                          <div className=' flex justify-between h-auto py-2' >  
                            <div className="flex w-fit items-start gap-2">
                                <div className="w-12 rounded-full overflow-hidden">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt={""} />
                                </div>
                                <div className='profile'>
                                <h1>{item.username}</h1>
                                <p className='text-gray-600'>Booked on BookShow</p>
                                </div>       
                            </div>

                            <div className='rating h-10 felx items-center gap-1'>
                                <FaStar className='text-text_color'/>
                                <p>{`${item.rating ? item.rating : "--"}/10`}</p>
                            </div>

                            </div>
                            
                            <div className='w-full'>
                                <h1 className='font-medium'>{item.hashtag.length > 30 ?item.hashtag.slice(0,30)+'...': item.hashtag }</h1>
                                <p className='text-gray-600 text-sm'>{item.command.length > 41 ? item.command.slice(0.41)+'...':item.command}
                                </p>
                            </div>



                        </div>
                        
                        <div className='likes&daysago flex justify-between items-center p-4'>
                                <div className='likes flex text-gray-600 justify-between w-24'>
                                    <div className='like flex gap-1 items-center justify-center'>
                                        <span><SlLike/></span> <p className='text-xs '>11.5k</p>
                                    </div>
                                    <div className='dislike'>
                                        <SlDislike/>
                                    </div>
                                </div>
                                <div className='days-ago text-gray-400 font-medium'>
                                    <p>{daysago}</p>
                                </div>
                        </div>
                    
                    </div>
                     
                    
                )}
            
                
                <div className='w-full top-0 h-full inset-0 overflow-hidden left-0 right-0 absolute flex items-center'>
                    <div className=' flex h-full justify-between  w-full items-center text-white'>
                        <div className='bg-gradient-to-r from-primary/[0.5] h-full flex items-center'>
                        <button className={`bg-black/[0.5] text-xl size-12 btn text-white border-none rounded-full ${reviewVisible.left ? "" :"hidden"}`} onClick={()=>handleClick("left",reviewref,setreviewVisible)}><MdKeyboardArrowLeft/></button>
                        </div>
                        <div className='bg-gradient-to-l from-primary
                        /[0.5] h-full flex items-center'>
                        <button className={`bg-black/[0.5]  text-xl size-12 btn text-white border-none rounded-full ${reviewVisible.right ? "":"hidden"} `} onClick={()=>handleClick("right",reviewref,setreviewVisible)}><MdKeyboardArrowRight/></button>
                        </div>
                    </div>
                </div>
                </div>
}
            </div>

        </div>
    
  )
}

export default MobileResReview