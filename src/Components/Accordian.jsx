import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const Accordian = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { question, answer } = data;

  return (
    <div
      className="rounded-2xl bg-[#DFD9CE] shadow-sm hover:shadow-md transition-shadow duration-300"
      data-aos="fade-up"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 px-6 cursor-pointer transition-colors duration-300"
      >
        <p className="font-medium text-left text-green-900">{question}</p>
        <FaAngleDown
          className={`text-xl transform transition-transform duration-300 ${
            isOpen ? "rotate-180 text-orange-600" : "rotate-0 text-green-900"
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 px-6 ${
          isOpen ? "max-h-[500px] py-3" : "max-h-0"
        }`}
      >
        <p className="text-gray-700 text-sm text-justify">{answer}</p>
      </div>
    </div>
  );
};

export default Accordian;
