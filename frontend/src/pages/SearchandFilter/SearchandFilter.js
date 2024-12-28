import React,{useState} from 'react'
import { GoSearch } from "react-icons/go";
import { IoCloseSharp } from "react-icons/io5";
import {MdKeyboardArrowLeft} from 'react-icons/md'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


const SearchandFilter = ({SearchOpen , isSearchOpen}) => {

  const [alignment, setAlignment]=useState('Movies');



  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }

  };

  return (

    <div className='absolute top-0 h-full md:h-screen w-full  bg-primary z-50'>
      <div className='hidden max-w-screen-xl mx-auto md:flex h-1/4 bg-primary justify-between items-center'>
        <button className='w-10 h-10 text-[30px] font-light  text-gray-600' onClick={()=>isSearchOpen(!SearchOpen)}><MdKeyboardArrowLeft/></button>
        <div className='search hidden md:flex bg-white h-fit justify-start items-center ml-8 px-2 w-1/2 border cursor-text rounded-md'>
              <GoSearch />
            <input className='h-8 px-2 capitalize text-black text-sm cursor-text w-full bg-white outline-none' placeholder='search for movies,events,plays,sports and activities'></input>
        </div>
        <button className='w-10 h-10 text-[30px] text-black' onClick={()=>isSearchOpen(!SearchOpen)}><IoCloseSharp/></button>
      </div>
      

      <div className=' hidden md:block h-full bg-white w-full'>
        <div className='max-w-screen-xl mx-auto bg-white'>
            <div className='flex w-full h-10 justify-between py-5 '>
              <div className='searchBy'>
              <ToggleButtonGroup sx={{height:"30px", borderRadius:'none' }}
              value={alignment}
              
              exclusive
              onChange={handleChange}
              aria-label="Platform"
              >
            <ToggleButton sx={{borderRadius:'none',}} value="Movies">MOVIES</ToggleButton>
            <ToggleButton sx={{borderRadius:'none'}} value="Cinemas">CINEMAS</ToggleButton>
            </ToggleButtonGroup>

              </div>
              <div className='filter'>
                <div className='flex gap-4 text-xs'>
                  <h1 className='text-[15px]'>Filter</h1>
                  <p className='border  border-text_color px-4 text-center text-text_color cursor-pointer hover:bg-text_color hover:text-white rounded-lg'>TAMIL</p>
                  <p className='border  border-text_color px-4 text-center text-text_color cursor-pointer hover:bg-text_color hover:text-white rounded-lg'>ENGLISH</p>
                  <p className='border  border-text_color px-4 text-center text-text_color cursor-pointer hover:bg-text_color hover:text-white rounded-lg'>TELUGU</p>
                  <p className='border  border-text_color px-4 text-center text-text_color cursor-pointer hover:bg-text_color hover:text-white rounded-lg'>HINDI</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    
    <div className='flex w-full py-4'>
    <button className='w-10 h-10 text-[30px] font-light  text-gray-600' onClick={()=>isSearchOpen(!SearchOpen)}><MdKeyboardArrowLeft/></button>
      <input type='search' className="bg-white capitalize outline-none w-full border border-gray-400 rounded-sm h-10 px-3 text-black " placeholder='Search for movies,events,plays & more'/>
    </div>
    
    </div>
  )
}

export default SearchandFilter