import React from 'react'
import ServiceCard from './ServiceCard'
import { FaGlobeAmericas } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { FaDollarSign,FaBus ,FaBuilding  } from "react-icons/fa";


const WhatWeDo = () => {
  return (
    <div className='w-[80%] mx-auto py-12 px-8'>
        <h1 className='text-3xl font-semibold text-green-900 my-4'>Choose Wise Trips for all your travels</h1>
        <p className='text-justify'>At Bhraman, we specialize in crafting personalized travel experiences that cater to every kind of traveler. From breathtaking destinations to seamless itinerary planning, we ensure hassle-free and memorable journeys. Our expert team handpicks the best accommodations, activities, and guides to make your trip extraordinary. With a commitment to affordability, safety, and comfort, we make exploring the world easier than ever. Whether it’s an adventure-packed getaway or a relaxing retreat, we turn your travel dreams into reality!</p>

        <div className='my-12'>
          <h3 className='text-3xl font-semibold text-green-900 my-4'>Why Us Not Others</h3>
          <p className='text-justify'>We make sure our clients are having the best vacation of their life. We take care of everything they might need on the tour and offer flexibility all around while choosing packages.</p>

          <div className='flex items-center justify-evenly gap-2 my-4'>
            <ServiceCard icon={FaDollarSign} title={"Affordable Pricing"} description={"Enjoy unforgettable travel experiences at the best prices, with no hidden costs—quality trips within your budget!"}/>
            <ServiceCard icon={FaBus } title={"Luxury Transport"} description={"Experience premium travel with our luxury transport services, ensuring comfort, style, and seamless journeys to your destination."}/>
            <ServiceCard icon={MdSecurity} title={"High Security"} description={"Your safety is our priority—secure bookings, trusted partners, and 24/7 support for a worry-free journey."}/>
            <ServiceCard icon={FaBuilding } title={"High Class Hotels"} description={"Stay in top-rated luxury hotels, offering world-class amenities and unparalleled comfort for a perfect getaway."}/>
          </div>
        </div>
        
    </div>
  )
}

export default WhatWeDo