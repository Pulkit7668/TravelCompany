import React, { useEffect } from 'react'
import Navbar from "../components/NavBar/NavBar"
import KeralaHomePage from "../Components1/Homepage/KeralaHomepage"
import SliderKerala1 from '../Components1/Sliders/SliderKerala1'
import SliderKerala2 from '../Components1/Sliders/SliderKerala2'
import AboutKerala from '../Components1/About/AboutKerala'
import HowItWorks from "../Components1/HowItWorks/HowItWorks"
import Footer from "../components/Footer/Footer"
import SubscribeSection from "../components/SubscribeSection/SubscribeSection"
import Slider3 from "../Components1/Sliders/Slider3"
import WhyPlanWithUs from "../Components1/WhyPlanWithUsJ&K/WhyPlanWithUs"
import Community from "../components/Community/TestimonialCards"
import WhatTheySay from "../Components1/WhatTheySay/WhatTheySay"
import TalkToUs from "../Components1/TalkToUs/TalkToUs"


function Kerala() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <>
    <Navbar />
    <KeralaHomePage />
    <SliderKerala1 />
    <SliderKerala2 />
    <AboutKerala />
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

export default Kerala