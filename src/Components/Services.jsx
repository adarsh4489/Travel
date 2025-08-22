import { FaMapMarkedAlt, FaUserTie, FaLaptop } from "react-icons/fa";
import ServiceCard from "./ServiceCard";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="w-[90%] sm:w-[85%] md:w-[80%] mx-auto px-4">
      <h1 
        className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center" 
        data-aos="fade-up"
      >
        Why Choose Us?
      </h1>

      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-8">
        <div className="flex-1 min-w-[250px] sm:min-w-[200px]" data-aos="zoom-in" data-aos-delay="150">
          <ServiceCard
            icon={FaMapMarkedAlt}
            title="Top Travel Spots"
            description="Explore top-rated places across India & beyond."
          />
        </div>

        <div className="flex-1 min-w-[250px] sm:min-w-[200px]" data-aos="zoom-in" data-aos-delay="300">
          <ServiceCard
            icon={FaUserTie}
            title="Local Travel Experts"
            description="Every trip comes with knowledgeable, friendly guides."
          />
        </div>

        <div className="flex-1 min-w-[250px] sm:min-w-[200px]" data-aos="zoom-in" data-aos-delay="400">
          <ServiceCard
            icon={FaLaptop}
            title="Easy Booking"
            description="Fast and simple trip planning in just a few clicks."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
