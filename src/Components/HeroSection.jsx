import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router";

const HeroSection = () => {
  const navigate=useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
      once: true,
    });
  }, []);

  return (
    <div
      className="bg-travel w-[90%] h-[70vh] mx-auto rounded-xl bg-cover bg-center"
      data-aos="zoom-in"
    >
      <div className="flex w-full lg:w-[40%] h-full rounded-lg items-center justify-center bg-[#142316]/30 backdrop-blur-sm">
        <div
          className="flex flex-col gap-3 h-full justify-center px-6"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <h3 className="text-4xl text-white font-semibold font-playfair tracking-wide">
            Explore
          </h3>
          <h3 className="text-4xl text-orange-500 font-semibold tracking-wide">
            The World
          </h3>
          <h3 className="text-4xl text-white font-semibold tracking-wide">
            With Us
          </h3>
          <p className="text-white text-sm mt-2">
            Discover possibilities of traveling!
          </p>
          <button
            className="mt-4 bg-orange-600 hover:bg-orange-500 transition-all duration-300 
                       cursor-pointer rounded-full w-[60%] text-white px-4 py-2 font-semibold shadow-lg"
           onClick={()=>navigate("/deals")}>
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
