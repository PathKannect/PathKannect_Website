import AboutUs from '../components/AboutUs';
import Benefit from '../components/Benefit';
import WhyChoose from '../components/WhyChoose';


const Homepage = () => {
  return (
    <>

    <AboutUs />
{/* 
      <div data-aos="fade-up" data-aos-delay="200">
        <Contact />
      </div> */}
         <div data-aos="fade-up" data-aos-delay="150">
        <Benefit />
      </div>

         <div data-aos="fade-up" id="how-it-works">
        <WhyChoose />
      </div>
    </>
  );
};

export default Homepage;
