// HowItWorks.jsx
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
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">How It Works</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="mb-4 flex justify-center">{step.icon}</div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
