import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import { Pagination, Autoplay, Navigation } from "swiper/modules";

import { testimonials } from "../Utils/constants";
import TestimonialCard from "./TestimonialCard";

const TestimonialCarousel = () => {
  return (
    <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        What Our Travelers Say
      </h2>
      <div>
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1} // default for mobile
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1, 
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2, 
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 3, 
              spaceBetween: 30,
            },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide
              key={item.id}
              className="overflow-visible py-8"
            >
              <div className="transition-transform duration-300 hover:scale-[1.05] hover:shadow-lg">
                <TestimonialCard item={item} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
