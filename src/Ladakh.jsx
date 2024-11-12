import React, {useEffect} from 'react'
import Navbar from "./components/NavBar/NavBar"
import HowItWorks from "./Components1/HowItWorks/HowItWorks"
import Footer from "./components/Footer/Footer"
import SubscribeSection from "./components/SubscribeSection/SubscribeSection"
import Slider3 from "./Components1/Sliders/Slider3"
import WhyPlanWithUs from "./Components1/WhyPlanWithUsJ&K/WhyPlanWithUs"
import WhatTheySay from "./Components1/WhatTheySay/WhatTheySay"
import TalkToUs from "./Components1/TalkToUs/TalkToUs"
import Community from './components/Community/TestimonialCards'
import AboutLadakh from './Components1/About/AboutLadakh'
import LadakhHomePage from './Components1/Homepage/LadakhHomePage'
import SliderLadakh1 from './Components1/Sliders/SliderLadakh1'
import SliderLadakh2 from './Components1/Sliders/SliderLadakh2'

function Ladakh() {

    useEffect(() => {
      // Scroll to the top of the page when App1 is rendered
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

export default Ladakh