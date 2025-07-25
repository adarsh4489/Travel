import { tripData } from "../Utils/constants";
import TripCard from "../Components/TripCard";
import { Link } from "react-router-dom"; // use `react-router-dom` instead of `react-router`
import SideFilterSection from "../Components/SideFilterSection";

const Deals = () => {
  return (
    <div className="my-4 w-full">
      <div className="h-[70vh] w-[98%] mx-auto rounded-xl bg-slate-200 ">
        This is a hero section inside this we will be putting sale and offers
        banner.
      </div>

      <div className="flex gap-4 my-8 w-[95%] mx-auto">
        <SideFilterSection />

        <div className="w-3/4  px-4 md:px-8 overflow-y-scroll h-[100vh]">
          <h5 className="text-xl font-bold ">
            {tripData.length} Trips Available
          </h5>

          <div className="flex flex-col gap-8 my-4">
            {tripData.map((data) => (
              <Link to={`/deals/${data.id}`} key={data.id}>
                <TripCard data={data} />
              </Link>
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
