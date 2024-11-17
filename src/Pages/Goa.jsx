import React, {useEffect} from 'react'
import Navbar from "../components/NavBar/NavBar"
import GoaHomePage from '../Components1/Homepage/GoaHomePage'
import SliderGoa1 from '../Components1/Sliders/GoaSliders/SliderGoa1'
import SliderGoa2 from '../Components1/Sliders/GoaSliders/SliderGoa2'
import AboutGoa from '../Components1/About/AboutGoa'
import HowItWorks from "../Components1/HowItWorks/HowItWorks"
import Footer from "../components/Footer/Footer"
import SubscribeSection from "../components/SubscribeSection/SubscribeSection"
import OtherDistinations from "../Components1/Sliders/OtherDistinations"
import WhyPlanWithUs from "../Components1/WhyPlanWithUsJ&K/WhyPlanWithUs"
import Community from "../components/Community/TestimonialCards"
import WhatTheySay from "../Components1/WhatTheySay/WhatTheySay"
import TalkToUs from "../Components1/TalkToUs/TalkToUs"

function Goa() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <>
    <Navbar />
    <GoaHomePage />
    <SliderGoa1 />
    <SliderGoa2 />
    <AboutGoa />
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

export default Goa