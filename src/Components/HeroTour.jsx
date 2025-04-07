import React from 'react'

const HeroTour = () => {
  return (
    <div className="flex justify-evenly gap-8 px-2 my-12 py-6 rounded-xl font-semibold bg-[#DFD9CE] w-[70%] mx-auto ">
        <div className="flex flex-col ">
          <p>Location</p>
          <p>Spain</p>
        </div>
          {/* <hr className="text-orange-600 rotate-90 " /> */}
        <div className="flex flex-col border-l-orange-600 border-l-2 pl-4">
          <p>Date</p>
          <p>06/05/2025 - 12/05/2025</p>
        </div>
          {/* <hr className="text-orange-600 rotate-90 " /> */}
        <div className="flex flex-col border-l-orange-600 border-l-2 pl-4">
          <p>Guests</p>
          <p>2 Adults</p>
        </div>
        <button className="bg-[#142316] min-w-[8rem] cursor-pointer px-2 py-1 rounded-full text-white">
          Search
        </button>
      </div>
  )
}

export default HeroTour