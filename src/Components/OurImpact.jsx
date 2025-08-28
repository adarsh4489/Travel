import React, { useEffect } from "react";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";

const impactStats = [
  {
    id: 1,
    number: 10000,
    suffix: "+",
    label: "Happy Travelers",
  },
  {
    id: 2,
    number: 50,
    suffix: "+",
    label: "Destinations Covered",
  },
  {
    id: 3,
    number: 4.9,
    suffix: "★",
    label: "Average Rating",
  },
  {
    id: 4,
    number: 7,
    suffix: "+",
    label: "Of Experience",
  },
];

const OurImpactSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="bg-green-50 py-16 sm:py-20 md:py-24">
      <div className="w-[95%] sm:w-[90%] max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8 sm:mb-12"
          data-aos="fade-down"
        >
          Our Impact
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          {impactStats.map((stat, index) => (
            <div
              key={stat.id}
              className="flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-500">
                <CountUp
                  start={0}
                  end={stat.number}
                  duration={4}
                  decimals={stat.number % 1 !== 0 ? 1 : 0}
                  suffix={stat.suffix}
                />
              </h3>
              <p className="text-gray-700 mt-2 text-sm sm:text-base md:text-lg font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurImpactSection;
