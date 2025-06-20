import React, { useState } from "react";
import nature from "../assets/nature.jpg";

const TestimonialCard = ({item}) => {
  const {name,rating,message}=item;
  const words=message.split(" ");
  const [readMore,setReadMore]=useState(false);
  return (
    <div className="bg-green-900/60 flex flex-col justify-start  items-center gap-4 px-8 py-8 min-h-54 rounded-2xl  mx-2">
      <div className="flex items-center  gap-4 ">
        <img
          className="rounded-full w-16 h-16 object-center object-cover"
          src={nature}
          alt=""
        />
       <div className="flex flex-col">
       <p className="font-semibold">{name}</p>
       <p className="font-semibold">{rating}</p>
       </div>
      </div>
      <div className="w-full  text-justify">
        <p className="text-sm">
      {
        !readMore?(`${words.slice(0,10).join(" ")}... `):(`${message} ` )
      }
      <span className="text-orange-500" onClick={()=>setReadMore(!readMore)}>{readMore?("Read Less"):("Read More")}</span>
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
