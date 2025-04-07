import React from "react";

const BillSection = () => {
    
  const Details = ({label,value}) => {
    return (
      <span className="flex items-center justify-between">
        <p className="font-semibold">{label}:</p>
        <p className="text-end font-semibold">{value}</p>
      </span>
    );
  };

  return (
    <div className="px-4 py-4 w-[35%] h-fit border space-y-4 border-y-green-950  rounded-2xl">
     
        <Details label={"Destination"} value={"spain"}/>
        <Details label={"Hotel"} value={"Hotel Name"}/>
        <Details label={"Rating"} value={"4"}/>
        <Details label={"Room"} value={"Standard Sharing Room"}/>
        <Details label={"Transfer Type"} value={"Flight"}/>
        <Details label={"Date"} value={"Date"}/>
        <hr className="w-full text-green-950 "/>
        <Details label={"1 adult fee"} value={"$560"}/>
        <Details label={"1 adult fee"} value={"$430"}/>
        <hr className="w-full  text-green-950"/>
        <Details label={"Travel Fee"} value={"$200"}/>
        <Details label={"Admin Fee"} value={"$100"}/>
        <hr className="w-full  text-green-950"/>
        <Details label={"Total"} value={"$xyz"}/>
<button className="font-semibold w-[90%] px-12 mt-8 py-2 block mx-auto text-white rounded-full bg-orange-500 hover:bg-orange-600">Send Confirmation</button>
      </div>
  );
};

export default BillSection;
