import React, {useEffect} from 'react'
import Navbar from "../components/NavBar/NavBar"
import HowItWorks from "../Components1/HowItWorks/HowItWorks"
import Footer from "../components/Footer/Footer"
import SubscribeSection from "../components/SubscribeSection/SubscribeSection"
import OtherDistinations from "../Components1/Sliders/OtherDistinations"
import WhyPlanWithUs from "../Components1/WhyPlanWithUsJ&K/WhyPlanWithUs"
import WhatTheySay from "../Components1/WhatTheySay/WhatTheySay"
import TalkToUs from "../Components1/TalkToUs/TalkToUs"
import Community from '../components/Community/TestimonialCards'
import AboutLadakh from '../Components1/About/AboutLadakh'
import LadakhHomePage from '../Components1/Homepage/LadakhHomePage'
import SliderLadakh1 from '../Components1/Sliders/LadakhSliders/SliderLadakh1'
import SliderLadakh2 from '../Components1/Sliders/LadakhSliders/SliderLadakh2'

function Ladakh() {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
  return (
    <>
    <Navbar />
    <LadakhHomePage />
    <SliderLadakh1 />
    <SliderLadakh2 />
    <AboutLadakh />
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

export default Ladakh