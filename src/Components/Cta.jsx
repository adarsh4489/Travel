import React from 'react'
import icy from "../assets/icy.jpg"

const Cta = () => {
  return (
    <div className='h-[65vh] px-24 py-24 bg-bottom space-y-6 bg-cover my-4 bg-fixed bg-no-repeat rounded-xl' style={{ backgroundImage: `url(${icy})` }}>
        <p className='text-orange-500'>Together we can Make Memories</p>
        <h1 className='text-3xl w-[30%] font-bold'>Are You Ready To Join Us On Your Next Trip?</h1>
        <button className='rounded-full bg-orange-500 text-white hover:bg-amber-600 px-4 py-2 font-semibold'>Discover Now</button>

    </div>
  )
}

export default Cta