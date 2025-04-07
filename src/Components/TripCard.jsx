import React from "react";
import nature from "../assets/nature.jpg";

const TripCard = ({ data }) => {
  const { placeName, location, date, price, colour } = data;
  return (
    <div className="flex cursor-pointer  flex-col h-[22rem] rounded-2xl">
      <img src={nature} alt="" className="h-2/3 rounded-2xl" />
      <div className={`w-full rounded-2xl h-2/5 bg-${colour}  px-4 py-4`}>
        <h2 className="font-bold">{placeName}</h2>
        <h2 className="font-semibold">{location}</h2>
        <h2 className="font-semibold">{date}</h2>
        <h2 className="font-bold">${price}</h2>
      </div>
    </div>
  );
};

export default TripCard;
