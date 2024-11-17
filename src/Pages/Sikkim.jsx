import React, {useEffect} from 'react'
import Navbar from "../components/NavBar/NavBar"
import SikkimHomePage from '../Components1/Homepage/SikkimHomePage'
import SliderSikkim1 from '../Components1/Sliders/SikkimSliders/SliderSikkim1'
import SliderSikkim2 from '../Components1/Sliders/SikkimSliders/SliderSikkim2'
import AboutSikkim from '../Components1/About/AboutSikkim'
import HowItWorks from "../Components1/HowItWorks/HowItWorks"
import Footer from "../components/Footer/Footer"
import SubscribeSection from "../components/SubscribeSection/SubscribeSection"
import OtherDistinations from "../Components1/Sliders/OtherDistinations"
import WhyPlanWithUs from "../Components1/WhyPlanWithUsJ&K/WhyPlanWithUs"
import Community from "../components/Community/TestimonialCards"
import WhatTheySay from "../Components1/WhatTheySay/WhatTheySay"
import TalkToUs from "../Components1/TalkToUs/TalkToUs"

function Sikkim() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <>
    <Navbar />
    <SikkimHomePage />
    <SliderSikkim1 />
    <SliderSikkim2 />
    <AboutSikkim />
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

export default Sikkim