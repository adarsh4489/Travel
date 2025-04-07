import React from 'react'
import { BiCycling } from "react-icons/bi";
import { MdDownhillSkiing, MdLinkedCamera  } from "react-icons/md";
import { TbTrekking } from "react-icons/tb";

const AdditionalCard=({icon:Icon,heading,description})=>{
return(
    <div className='flex items-center w-[48%]'>
        <Icon className="text-4xl w-1/2"/>
        <div className='w-1/2'>
            <p className='text-xl font-semibold underline'>{heading}</p>
            <p>{description}</p>
        </div>

    </div>
)
}

const AditionalServices = () => {
  return (
    <div className=' w-[80%] px-8 mx-auto'>
        <h2 className='text-3xl font-semibold'>Our Added Touch</h2>
        <div className='my-4 flex flex-wrap'>
<AdditionalCard icon={MdLinkedCamera} heading={"Photography"} description={"Capture the magic of your trip with our photography service. Candid shots, stunning landscapes, and moments that last a lifetime."} />
<AdditionalCard icon={MdDownhillSkiing} heading={"Skiing"} description={"Glide through the snow and feel the adrenaline rush! Perfect slopes, chilled winds, and epic views await every skiing enthusiast."} />
<AdditionalCard icon={TbTrekking} heading={"Hill Trekking"} description={"Conquer new heights with guided hill treks. Hidden trails, lush greenery, and the joy of the climb — it’s a journey to remember."} />
<AdditionalCard icon={BiCycling} heading={"Cycling"} description={"Pedal through winding trails and breathtaking landscapes. Whether it’s mountains or meadows, our cycling tours promise fresh air and pure thrill."} />
        </div>
    </div>
  )
}

export default AditionalServices