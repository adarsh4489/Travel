import React from 'react'
import azore1 from "../assets/azores.jpg";
import azore2 from "../assets/azores-2.jpg";
import azore3 from "../assets/nature.jpg";

const Package = () => {
  return (
    <div className='bg-[#E2D7BA] w-[80%] flex justify-between px-8 py-16 rounded-xl mx-auto my-12 items-center'>
        <div className='flex flex-col gap-6  w-[45%] pl-24'>
<h2 className='text-4xl font-bold'>Visit Azores</h2>
<p className='text-lg font-bold'>10 nights <br /> For <span className='font-bold text-orange-600'>$800 </span>/Person</p>
<button className='text-white py-2 cursor-pointer px-2 w-[40%] font-semibold rounded-lg hover:bg-orange-600 bg-orange-500'>Explore Now</button>
        </div>

        <div className='w-[50%] flex gap-1'>
            <div className='flex flex-col w-1/2 h-80 gap-1'>
                <img className='h-1/2 rounded-xl' src={azore3} alt="" />
                <img className='h-1/2 rounded-xl' src={azore2} alt="" />
            </div>
            <div className='w-1/2 h-80 relative'>
                <img src={azore1} className=' h-full rounded-lg' alt="" />
                <span className='absolute -top-8 px-2 py-2 text-center right-1 bg-orange-500 w-20 font-semibold text-white h-20 flex justify-center items-center  rounded-full'>Hot Offer</span>
            </div>
        </div>
    </div>
  )
}

export default Package