import React, { useEffect } from 'react';
import Navbar from "../components/NavBar/NavBar"
import ArunachalPradeshHomePage from '../Components1/Homepage/ArunachalPradeshHomePage'
import SliderArunachalPradesh1 from '../Components1/Sliders/ArunachalPradeshSliders/SliderArunachalPradesh1';
import SliderArunachalPradesh2 from '../Components1/Sliders/ArunachalPradeshSliders/SliderArunachalPradesh2';
import HowItWorks from "../Components1/HowItWorks/HowItWorks"
import Footer from "../components/Footer/Footer"
import SubscribeSection from "../components/SubscribeSection/SubscribeSection"
import OtherDistinations from "../Components1/Sliders/OtherDistinations"
import WhyPlanWithUs from "../Components1/WhyPlanWithUsJ&K/WhyPlanWithUs"
import Community from "../components/Community/TestimonialCards"
import WhatTheySay from "../Components1/WhatTheySay/WhatTheySay"
import TalkToUs from "../Components1/TalkToUs/TalkToUs"

function ArunachalPradesh() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
    <Navbar />
    <ArunachalPradeshHomePage />
    <SliderArunachalPradesh1 />
    <SliderArunachalPradesh2 />
    <HowItWorks />
    <OtherDistinations />
    <WhyPlanWithUs />
    <Community />
    <WhatTheySay />
    <TalkToUs />
    <SubscribeSection />
    <Footer />
    </>
  )
}

export default ArunachalPradesh