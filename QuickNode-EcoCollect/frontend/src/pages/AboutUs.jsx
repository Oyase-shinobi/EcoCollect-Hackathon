// import React from 'react';

import AboutUsHero from "../components/about_us_components/AboutUsHero";
import Empowering from "../components/about_us_components/Empowering";
import JoinUs from "../components/about_us_components/JoinUs";
import Purpose from "../components/about_us_components/Purpose";
import Values from "../components/about_us_components/Values";
import Vision from "../components/about_us_components/Vision";
import Footer from "../components/footer";
import HomeFooter from "../components/homepage_components/HomeFooter";
import Header from "../components/navigation/Header";

const AboutUs = () => {
  return(
    <div className="container mx-auto">
      <Header/>
      <AboutUsHero/>
      {/* <Values/> */}
      <Purpose/>
      <Vision/>
      <Empowering/>
      <JoinUs/>
      <HomeFooter/>
      <Footer/>
    </div>
  )
   
    
     };

export default AboutUs;

