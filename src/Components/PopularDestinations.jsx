import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { tripData } from "../Utils/constants";

const PopularDestinations = () => {
  const popularTrips = tripData
    .filter(
      (trip) =>
        trip.tags?.includes("popular") || trip.tags?.includes("bestseller")
    )
    .slice(0, 5);

  return (
    <div className="mt-10 px-4 w-[80%] mx-auto ">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Popular Packages Our Travelers Love
      </h2>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          480: { slidesPerView: 1 },
        }}
        className="popular-swiper"
      >
        {popularTrips.map((trip) => (
          <SwiperSlide key={trip.id}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <img
                src={trip.image}
                alt={trip.placeName}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{trip.placeName}</h3>
                <p className="text-sm text-gray-500">{trip.location}</p>
                <p className="text-sm text-orange-500 font-bold mt-2">
                  From ₹{trip.price}
                </p>
                <p className="text-xs text-gray-400 mt-1">{trip.date}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularDestinations;
