import { FaMapMarkedAlt,FaUserTie,FaLaptop    } from "react-icons/fa";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="w-[80%] mx-auto my-12">
      <h1 className="text-2xl font-bold my-8 text-center ">Why To Choose Us?</h1>

      <div className="flex justify-center gap-8">
        <ServiceCard icon={FaMapMarkedAlt } title={"Top Travel Spots"} description={"Explore top-rated places across India & beyond."}/>
       <ServiceCard icon={FaUserTie } title={"Local Travel Experts"} description={"Every trip comes with knowledgeable, friendly guides."} />
       <ServiceCard icon={FaLaptop } title={"Easy Booking"} description={"Fast and simple trip planning in just a few clicks."}/>
      </div>
    </div>
  );
};

export default Services;
