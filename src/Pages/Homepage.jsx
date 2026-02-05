import React from 'react';
import FoodList from '../components/FoodCard';
import HeroCarousel from '../components/HeroCarousel';
import AboutUs from '../components/AboutUs';
import Contact from '../components/Contact';
import TrustBanner from '../components/TrustBanner';
import Benefit from '../components/Benefit';
import HowItWorks from '../components/HowItWorks';
import WhyChoose from '../components/WhyChoose';
import CTASection from '../components/CTASection';

const Homepage = () => {
  return (
    <>

    <HeroCarousel />

      <div data-aos="fade-up">
        <HowItWorks />
      </div>

      <div data-aos="fade-up" data-aos-delay="150">
        <Benefit />
      </div>
      <div >
        <CTASection />
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <Contact />
      </div>
    </>
  );
};

export default Homepage;
