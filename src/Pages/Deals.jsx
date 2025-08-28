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
  const [visibleCount, setVisibleCount] = useState(10); // 👈 initially 10

  useEffect(() => {
    if (filterTags.length === 0) setFilteredData(tripData);
    else {
      const filtered = tripData.filter((trip) =>
        filterTags.some((tag) => trip.tags.includes(tag))
      );
      setFilteredData(filtered);
    }
    setVisibleCount(10); // 👈 reset visible count whenever filter changes
  }, [filterTags]);

  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-in-out", once: true });
  }, []);

  // Handle dropdown change (for mobile)
  const handleDropdownChange = (e) => {
    const value = e.target.value;
    if (value === "all") setFilterTags([]);
    else setFilterTags([value]);
  };

  // Collect all unique tags for dropdown
  const allTags = [...new Set(tripData.flatMap((trip) => trip.tags))];

  // Load More function
  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 10, filteredData.length));
  };

  return (
    <div className="my-4 w-full">
      {/* Hero Section */}
      <div
        className="h-[40vh] relative sm:h-[50vh] md:h-[70vh] w-[95%] md:w-full mx-auto rounded-xl bg-slate-200 
        flex items-center justify-center text-lg sm:text-xl md:text-2xl font-semibold 
        text-gray-700 select-none text-center px-4"
        data-aos="fade-up"
      >
        <img
          src="https://s3.amazonaws.com/thumbnails.venngage.com/template/cfcc0837-f39f-4df6-9667-89c07e90872a.png"
          className="absolute inset-0 w-full h-full"
          alt=""
        />
      </div>

      {/* Popular Destinations */}
      <PopularDestinations />

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 my-8 w-[95%] mx-auto md:overflow-y-scroll md:min-h-[120vh]">
        {/* Sidebar Filters (Desktop & Tablet) */}
        <div className="hidden lg:block w-full lg:w-[30%] order-2 lg:order-1">
          <SideFilterSection
            setFilterTags={setFilterTags}
            filterTags={filterTags}
          />
        </div>

        {/* Dropdown Filters (Mobile) */}
        <div className="block lg:hidden w-full mb-4">
          <label className="text-gray-700 font-semibold mb-2 block">
            Filter Trips
          </label>
          <select
            onChange={handleDropdownChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
            value={filterTags.length > 0 ? filterTags[0] : "all"}
          >
            <option value="all">All Trips</option>
            {allTags.map((tag, idx) => (
              <option key={idx} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>

        {/* Trip List */}
        <div className="w-full lg:w-3/4 px-2 sm:px-4 md:px-6 order-1 lg:order-2">
          <h5
            className="text-lg sm:text-xl font-bold mb-6 text-center lg:text-left"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            {filteredData.length} Trips Available
          </h5>

          <div
            className="flex flex-col gap-6 sm:gap-8 my-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {filteredData.slice(0, visibleCount).map((data) => (
              <TripCard data={data} key={data.id} />
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < filteredData.length && (
            <button
              onClick={handleLoadMore}
              className="mt-8 px-6 py-3 bg-orange-500 hover:bg-orange-600 block mx-auto rounded-full text-white font-semibold 
              transition-transform transform hover:scale-105 shadow-lg"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Deals;
