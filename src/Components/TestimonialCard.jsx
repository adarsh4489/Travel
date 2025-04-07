import React from "react";
import nature from "../assets/nature.jpg";

const TestimonialCard = () => {
  return (
    <div className="bg-green-900/30 flex flex-col justify-between gap-4 px-8 py-8 rounded-2xl w-96 ">
      <div className="flex items-center  gap-4 ">
        <img
          className="rounded-full w-16 h-16 object-center object-cover"
          src={nature}
          alt=""
        />
       <div className="flex flex-col">
       <p className="font-semibold">Adarsh Kumar Mishra</p>
       <p className="font-semibold">4.6</p>
       </div>
      </div>
      <div className="w-full  text-justify">
        <p className="text-sm">
          Description Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Nisi sed ratione incidunt sequi, possimus ipsam quia cumque excepturi
          eos atque porro ab quae accusamus? Totam impedit dolore rerum libero
          quo!
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
