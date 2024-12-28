import React,{useState} from 'react'
import { FaStar , FaPlay,} from "react-icons/fa6";
import CastCrew from './Cast&Crew/CastCrew';
import MovieDetailsLoader from '../skeletons/MovieDetailsLoader';

import MobileResReview from './Cast&Crew/Topreview/MobilleResReview';

const MovieDetails = () => {

  const data = [
    {
      id:1,
      moviename:"pushpa 2:The Rule",
      movie_bg:"/asserts/pushpa-bg.avif",
      movie_img:"/asserts/premier/pushpa.avif",
      language:["Tamil", "Hindi" , "Telugu", "Kannada"],
      genre:"Action,Thriller",
      certificate:"UA",
      duration:"3h 20m",
      release_date:"5 Dec,2024",
      type:"2D,3D,IMAX 2D, IMAX 3D",
      about:"Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Orci ac auctor augue mauris augue neque. Egestas erat imperdiet sed euismod. Arcu bibendum at varius vel pharetra vel. Nulla facilisi etiam dignissim diam quis enim lobortis. Est ultricies integer quis auctor."
    }
  ]

  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  


  var isLoading = false

  const rating = "8.5"
  const totalvotes = "(142k votes)"

  return (
    <div className='w-full h-full'>   
      <div className=' p-3 md:p-0 w-full h-full lg:h-[480px] bg-white md:bg-footer overflow-hidden relative'>

    

      <div className='absolute hidden md:block w-full h-full bg-black/[0.5] banner-bg top-0'>
      {isLoading && <div className='px-8 max-w-screen-xl mx-auto h-full my-auto flex flex-col justify-center'>
                      <MovieDetailsLoader/>
                    </div>}
      {!isLoading && data &&
        data.map((movie)=>
          <div className='hidden px-8 max-w-screen-xl mx-auto h-full my-auto md:flex flex-col justify-center' key={movie.id}>
              <div className='flex'>
                <div className='movie-img rounded-md relative overflow-hidden'>
                  <img src={movie.movie_img} alt={movie.moviename}></img>
                  <p className='bg-black text-white capitalize text-center'>in cinemas </p>
                  <div className='links w-full h-full flex items-center justify-center absolute top-0 cursor-pointer'>
                      <button className='w-fit bg-black/[0.7] flex items-center text-xs font-medium px-2 rounded-xl p-1 text-white'>
                      <FaPlay/><span className='px-1 tracking-wide'>Trailers(8)</span>
                      </button>
                  </div>
                </div>
                <div className='movie-detail my-auto px-8 flex-1'>
                  <h1 className='text-4xl font-extrabold capitalize py-5 text-white'>{movie.moviename}</h1>
                  <div className='h-16 my-5 w-fit flex rounded-md bg-footer'>
                      <div className='flex mx-4 text-white m-auto'>
                      <FaStar className='m-auto text-text_color size-6' />
                      <p className=' font-semibold px-2 text-lg'>{rating ? rating :"--"}/10</p>
                      <p className='font-medium tracking-wide text-lg'>{totalvotes ? totalvotes : ""}</p>
                      </div>
                      <button className='bg-white rounded-md w-20 border-none h-2/3 text-black m-auto ml-24 mx-5'>Rate now</button>
                  </div>
                  <p className='w-fit bg-white rounded-sm px-2 mt-2 text-black'>{movie.type}</p>
                  <p className='w-fit bg-white mt-2 rounded-sm px-2 text-black'>{movie.language}</p>
                  <div className='flex text-white my-3 gap-2'>
                    <p>{movie.duration}</p>
                    <p>• {movie.genre}</p>
                    <p>• {movie.certificate}</p>
                    <p>• {movie.release_date}</p>
                  </div>
                  <button className='w-52 rounded-xd h-14 btn-primary mt-4' >Book tickets</button>
                </div>
              </div>
          </div>
        )}
      </div>
      
      
      {data.map((movie)=>
        <img className='rounded-t-md md:rounded-none object-cover w-full max-w-screen-xl mx-auto' src={movie.movie_bg} alt={movie.moviename} key={movie.id}></img>

      )}
      <div className='bg-black py-2 text-white text-center rounded-b-md md:hidden'>
        <p>In cinemas</p>
      </div>



      <div className='w-full absolute top-0 left-0 h-3/4 block md:hidden '>
          <div className='links w-full h-full flex items-center justify-center absolute top-0 cursor-pointer'>
                      <button className='w-fit bg-black/[0.7] flex items-center text-xs font-medium px-2 rounded-xl p-1 text-white'>
                      <FaPlay/><span className='px-1 tracking-wide'>Trailers(8)</span>
                      </button>
          </div>
      </div>

      <div className=' md:hidden h-16 my-2 w-full flex rounded-md bg-footer'>
                      <div className='flex mx-4 w-3/4 justify-start items-center text-white m-auto'>
                      
                        <FaStar className='my-auto text-text_color size-6' />
                        <p className=' font-semibold px-2 text-sm sm:text-md'>{rating ? rating :"--"}/10</p>
                        <p className='font-medium tracking-wide text-sm sm:text-md'>{totalvotes ? totalvotes : ""}</p>
                      
                      </div>
                      
                      <button className='bg-white rounded-md border border-text_color text-text_color h-2/3 w-2/5 sm:w-1/2  m-auto mx-4'>Rate now</button>
                      
      </div>



        </div>
        {data.map((movie)=>

      <div className='md:hidden mx-3 ' key={movie.id}>
        <div className=''>
                <div className='flex gap-2 rounded-md'>
                <p className='w-fit bg-white rounded-sm px-2 mt-2 text-black'>{movie.type}</p>
                <p className='w-fit bg-white mt-2 rounded-sm px-2 text-black'>{movie.language.slice(0,2).join(',')},{movie.language.length>2 && (<span>+{movie.language.length - 2}</span>)}</p>
                </div>
        </div>
        <div className='flex my-3 text-gray-700 px-1 gap-2'>
                <p>{movie.duration}</p>
                <p>• {movie.genre}</p>
                <p>• {movie.certificate}</p>
                <p>• {movie.release_date}</p>
              </div>

        <div>
          <p className={`text-black ${!isExpanded && "line-clamp-2"}`}>
        {movie.about}
        </p>
          <button onClick={handleToggle} className='text-text_color'>
            {isExpanded ? "Less" : "More"}
          </button>
        </div>    
          </div>  
        )}
        <div className=' md:hidden'>
          <MobileResReview/>
        </div>



        {data.map((movie)=>
        <div className='hidden md:block h-auto bg-primary max-w-screen-xl mx-auto' key={movie.id}>
          <h1 className='text-2xl py-3 font-semibold text-black'>About the movie</h1>
          <p className='text-black w-3/4 pb-8'>{movie.about}</p>
        </div>
        )}

        <CastCrew/>
      
    </div>
  )
}

export default MovieDetails