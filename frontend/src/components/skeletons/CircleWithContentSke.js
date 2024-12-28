import React from 'react'

const CircleWithContentSke = () => {
  return (
    <div className="flex w-1/2 flex-col gap-4 ">
    <div className="flex items-center gap-4">
    <div className="skeleton h-16 w-16 shrink-0 rounded-full bg-slate-200"></div>
    <div className="flex flex-col gap-4">
      <div className="skeleton h-4 w-20 bg-slate-200"></div>
      <div className="skeleton h-4 w-28 bg-slate-200" ></div>
    </div>
  </div>
  <div className="skeleton h-32 w-full bg-slate-200"></div>
</div>
  )
}

export default CircleWithContentSke