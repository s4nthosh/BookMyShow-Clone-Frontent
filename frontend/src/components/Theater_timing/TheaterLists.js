import {useRef, useState , useEffect} from 'react'
import {MdKeyboardArrowLeft,MdKeyboardArrowRight} from 'react-icons/md'
import { GoSearch ,GoDotFill } from "react-icons/go";
import { PiSubtitles } from "react-icons/pi";
import TheaterTime from './TheaterTime';
import { MdClose } from "react-icons/md";
import { Days } from '../../data/dummydata';
import MobileResTiming from './MobileResTiming';




const TheaterLists = () => {


    const [Search,SetSearch]=useState(false)
    const [hasShadow ,SethasShadow] = useState(false)
    const[dateSelect,isDateSelect]= useState(0)

    const days = Days

const searchref = useRef()
const dateref = useRef()


// useEffect(()=>{
//     if(days.length>0){
//         isDateSelect(days[0].id)
//     }
// },[days])

var handleDate=(index)=>{
    // var filterdate = days.filter((day)=> selectedday.id === day.id)
    
    // if(filterdate){
    //     isDateSelect(!dateSelect)
    // }

    isDateSelect(index)
}


useEffect(()=>{
    if(Search && searchref.current){
        searchref.current.focus()
    }

    const handleScroll=()=>{
        if(window.screenY>0){
            SethasShadow(true)
        }
        else{
            SethasShadow(false)
        }
    }
    window.addEventListener("scroll",handleScroll)

    return()=>{
        window.removeEventListener("scroll",handleScroll)
    }
},[Search,])


let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const container = dateref.current;

    
    // Detect swipe direction
    if (touchStartX - touchEndX > 50) {
      // Swipe left
      container.scrollBy({ left: 200, behavior: "smooth" });
    } else if (touchEndX - touchStartX > 50) {
      // Swipe right
      container.scrollBy({ left: -200, behavior: "smooth" });
    }

  };





var handleClick=(dir,ref)=>{
    const con = ref.current
    const scrollAmount =100

    if(dir==="left"){
        con.scrollBy({left:-scrollAmount,behavior:"smooth"});
    }
    else if(dir==="right"){
        con.scrollBy({left:scrollAmount,behavior:"smooth"})

    }
}


  return (
    
    <div className=' bg-white w-full h-full'>
        <div className='hidden md:block bg-white max-w-screen-xl mx-auto'>
            <div className='p-6'>
                <h1 className='text-black text-4xl font-medium '>Pushpa 2:The Rule - <span>Tamil</span></h1>
                <div className='flex gap-3 pt-2'>
                    <p className='rounded-full border-gray-600 text-gray-600 border font-normal text-xs flex items-center justify-center w-6 h-6' >UA</p>
                    <p className='rounded-full border-gray-600 text-gray-600 border font-normal text-xs px-2 flex items-center justify-center'>ACTION</p>
                    <p className='rounded-full border-gray-600 text-gray-600 border font-normal text-xs px-2 flex items-center justify-center'>THRILLER</p>
                </div>
            </div>
        </div>
        <hr/>
        <div className={`h-16 bg-white w-full sticky top-0 ${hasShadow ? "shadow-md" : "" }`} >
                <div className='flex w-full md:max-w-screen-xl mx-auto justify-between'>
                    <div className='date relative z-50 w-full md:w-96 px-0 md:px-1 h-fit'>
                  
                        <div ref={dateref} className='gap-2 relative z-50 mx-0 md:mx-6 h-16 w-full md:w-auto px-0 md:px-2 overflow-hidden justify-start items-center flex text-center' onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}>
                            {days.map((day,index)=>
                            <div className='day' key={day.id} >
                                <button className={`w-12 h-14  text-xs justify-center items-center rounded-md flex flex-col font-medium text-black ${dateSelect===index ? "bg-text_color text-white" : "hover:text-text_color text-black"} ` }onClick={()=>handleDate(index)}>
                                <div className=''>{day.day}</div>
                                <div className='font-semibold text-[15px]' >{day.date}</div>
                                <div className=''>{day.month}</div>
                                </button>    
                            </div>
                            )}
                            
                        </div>

                    <div className='hidden md:block  absolute top-0 left-0 mx-auto w-full h-full z-0'>
                            <div className='flex  h-full justify-between  items-center '>
                                <button className='text-gray-400 text-4xl hover:text-gray-500' onClick={()=>handleClick("left",dateref)}><MdKeyboardArrowLeft/></button>
                                <button className='text-gray-400 text-4xl hover:text-gray-500' onClick={()=>handleClick("right",dateref)}><MdKeyboardArrowRight/></button>
                            </div>
                    </div>        
                    </div>

                    <div className='hidden md:block options '>
                        <div className='flex h-full items-center text-black relative'>
                            <div className='border-l border-b-4 border-b-text_color h-full flex w-44 justify-center items-center'>
                                <h1>Tamil-2D</h1>
                            </div>
                            <div className='border-l h-full w-44 justify-center flex items-center'>
                                <h1 className=''>Filter Price Range</h1>
                            </div>
                            <div className='border-l h-full w-44 justify-center flex items-center'>
                                <h1>Filter Show Time</h1>
                            </div>
                            <div className='border-x h-full flex justify-center items-center w-16'>
                                <div className={`w-full h-full cursor-pointer flex justify-center items-center`} onClick={()=>SetSearch(!Search)} ><GoSearch/></div>
                                <div className={`absolute top-0 bg-white transition-all flex items-center gap-2 border-l right-0 h-full overflow-hidden ${Search ? 'w-1/2': 'w-0'}`}>
                                    <span className='px-2'><GoSearch/></span>
                                    <input ref={searchref} type='text' className='h-6 bg-white border-none outline-none ' placeholder='Search for Cinema'></input>
                                    <span className='cursor-pointer' onClick={()=>SetSearch(!Search)}><MdClose/></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div className='w-full h-full bg-primary py-4'>
           <div className='max-w-screen-xl bg-white m-auto h-full'>
                  <div className='hidden common h-8 items-center justify-end gap-2 mx-4 md:flex text-gray-500 text-[10px]'>
                    <div className='flex items-center'><span className='text-green-400 text-[20px]'><GoDotFill/></span><p>AVAILABLE</p></div>
                    <div className='flex items-center'><span className='text-orange-400 text-[20px]'><GoDotFill/></span><p>FAST FILLING</p></div>
                    <div className='flex items-center'><span className='text-green-700 text-[20px] pr-2'><PiSubtitles/></span><p>SUBTITLES LANGUAGE </p></div>
                  </div> 
                  <hr/>  

                  <div className='hidden md:block'>          
                  <TheaterTime/>
                  </div>       
            </div>   

            <div className='md:hidden'>
                <MobileResTiming/>            
            </div>                  
        </div>
    </div>
  )
}

export default TheaterLists