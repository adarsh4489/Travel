import HeroSection from "../Components/HeroSection";
import Categories from "../Components/Categories";
import Services from "../Components/Services";
import TestimonialCarousel from "../Components/TestimonialCarousel";
import PopularDestinations from "../Components/PopularDestinations";
import HowItWorks from "../Components/HowItWorks";
import FeaturedBlog from "../Components/FeaturedBlog"

const Home = () => {
  return (
    <div className="flex flex-col gap-16">
      <HeroSection />
      <Services />
      <HowItWorks/>
      <Categories />
      <PopularDestinations />
      <TestimonialCarousel />
      <FeaturedBlog/>

      <div></div>
    </div>
  );
};

export default Home;
