import React from "react";
import aboutBg from "../assets/about bg.jpg";
import WhatWeDo from "../Components/WhatWeDo";
import AditionalServices from "../Components/AditionalServices";
import Testimonial from "../Components/Testimonial";
import Cta from "../Components/Cta";

const About = () => {
  return (
    <div className={`w-full py-4 mx-auto`}>
      <div
        className={`w-[90%] mx-auto rounded-xl  flex flex-col py-36  justify-center items-center bg-center bg-no-repeat bg-cover gap-4`}
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <h2 className="text-4xl font-semibold text-orange-500">
          Know More About Us
        </h2>
        <p className="text-sm italic text-white">
          Making travel effortless and memorable!
        </p>
        <p className="w-[50%] text-center text-white">
          This is a great site for everything around the home, and it also has a
          useful You can see the best products in each category and they even to
          back up he information they are giving you.
        </p>
      </div>
      <WhatWeDo/>
      <AditionalServices/>
      <Cta/>
      <Testimonial/>
    </div>
  );
};

export default About;
