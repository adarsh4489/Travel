import HeroSection from "../Components/HeroSection";
import Categories from "../Components/Categories";
// import HeroTour from "../Components/HeroTour";
import Services from "../Components/Services";
import TestimonialCarousel from "../Components/TestimonialCarousel";
import PopularDestinations from "../Components/PopularDestinations";

const Home = () => {
  return (
    <div className="mx-auto my-4">
      <HeroSection />
      <Services />
      <Categories />
      <PopularDestinations />
      {/* <HeroTour /> */}
      <TestimonialCarousel />

      <div></div>
    </div>
  );
};

export default Home;
