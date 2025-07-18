import React from "react";
// import nature from "../assets/nature.jpg";

const TripCard = ({ data }) => {
  const { placeName, location,image,category,nearestDestinations,galleryImages, date, price, colour } = data;

  return (
    <div className="w-full flex flex-col md:flex-row rounded-xl overflow-hidden shadow-md bg-gray-200 cursor-pointer">
      {/* Left: Image */}
      <div className="md:w-1/2 w-full p-4">
        <img
          src={image}
          alt="Trip"
          className="w-full h-full rounded-lg object-cover object-center"
        />
      </div>

      {/* Right: Details */}
      <div
        className="md:w-1/2 w-full p-6 flex flex-col justify-between"
        style={{ backgroundColor: colour }}
      >
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">{placeName}</h2>
          <h3 className="text-lg font-semibold mt-1">{location}</h3>
          <div className="flex flex-wrap gap-2">
          {
            category.map((item,index)=>{
              return <div key={index} className="px-3 py-1 rounded-xl text-white text-sm bg-orange-500">{item}</div>
            })
          }
          </div>
          <div className="flex flex-wrap gap-2">
            <p className="text-md font-bold">Nearest Destination</p>
          {
            nearestDestinations.map((item,index)=>{
              return <div key={index} className="px-3 py-1 rounded-xl text-sm text-gray italic bg-slate-300">{item}</div>
            })
          }
          </div>

          <p className="text-base mt-1 font-semibold">{date}</p>
          <p className="text-xl font-bold mt-2 text-green-950">${price}</p>
        </div>

        <div className="flex gap-4">
          <button className="mt-6 md:mt-4 w-max px-6 py-2 bg-orange-500 font-semibold rounded-lg hover:bg-orange-600 text-white transition duration-300">
          Explore More
        </button>
        <button className="mt-6 md:mt-4 w-max px-6 py-2 bg-green-900 font-semibold rounded-lg hover:bg-green-950 text-white transition duration-300">
          Book Now
        </button>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
