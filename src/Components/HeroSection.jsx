import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router";

const HeroSection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
      once: true,
    });
  }, []);

  return (
    <div
      className="bg-travel w-full sm:w-[95%] md:w-[90%] h-[60vh] sm:h-[70vh] lg:h-[80vh] mx-auto rounded-xl bg-cover bg-center mt-4 sm:mt-8"
      data-aos="zoom-in"
    >
      <div className="flex w-full md:w-[40%] h-full rounded-lg items-center justify-center bg-[#142316]/30 backdrop-blur-sm">
        <div
          className="flex flex-col gap-3 h-full justify-center text-center md:text-left px-4 sm:px-6"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-semibold font-playfair tracking-wide">
            Explore
          </h3>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-orange-500 font-semibold tracking-wide">
            The World
          </h3>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-semibold tracking-wide">
            With Us
          </h3>
          <p className="text-white text-xs sm:text-sm md:text-base mt-2">
            Discover possibilities of traveling!
          </p>
          <button
            className="mt-4 bg-orange-600 hover:bg-orange-500 transition-all duration-300 
                       cursor-pointer rounded-full w-fit mx-auto md:mx-0 text-white 
                       px-6 sm:px-8 py-2 text-sm sm:text-base font-semibold shadow-lg"
            onClick={() => navigate("/deals")}
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
