import React from 'react'
import HeroSection from '../Components/HeroSection';
import Categories from '../Components/Categories';
import HeroTour from '../Components/HeroTour';
import Package from '../Components/Package';
import Offers from '../Components/Offers';
import Services from '../Components/Services';
import TestimonialCarousel from "../Components/TestimonialCarousel";

const Home = () => {
  return (
    <div className='mx-auto my-4'>
      <HeroSection/>
      <Services/>
      <Categories/>
      <Package/>
      <Offers/>
      <HeroTour/>
      <TestimonialCarousel/>
      
      <div>
        
      </div>
    </div>
  )
}

export default Home