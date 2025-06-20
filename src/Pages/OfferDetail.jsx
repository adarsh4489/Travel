import React from 'react'
import nature from "../assets/nature.jpg";
import TestimonialCarousel from '../Components/TestimonialCarousel';

const OfferDetail = ({tag}) => {

     

  const Facility=()=>{
    return (
      <div className='font-semibold px-2 py-1'>{tag}</div>
    )
  }
  return (
    <div className='w-[90%] my-20 mx-12 '>
      <div className='flex '>
      <div className='flex flex-col w-1/2 gap-1'>
        <img src={nature} alt="" className='rounded-lg'/>
        <div className='flex justify-between gap-2 '>
          <div className='w-44 h-44'><img className='w-full object-cover' src={nature} alt="" /></div>
          <div className='w-44 h-44'><img className='w-full object-cover' src={nature} alt="" /></div>
          <div className='w-44 h-44'><img className='w-full object-cover' src={nature} alt="" /></div>
          <div className='w-44 h-44'><img className='w-full object-cover' src={nature} alt="" /></div>
          
        </div>
      </div>
      <div className="details flex flex-col w-1/2 gap-2 ml-24">
        <h2 className='text-2xl font-semibold'>Name of the Place</h2>
        <p>small description about the place</p>
        <p>facilities tags</p>
        <p>Package details</p>
        <div>

        <p>Ratings</p>
        <p>Price</p>
        <p>Start Date end Date</p>
        <button className='bg-orange-500 hover:bg-orange-600 px-2 rounded-lg my-4 py-2'>Book Now</button>
        </div>
      </div>
    </div>
<div>
<h2 className='text-3xl font-bold'>Similar Packages</h2>
here more related cards
</div>
<TestimonialCarousel/>
    </div>
  )
}

export default OfferDetail