import React, { useEffect } from 'react'
import Navbar from "../components/NavBar/NavBar"
import RajasthanHomePage from "../Components1/Homepage/RajasthanHomePage"
import SliderRajasthan1 from '../Components1/Sliders/RajasthanSliders/SliderRajasthan1'
import SliderRajasthan2 from '../Components1/Sliders/RajasthanSliders/SliderRajasthan2'
import AboutRajasthan from "../Components1/About/AboutRajasthan"
import HowItWorks from "../Components1/HowItWorks/HowItWorks"
import Footer from "../components/Footer/Footer"
import SubscribeSection from "../components/SubscribeSection/SubscribeSection"
import OtherDistinations from "../Components1/Sliders/OtherDistinations"
import WhyPlanWithUs from "../Components1/WhyPlanWithUsJ&K/WhyPlanWithUs"
import Community from "../components/Community/TestimonialCards"
import WhatTheySay from "../Components1/WhatTheySay/WhatTheySay"
import TalkToUs from "../Components1/TalkToUs/TalkToUs"

function Rajasthan() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Navbar />
    <RajasthanHomePage />
    <SliderRajasthan1 />
    <SliderRajasthan2 />
    <AboutRajasthan />
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

export default Rajasthan