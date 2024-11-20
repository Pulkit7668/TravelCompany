import React, {useEffect} from 'react'
import Navbar from '../components/NavBar/NavBar';
import SrinagarHomePage from '../Components1/Srinagar/SrinagarHomePage'
import SrinagarSlider from '../Components1/Srinagar/SrinagarSlider'
import WhyPlanWithUs from '../Components1/WhyPlanWithUsJ&K/WhyPlanWithUs'
import Community from '../Components/Community/TestimonialCards'
import WhatTheySay from '../Components1/WhatTheySay/WhatTheySay';
import TalkToUs from '../Components1/TalkToUs/TalkToUs'
import SubscribeSection from '../Components/SubscribeSection/SubscribeSection'
import Footer from '../components/Footer/Footer'
import AboutSrinagar from '../Components1/Srinagar/AboutSrinagar';
import ThingsToDo from '../Components1/Srinagar/ThingsToDo';
import PlacesToVisit from '../Components1/Srinagar/PlacesToVisit';
import NearbyLocations from '../Components1/Srinagar/NearbyLocations';
import FoodGallery from '../Components1/Srinagar/FoodGallery';
import InformationSection from '../Components1/Srinagar/InformationSection';

function Srinagar() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Navbar />
    <SrinagarHomePage />
    <SrinagarSlider />
    <AboutSrinagar />
    <ThingsToDo />
    <PlacesToVisit />
    <NearbyLocations />
    <FoodGallery />
    <InformationSection />
    <WhyPlanWithUs />
    <Community />
    <WhatTheySay />
    <TalkToUs />
    <SubscribeSection />
    <Footer />
    </>
  )
}

export default Srinagar