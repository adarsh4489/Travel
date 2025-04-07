import React from "react";
import { FaGlobeAmericas } from "react-icons/fa";
import { FcAssistant ,FcViewDetails} from "react-icons/fc";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="w-[80%] mx-auto my-12">
      <h1 className="text-2xl font-bold my-8 text-center ">Why To Choose Us?</h1>

      <div className="flex justify-center gap-8">
        <ServiceCard icon={FaGlobeAmericas} title={"Ultimate Travel Spot"} description={"We can take you to any exclusive travel destination at the most affordable prices."}/>
       <ServiceCard icon={FcAssistant} title={"Best Tour Guide"} description={"We provide the most experienced & friendly tour guide on the go."} />
       <ServiceCard icon={FcViewDetails} title={"Easy Booking"} description={"We take the minimal amount of booking money to prepare the best experience for you."}/>
      </div>
    </div>
  );
};

export default Services;
