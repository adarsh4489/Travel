import { testimonials } from "../Utils/constants";
import TestimonialCard from "./TestimonialCard";
import Slider from "react-slick";

const TestimonialCarousel = () => {
    const settings = {

      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
          },
        },
      ]
    };
  
    return (
      <div className="w-[80%] mx-auto py-12">
        <h2 className="text-3xl font-semibold text-green-900 underline text-center ">What Our Travelers Say</h2>
        <div className="my-8">
        <Slider {...settings}>
          {testimonials.map((item) => (
          <TestimonialCard item={item} key={item.id}/>
          ))}
        </Slider>
        </div>
      </div>
    );
  };
  
  export default TestimonialCarousel;