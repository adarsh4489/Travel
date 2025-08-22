import React from "react";

const CategoriesCard = ({ data }) => {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col w-[90%] md:w-[40%] lg:w-[30%] rounded-xl py-6 bg-[#DFD9CE] text-orange-600 hover:text-black hover:bg-orange-300 
                 items-center justify-center cursor-pointer
                 transition-colors duration-300 ease-in-out
                 shadow-md hover:shadow-xl
                 transform hover:scale-105"
    >
      <div className="flex items-center justify-center w-24 rounded-full h-24 bg-white">
        <data.icon className="text-6xl z-10" />
      </div>
      <h3 className="text-lg font-semibold text-black z-10 mt-4">{data.title}</h3>
      <p className="text-sm px-4 text-slate-700 text-center">{data.description}</p>
    </div>
  );
};

export default CategoriesCard;
  