import React, { useEffect } from 'react';
import icy from "../assets/icy.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router';

const Cta = () => {
  const navigate=useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div
      className='h-[65vh] bg-bottom space-y-6 bg-cover bg-fixed bg-no-repeat rounded-xl'
      style={{ backgroundImage: `url(${icy})` }}
    >
      <div
        className='flex flex-col bg-white/50 p-24 h-[65vh] gap-6 w-[40%]'
      >
        <p
          className='text-orange-500 font-semibold'
          data-aos="fade-right"
        >
          Together we can Make Memories
        </p>
        <h1
          className='text-3xl w-[90%] font-bold'
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Are You Ready To Join Us On Your Next Trip?
        </h1>
        <button
          className='rounded-full bg-orange-500 text-white hover:bg-amber-600 px-4 py-2 font-semibold w-fit'
          data-aos="zoom-in"
          data-aos-delay="400"
          onClick={()=>navigate("/deals")}>
          Discover Now
        </button>
      </div>
    </div>
  );
};

export default Cta;
