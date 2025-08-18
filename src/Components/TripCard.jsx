import { FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";

const TripCard = ({ data }) => {
  const {
    placeName,
    location,
    image,
    category,
    nearestDestinations,
    date,
    price,
    colour,
    averageRating,
  } = data;
  const navigate = useNavigate();

  useEffect(() => {
    AOS.refresh(); // Refresh AOS on new component mount
  }, []);

  return (
    <div
      className="w-full flex flex-col md:flex-row rounded-xl overflow-hidden shadow-md bg-gray-200 cursor-pointer
       hover:shadow-xl hover:scale-[1.02] transition-transform duration-300"
      data-aos="fade-up"
      onClick={() => navigate(`/deals/${data.id}`)}
    >
      {/* Left: Image */}
      <div className="md:w-1/2 w-full p-4 overflow-hidden rounded-lg">
        <img
          src={image}
          alt="Trip"
          className="w-full h-full object-cover object-center rounded-lg transform transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Right: Details */}
      <div
        className="md:w-1/2 w-full p-6 flex flex-col justify-between"
        style={{ backgroundColor: colour }}
      >
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">{placeName}</h2>
          <div className="flex gap-4 items-center">
            <h3 className="text-lg font-semibold">{location}</h3>
            <span className="flex items-center gap-1 text-yellow-500">
              <h3 className="text-lg text-green-900 font-bold">{averageRating}</h3>
              <FaStar />
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {category.map((item, index) => (
              <div
                key={index}
                className="px-3 py-1 rounded-xl text-white text-sm bg-orange-500 select-none"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            <p className="text-md font-bold select-none">Nearest Destination</p>
            {nearestDestinations.map((item, index) => (
              <div
                key={index}
                className="px-3 py-1 rounded-xl text-sm italic text-gray-700 bg-slate-300 select-none"
              >
                {item}
              </div>
            ))}
          </div>

          <p className="text-base mt-1 font-semibold">{date}</p>
          <p className="text-xl font-bold mt-2 text-green-950">${price}</p>
        </div>

        <div className="flex gap-4 mt-6 md:mt-4">
          <button
            className="w-max px-6 py-2 bg-orange-500 font-semibold rounded-lg hover:bg-orange-600 text-white transition duration-300 shadow-md hover:shadow-lg"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/deals/${data.id}`);
            }}
          >
            Explore More
          </button>
          <button
            className="w-max px-6 py-2 bg-green-900 font-semibold rounded-lg hover:bg-green-950 text-white transition duration-300 shadow-md hover:shadow-lg"
            onClick={(e) => {
              e.stopPropagation();
              navigate("/booking", { state: { data } });
            }}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
