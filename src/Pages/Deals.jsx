import { tripData } from "../Utils/constants";
import { useEffect, useState } from "react";
import TripCard from "../Components/TripCard";
import SideFilterSection from "../Components/SideFilterSection";
import PopularDestinations from "../Components/PopularDestinations";
import AOS from "aos";
import "aos/dist/aos.css";

const Deals = () => {
  const [filterTags, setFilterTags] = useState([]);
  const [filteredData, setFilteredData] = useState(tripData);

  useEffect(() => {
    if (filterTags.length === 0) setFilteredData(tripData);
    else {
      const filtered = tripData.filter((trip) =>
        filterTags.some((tag) => trip.tags.includes(tag))
      );
      setFilteredData(filtered);
    }
  }, [filterTags]);

  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="my-4 w-full">
      <div
        className="h-[70vh] w-[98%] mx-auto rounded-xl bg-slate-200 flex items-center justify-center
        text-2xl font-semibold text-gray-700 select-none"
        data-aos="fade-up"
      >
        This is a hero section inside this we will be putting sale and offers banner.
      </div>

      <PopularDestinations />

      <div className="flex gap-4 my-8 w-[95%] mx-auto">
        <SideFilterSection setFilterTags={setFilterTags} filterTags={filterTags} />

        <div className="w-3/4 px-4 md:px-8">
          <h5
            className="text-xl font-bold mb-6"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            {filteredData.length} Trips Available
          </h5>

          <div
            className="flex flex-col gap-8 my-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {filteredData.map((data) => (
              <TripCard data={data} key={data.id} />
            ))}
          </div>

          {/* <button
            className="mt-8 px-6 py-3 bg-orange-500 hover:bg-orange-600 block mx-auto rounded-full text-white font-semibold transition-transform transform hover:scale-105 shadow-lg"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            Load More
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Deals;
