import Community from "./components/Community/TestimonialCards"
import Footer from "./components/Footer/Footer"
import HeaderSection from "./components/HeaderSection/HeaderSection"
import HeaderSection2 from "./components/HeaderSection2/HeaderSection2"
import Navbar from "./components/NavBar/NavBar"
import SliderPage1 from "./components/Sliders/SliderPage1"
import SliderPage2 from "./components/Sliders/SliderPage2"
import SliderPage3 from "./components/Sliders/SliderPage3"
import SliderPage4 from "./components/Sliders/SliderPage4"
import SubscribeSection from "./components/SubscribeSection/SubscribeSection"
import TripPlannerGrid from "./components/TripPlanner/TripPlannerGrid"
import WhyPlanWithUs from "./components/WhyPlanWithUs/WhyPlanWithUs"


function App() {

  return (
    <>
    <Navbar />
    <HeaderSection />
    <HeaderSection2 />
    <SliderPage1 />
    <SliderPage2 />
    <SliderPage3 />
    <SliderPage4 />
    <TripPlannerGrid />
    <WhyPlanWithUs />
    <Community />
    <SubscribeSection />
    <Footer />
    </>
  )
}

export default App