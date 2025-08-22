import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMapMarkedAlt, FaSuitcaseRolling, FaPlaneDeparture, FaSmile } from "react-icons/fa";

const steps = [
  {
    icon: <FaMapMarkedAlt size={40} className="text-orange-500" />,
    title: "Choose Destination",
    desc: "Explore our curated trips & select your perfect getaway.",
  },
  {
    icon: <FaSuitcaseRolling size={40} className="text-orange-500" />,
    title: "Book Your Trip",
    desc: "Secure your booking easily through our platform.",
  },
  {
    icon: <FaPlaneDeparture size={40} className="text-orange-500" />,
    title: "Start Your Journey",
    desc: "Pack your bags and leave the rest to us!",
  },
  {
    icon: <FaSmile size={40} className="text-orange-500" />,
    title: "Enjoy & Share",
    desc: "Have a great time and leave your feedback!",
  },
];

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="py-24 bg-gray-50">
      <div className="w-[80%] md:w-[90%] lg:w-[80%] mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-12"
          data-aos="fade-down"
        >
          How It Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-md cursor-pointer
                         hover:shadow-xl hover:scale-[1.05]
                         transition-transform duration-300 ease-in-out"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="mb-6 flex justify-center">{step.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 text-center">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
