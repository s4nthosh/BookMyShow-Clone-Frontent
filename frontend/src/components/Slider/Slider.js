import React from 'react'
import { SliderBanner } from '../../data/dummydata'


const Slider = ({slider}) => {

  const adBanner = SliderBanner

  return (
    <div className='slider px-2 md:px-8 py-2 max-w-screen-xl mx-auto'>
        <div className='slider-con w-full '>
            <div ref={slider} className='slide flex  w-full h-40 lg:h-80'>
              {adBanner.map((banner)=>
              <img className='slide-img object-fill md:object-cover rounded-md cursor-pointer' key={banner.id} src={banner.bannerimg} alt={banner.bannername}></img>
              )}
            </div>
            
        </div>
    </div>
  )
}

export default Slider