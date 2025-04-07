import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-travel w-[90%] h-[70vh] mx-auto  rounded-xl">
      <div className="flex w-full lg:w-[40%] h-full rounded-lg items-center justify-center bg-[#142316]/60">
        <div className="flex flex-col gap-2 h-full justify-center">
          <h3 className="text-4xl text-white font-semibold ">Explore</h3>
          <h3 className="text-4xl text-orange-600 font-semibold">The World</h3>
          <h3 className="text-4xl text-white font-semibold">With US</h3>
          <p className="text-white">Discover Posibilities of Traveling!</p>
          <button className="bg-orange-600 hover:bg-orange-500 cursor-pointer rounded-full w-[60%] text-white px-2 py-2 ">
            Explore
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default HeroSection;
