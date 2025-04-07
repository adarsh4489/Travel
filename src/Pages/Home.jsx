import React from 'react'
import HeroSection from '../Components/HeroSection';
import Categories from '../Components/Categories';
import HeroTour from '../Components/HeroTour';
import Package from '../Components/Package';
import Offers from '../Components/Offers';
import Services from '../Components/Services';
import Testimonial from  "../Components/Testimonial";

const Home = () => {
  return (
    <div className='mx-auto my-4'>
      <HeroSection/>
      <Services/>
      <Categories/>
      <Package/>
      <Offers/>
      <HeroTour/>
      <Testimonial/>
      
      <div>
        
      </div>
    </div>
  )
}

export default Home