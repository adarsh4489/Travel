import React from "react";
import { offers } from "../Utils/constants";
import OfferCard from "./OfferCard";

const Offers = () => {
  
  return (
    <div className="w-[90%] mx-auto py-8 px-4 ">
      <h3 className="font-bold text-2xl text-center ">Best Offers for this week</h3>
      <div className="flex gap-2 items-center justify-center py-8" >
     {
        offers.map((data)=>{
            return(
                    <OfferCard key={data.id} data={data}/>
                )
            })
     }
            </div>
    </div>
  );
};

export default Offers;
