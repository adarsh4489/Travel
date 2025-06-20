import React from "react";
import nature from "../assets/nature.jpg";

const TripCard = ({ data }) => {
  const { placeName, location,image,category,nearestDestinations,galleryImages, date, price, colour } = data;

  return (
    <div className="w-full flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-md cursor-pointer">
      {/* Left: Image */}
      <div className="md:w-1/2 w-full h-[250px]">
        <img
          src={image}
          alt="Trip"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Right: Details */}
      <div
        className="md:w-1/2 w-full p-6 flex flex-col justify-between"
        style={{ backgroundColor: colour }}
      >
        <div>
          <h2 className="text-2xl font-bold">{placeName}</h2>
          <h3 className="text-lg font-semibold mt-1">{location}</h3>
          <div className="flex flex-wrap gap-2">
          {
            category.map((item,index)=>{
              return <div key={index} className="px-3 py-1 rounded-xl text-white bg-orange-500">{item}</div>
            })
          }
          </div>
          <div className="flex flex-wrap gap-2">
            <p>Nearest Destinat</p>
          {
            category.map((item,index)=>{
              return <div key={index} className="px-3 py-1 rounded-xl text-white bg-orange-500">{item}</div>
            })
          }
          </div>

          <p className="text-base mt-1">{date}</p>
          <p className="text-xl font-bold mt-2">${price}</p>
        </div>

        <button className="mt-6 md:mt-4 w-max px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-black hover:text-white transition duration-300">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default TripCard;
