import React, { useEffect } from "react";
import { bookingAccordianData, covidAccordianData, paymentAccordianData } from "../Utils/constants";
import Accordian from "../Components/Accordian";
import AOS from "aos";
import "aos/dist/aos.css";

const Faq = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="w-[90%] max-w-6xl my-16 mx-auto space-y-12">
      <h2 className="text-3xl font-bold text-gray-800">FAQ — We’ve Got You Covered</h2>
      <p className="text-orange-500 font-medium italic">We’re here to make your travel planning easier. Browse our FAQs below.</p>
      <div data-aos="fade-up" className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Bookings</h2>
        {bookingAccordianData.map((data, index) => (
          <Accordian data={data} key={index} />
        ))}
      </div>

      <div data-aos="fade-up " className="space-y-4"> 
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Payments</h2>
        {paymentAccordianData.map((data, index) => (
          <Accordian data={data} key={index} />
        ))}
      </div>

      <div data-aos="fade-up" className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Covid</h2>
        {covidAccordianData.map((data, index) => (
          <Accordian data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
