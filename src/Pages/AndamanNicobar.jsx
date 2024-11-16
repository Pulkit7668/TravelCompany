import React, { useEffect } from 'react';
import Navbar from "../components/NavBar/NavBar"
import AndamanNicobarHomePage from '../Components1/Homepage/AndamanNicobarHomePage'
import SliderAandN1 from '../Components1/Sliders/AnadamanNichobarSliders/SliderAandN1';
import SliderAandN2 from '../Components1/Sliders/AnadamanNichobarSliders/SliderAandN2';
import AboutAndamanNicobar from '../Components1/About/AboutAndamanNicobar'
import HowItWorks from "../Components1/HowItWorks/HowItWorks"
import Footer from "../components/Footer/Footer"
import SubscribeSection from "../components/SubscribeSection/SubscribeSection"
import OtherDistinations from "../Components1/Sliders/OtherDistinations"
import WhyPlanWithUs from "../Components1/WhyPlanWithUsJ&K/WhyPlanWithUs"
import Community from "../components/Community/TestimonialCards"
import WhatTheySay from "../Components1/WhatTheySay/WhatTheySay"
import TalkToUs from "../Components1/TalkToUs/TalkToUs"

function AndamanNicobar() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
    <Navbar />
    <AndamanNicobarHomePage />
    <SliderAandN1 />
    <SliderAandN2 />
    <AboutAndamanNicobar />
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

export default AndamanNicobar