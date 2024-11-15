import React, { useEffect } from 'react';
import Navbar from "../components/NavBar/NavBar"
import AboutJK from "../Components1/About/AboutJ&K"
import JandKHomePage from "../Components1/Homepage/J&KHomePage"
import SliderJK1 from "../Components1/Sliders/SliderJK1"
import SliderJK2 from "../Components1/Sliders/SliderJK2"
import HowItWorks from "../Components1/HowItWorks/HowItWorks"
import Footer from "../components/Footer/Footer"
import SubscribeSection from "../components/SubscribeSection/SubscribeSection"
import Slider3 from "../Components1/Sliders/Slider3"
import WhyPlanWithUs from "../Components1/WhyPlanWithUsJ&K/WhyPlanWithUs"
import Community from "../components/Community/TestimonialCards"
import WhatTheySay from "../Components1/WhatTheySay/WhatTheySay"
import TalkToUs from "../Components1/TalkToUs/TalkToUs"

function JandK() {
  
  useEffect(() => {
    // Scroll to the top of the page when App1 is rendered
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
    <Navbar />
    <JandKHomePage />
    <SliderJK1 />
    <SliderJK2 />
    <AboutJK />
    <HowItWorks />
    <Slider3 />
    <WhyPlanWithUs />
    <Community />
    <WhatTheySay />
    <TalkToUs />
    <SubscribeSection />
    <Footer />
    </>
  )
}

export default JandK