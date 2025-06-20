import React from 'react'
import { BiCycling } from "react-icons/bi";
import { MdDownhillSkiing, MdLinkedCamera  } from "react-icons/md";
import { TbTrekking } from "react-icons/tb";

const AdditionalCard=({icon:Icon,heading,description})=>{
return(
    <div className='flex flex-col items-center justify-center w-[25%] bg-green-950/70 rounded-3xl gap-4 px-2 py-4 my-4'>
        <div className='border-2 border-orange-600 px-4 py-4 flex items-center justify-center rounded-full'>
        <Icon className="text-6xl text-white "/>
        </div>
        <div className='flex flex-col items-center gap-4'>
            <p className='text-xl font-semibold underline text-orange-500'>{heading}</p>
            <p className='text-center text-sm text-white px-2'>{description}</p>
        </div>

    </div>
)
}

const AditionalServices = () => {
  return (
    <div className=' w-[80%] px-8 mx-auto mb-12'>
        <h2 className='text-3xl underline text-green-900 font-semibold'>Our Added Touch</h2>
        <div className='my-4 flex gap-4'>
<AdditionalCard icon={MdLinkedCamera} heading={"Photography"} description={"Capture the magic of your trip with our photography service. Candid shots, stunning landscapes, and moments that last a lifetime."} />
<AdditionalCard icon={MdDownhillSkiing} heading={"Skiing"} description={"Glide through the snow and feel the adrenaline rush! Perfect slopes, chilled winds, and epic views await every skiing enthusiast."} />
<AdditionalCard icon={TbTrekking} heading={"Hill Trekking"} description={"Conquer new heights with guided hill treks. Hidden trails, lush greenery, and the joy of the climb — it’s a journey to remember."} />
<AdditionalCard icon={BiCycling} heading={"Cycling"} description={"Pedal through winding trails and breathtaking landscapes. Whether it’s mountains or meadows, our cycling tours promise fresh air and pure thrill."} />
        </div>
    </div>
  )
}

export default AditionalServices