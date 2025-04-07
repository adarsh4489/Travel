import React from "react";
// import nature from "../assets/nature.jpg"

const OfferCard = ({data}) => {
    // console.log(data);
  const { type, price, place,image,bgcolor } = data;
  return (
    <div className="text-white relative w-[30%] cursor-pointer">
      <img src={image} alt="" className="rounded-xl object-center object-cover h-[35vh] w-full " />
      <div className={`absolute w-[80%] left-1/2 -translate-x-1/2  -bottom-16 bg-${bgcolor} px-6 py-6 rounded-lg`}>
        <h5 className="font-semibold text-xl">{type}</h5>
        <h4 className="font-semibold ">{place}</h4>
        <p>from <span className=" font-semibold">{` $${price}`}</span></p>
      </div>
    </div>
  );
};

export default OfferCard;
