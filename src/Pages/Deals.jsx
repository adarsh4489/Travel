import { tripData } from "../Utils/constants";
import { useEffect, useState } from "react";
import TripCard from "../Components/TripCard";
import SideFilterSection from "../Components/SideFilterSection";
import PopularDestinations from "../Components/PopularDestinations";

const Deals = () => {
  const [filterTags,setFilterTags]=useState([]);
  const [filteredData,setFilteredData]=useState(tripData);
  useEffect(()=>{
if(filterTags.length===0)
  setFilteredData(tripData);
else{
  const filtered=tripData.filter((trip)=>filterTags.some((tag)=>trip.tags.includes(tag)));
  setFilteredData(filtered);
}
},[filterTags])
console.log(filteredData,filterTags)
  
  return (
    <div className="my-4 w-full">
      <div className="h-[70vh] w-[98%] mx-auto rounded-xl bg-slate-200 ">
        This is a hero section inside this we will be putting sale and offers
        banner.
      </div>
      <PopularDestinations />

      <div className="flex gap-4 my-8 w-[95%] mx-auto ">
        <SideFilterSection  setFilterTags={setFilterTags} filterTags={filterTags}/>

        <div className="w-3/4  px-4 md:px-8 ">
          <h5 className="text-xl font-bold ">
            {filteredData.length} Trips Available
          </h5>

          <div className="flex flex-col gap-8 my-4">
            {filteredData.map((data) => (
                <TripCard data={data} key={data.id}/>
            ))}
          </div>

          <button className="mt-8 px-4 py-2 bg-orange-500 hover:bg-orange-600 block mx-auto rounded-full text-white font-semibold">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Deals;
