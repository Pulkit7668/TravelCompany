import React, { useEffect } from 'react'
import Navbar from "../components/NavBar/NavBar"
import HimachalPradeshHomePage from '../Components1/Homepage/HimachalPradeshHomePage'
import SliderHimachalPradesh1 from '../Components1/Sliders/HimachalPradeshSliders/SliderHimachalPradesh1'
import SliderHimachalPradesh2 from '../Components1/Sliders/HimachalPradeshSliders/SliderHimachalPradesh2'
import AboutHimachalPradesh from '../Components1/About/AboutHimachalPradesh'
import HowItWorks from "../Components1/HowItWorks/HowItWorks"
import Footer from "../components/Footer/Footer"
import SubscribeSection from "../components/SubscribeSection/SubscribeSection"
import OtherDistinations from "../Components1/Sliders/OtherDistinations"
import WhyPlanWithUs from "../Components1/WhyPlanWithUsJ&K/WhyPlanWithUs"
import Community from "../components/Community/TestimonialCards"
import WhatTheySay from "../Components1/WhatTheySay/WhatTheySay"
import TalkToUs from "../Components1/TalkToUs/TalkToUs"

function HimachalPradesh() {
    
    useEffect(() => {
     window.scrollTo(0, 0);
    }, []);

  return (
    <>
    <Navbar />
    <HimachalPradeshHomePage />
    <SliderHimachalPradesh1 />
    <SliderHimachalPradesh2 />
    <AboutHimachalPradesh />
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

export default HimachalPradesh