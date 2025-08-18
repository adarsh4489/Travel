  import { useEffect } from "react";
  import { Swiper, SwiperSlide } from "swiper/react";
  import "swiper/css";
  import "swiper/css/navigation";
  import { Navigation } from "swiper/modules";
  import AOS from "aos";
  import "aos/dist/aos.css";
  import { tripData } from "../Utils/constants";

  const PopularDestinations = () => {
    useEffect(() => {
      AOS.init({
        duration: 700,
        easing: "ease-in-out",
        once: true,
        delay: 100,
      });
    }, []);

    const popularTrips = tripData
      .filter(
        (trip) =>
          trip.tags?.includes("Popular") || trip.tags?.includes("Bestseller")
      )
      .slice(0, 5);

    return (
      <div className="px-4 w-full mx-auto py-24 bg-gray-50">
        <h2
          className="text-3xl font-bold text-gray-800 mb-8 text-center"
          data-aos="fade-down"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          Popular Packages Our Travelers Love
        </h2>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={32}
          slidesPerView={3}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 },
          }}
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          className="popular-swiper w-[80%]"
        >
          {popularTrips.map((trip, index) => (
            <SwiperSlide
              key={trip.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="overflow-visible"
            >
              <div className="px-2 py-8">
                <div
                  className="bg-white rounded-xl shadow-md overflow-visible cursor-pointer
                            hover:shadow-xl hover:scale-[1.05] hover:-rotate-1
                            transition-transform duration-300 ease-in-out"
                >
                  <div className="overflow-hidden rounded-t-xl">
                    <img
                      src={trip.image}
                      alt={trip.placeName}
                      className="w-full h-48 object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-orange-500">
                      {trip.placeName}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{trip.location}</p>
                    <p className="text-sm text-orange-500 font-bold mt-3">
                      From ₹{trip.price}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">{trip.date}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };

  export default PopularDestinations;
