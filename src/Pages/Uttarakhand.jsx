import React, { useEffect } from 'react';
import Navbar from "../components/NavBar/NavBar"
import UttarakhandHomePage from "../Components1/Homepage/UttarakhandHomePage"
import SliderUttarakhand1 from '../Components1/Sliders/UttarakhandSliders/SliderUttarakhand1'
import SliderUttarakhand2 from '../Components1/Sliders/UttarakhandSliders/SliderUttarakhand2'
import AboutUttarakhand from "../Components1/About/AboutUttarakhand"
import HowItWorks from "../Components1/HowItWorks/HowItWorks"
import Footer from "../components/Footer/Footer"
import SubscribeSection from "../components/SubscribeSection/SubscribeSection"
import OtherDistinations from "../Components1/Sliders/OtherDistinations"
import WhyPlanWithUs from "../Components1/WhyPlanWithUsJ&K/WhyPlanWithUs"
import Community from "../components/Community/TestimonialCards"
import WhatTheySay from "../Components1/WhatTheySay/WhatTheySay"
import TalkToUs from "../Components1/TalkToUs/TalkToUs"

function Uttarakhand() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <>
    <Navbar />
    <UttarakhandHomePage />
    <SliderUttarakhand1 />
    <SliderUttarakhand2 />
    <AboutUttarakhand />
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

export default Uttarakhand