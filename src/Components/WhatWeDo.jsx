import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import ServiceCard from './ServiceCard';
import { FaGlobeAmericas, FaDollarSign, FaBus, FaBuilding } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";

const WhatWeDo = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="w-full mx-auto py-24 px-4 bg-gray-50">
      <div className="mb-12 w-[80%] mx-auto" data-aos="fade-down">
        <h3 className="text-3xl font-bold text-gray-800 mb-4 text-center">What Sets Us Apart</h3>
        <p className="text-gray-700 text-center" data-aos="fade-up">
          We make sure our clients are having the best vacation of their life. We take care of
          everything they might need on the tour and offer flexibility all around while choosing
          packages.
        </p>
      </div>

      <div className="flex justify-center gap-4 w-[80%] mx-auto">
        <div data-aos="fade-up" data-aos-delay="100" className='w-[25%]'>
          <ServiceCard
            icon={FaDollarSign}
            title={"Affordable Pricing"}
            description={
              "Enjoy unforgettable travel experiences at the best prices, with no hidden costs—quality trips within your budget!"
            }
          />
        </div>

        <div data-aos="fade-up" data-aos-delay="200" className='w-[25%]'>
          <ServiceCard
            icon={FaBus}
            title={"Luxury Transport"}
            description={
              "Experience premium travel with our luxury transport services, ensuring comfort, style, and seamless journeys to your destination."
            }
          />
        </div>

        <div data-aos="fade-up" data-aos-delay="300" className='w-[25%]'>
          <ServiceCard
            icon={MdSecurity}
            title={"High Security"}
            description={
              "Your safety is our priority—secure bookings, trusted partners, and 24/7 support for a worry-free journey."
            }
          />
        </div>

        <div data-aos="fade-up" data-aos-delay="400" className='w-[25%]'>
          <ServiceCard
            icon={FaBuilding}
            title={"High Class Hotels"}
            description={
              "Stay in top-rated luxury hotels, offering world-class amenities and unparalleled comfort for a perfect getaway."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
