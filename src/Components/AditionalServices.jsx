import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BiCycling } from "react-icons/bi";
import { MdDownhillSkiing, MdLinkedCamera } from "react-icons/md";
import { TbTrekking } from "react-icons/tb";

const services = [
  {
    icon: MdLinkedCamera,
    heading: "Photography",
    description: "Capture the magic of your trip with our photography service. Candid shots, stunning landscapes, and moments that last a lifetime.",
  },
  {
    icon: MdDownhillSkiing,
    heading: "Skiing",
    description: "Glide through the snow and feel the adrenaline rush! Perfect slopes, chilled winds, and epic views await every skiing enthusiast.",
  },
  {
    icon: TbTrekking,
    heading: "Hill Trekking",
    description: "Conquer new heights with guided hill treks. Hidden trails, lush greenery, and the joy of the climb — it’s a journey to remember.",
  },
  {
    icon: BiCycling,
    heading: "Cycling",
    description: "Pedal through winding trails and breathtaking landscapes. Whether it’s mountains or meadows, our cycling tours promise fresh air and pure thrill.",
  },
];

const AdditionalCard = ({ icon: Icon, heading, description, aosDelay }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className='flex flex-col items-center justify-center w-full sm:w-[48%] lg:w-[23%] bg-green-950/70 rounded-3xl gap-4 px-4 py-6 my-4
                 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-green-900 cursor-pointer'
    >
      <div className='border-2 border-orange-600 px-4 py-4 flex items-center justify-center rounded-full transition-colors duration-300 group-hover:border-orange-400'>
        <Icon className="text-6xl text-white" />
      </div>
      <div className='flex flex-col items-center gap-4'>
        <p className='text-xl font-semibold underline text-orange-500 text-center'>{heading}</p>
        <p className='text-center text-sm text-white'>{description}</p>
      </div>
    </div>
  );
};

const AditionalServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className='w-[90%]   px-4 mx-auto py-24'>
      <h2 className='text-3xl font-bold text-gray-800 text-center mb-2' data-aos="fade-down">
        Our Signature Experiences
      </h2>
      <p className='text-center text-gray-600 mb-6 text-lg' data-aos="fade-up" data-aos-delay="100">
        More than destinations — we deliver moments that stay forever.
      </p>
      <div className='my-4 flex flex-wrap gap-6 justify-center'>
        {services.map((service, index) => (
          <AdditionalCard key={index} {...service} aosDelay={index * 150} />
        ))}
      </div>
    </div>
  );
};

export default AditionalServices;
