import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BiCycling } from "react-icons/bi";
import { MdDownhillSkiing, MdLinkedCamera } from "react-icons/md";
import { TbTrekking } from "react-icons/tb";

const services = [
  {
    icon: MdLinkedCamera,
    heading: "Photography",
    description:
      "Capture the magic of your trip with our photography service. Candid shots, stunning landscapes, and moments that last a lifetime.",
  },
  {
    icon: MdDownhillSkiing,
    heading: "Skiing",
    description:
      "Glide through the snow and feel the adrenaline rush! Perfect slopes, chilled winds, and epic views await every skiing enthusiast.",
  },
  {
    icon: TbTrekking,
    heading: "Hill Trekking",
    description:
      "Conquer new heights with guided hill treks. Hidden trails, lush greenery, and the joy of the climb — it’s a journey to remember.",
  },
  {
    icon: BiCycling,
    heading: "Cycling",
    description:
      "Pedal through winding trails and breathtaking landscapes. Whether it’s mountains or meadows, our cycling tours promise fresh air and pure thrill.",
  },
];

const AdditionalCard = ({ icon: Icon, heading, description, aosDelay }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className="flex flex-col items-center justify-center w-full bg-green-950/70 rounded-3xl gap-4 px-6 py-8 
                 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-green-900 cursor-pointer"
    >
      <div className="border-2 border-orange-600 px-4 py-4 flex items-center justify-center rounded-full transition-colors duration-300">
        <Icon className="text-5xl sm:text-6xl text-white" />
      </div>
      <div className="flex flex-col items-center gap-4">
        <p className="text-lg sm:text-xl font-semibold underline text-orange-500 text-center">
          {heading}
        </p>
        <p className="text-center text-sm sm:text-base text-white leading-relaxed">
          {description}
        </p>
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
    <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] px-4 mx-auto py-16 sm:py-20 md:py-24">
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center mb-2"
        data-aos="fade-down"
      >
        Our Signature Experiences
      </h2>
      <p
        className="text-center text-gray-600 mb-8 text-sm sm:text-base md:text-lg"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        More than destinations — we deliver moments that stay forever.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <AdditionalCard key={index} {...service} aosDelay={index * 150} />
        ))}
      </div>
    </div>
  );
};

export default AditionalServices;
