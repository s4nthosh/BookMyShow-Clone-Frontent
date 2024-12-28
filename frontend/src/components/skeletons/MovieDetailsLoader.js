import React from 'react'

const MovieDetailsLoader = () => {
  return (
    <div className="flex w-full gap-4">
        <div className="skeleton h-96 w-80 bg-footer"></div>
        <div className='flex gap-8 w-full flex-col mt-8'>
        <div className="skeleton h-7 w-96 bg-footer"></div>
        <div className="skeleton h-9 w-1/2 bg-footer"></div>
        <div className="skeleton h-6 w-2/5 bg-footer"></div>
        <div className="skeleton h-6 w-2/6 bg-footer"></div>
        <div className="skeleton h-10 w-2/12 bg-footer"></div>
        </div>
</div>
  )
}

export default MovieDetailsLoader