import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OurStorySection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="w-[90%] sm:w-[85%] md:w-[80%] mx-auto py-8 sm:py-12 px-4 sm:px-6 md:px-8">
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8 sm:mb-12"
        data-aos="fade-down"
      >
        Our Story
      </h2>

      <div
        className="text-gray-700 leading-relaxed mx-auto text-justify space-y-4 sm:space-y-6 md:space-y-8 max-w-4xl"
        data-aos="fade-up"
      >
        <p data-aos="fade-up" data-aos-delay="100" className="text-sm sm:text-base">
          Founded by a group of passionate explorers, our mission is to turn every trip into a
          memory. What started as a small idea among friends has now grown into a trusted travel
          platform loved by thousands of travelers across the world.
        </p>

        <p data-aos="fade-up" data-aos-delay="200" className="text-sm sm:text-base">
          From breathtaking landscapes to hidden gems, we focus on curating unforgettable travel
          experiences that are safe, affordable, and filled with wonder. Our journey is fueled by
          your joy and satisfaction.
        </p>

        <h3
          className="text-lg sm:text-xl md:text-2xl font-semibold text-green-900 my-4 sm:my-6"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Plan Smart, Travel Smarter
        </h3>

        <p data-aos="fade-up" data-aos-delay="400" className="text-sm sm:text-base">
          At Bhraman, we specialize in crafting personalized travel experiences that cater to every
          kind of traveler. From breathtaking destinations to seamless itinerary planning, we ensure
          hassle-free and memorable journeys. Our expert team handpicks the best accommodations,
          activities, and guides to make your trip extraordinary. With a commitment to affordability,
          safety, and comfort, we make exploring the world easier than ever. Whether it’s an
          adventure-packed getaway or a relaxing retreat, we turn your travel dreams into reality!
        </p>
      </div>
    </section>
  );
};

export default OurStorySection;
