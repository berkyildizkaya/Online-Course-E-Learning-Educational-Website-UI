
import Benefits from "./components/Benefits"
import Brands from "./components/Brands"
import HeroSection from "./components/HeroSection"
import Header from "./components/Header"
import VideoSection from "./components/VideoSection"
import OurCourses from "./components/OurCourses"
import Testimonials from "./components/Testimonials"
import Pricing from "./components/Pricing"
import SwitchButton from "./components/SwitchButton"
import Faq from "./components/Faq"
import Footer from "./components/Footer"


function App() {
  return (
    <>
      <div style={{ backgroundColor: "#F7F7F8" }}>


        <Header />
        <HeroSection />
        <Brands />
        <VideoSection />
        <Benefits />
        <OurCourses />
        <Testimonials />
        <Pricing />
        <Faq />
        <Footer />
      </div>
    </>
  )
}

export default App
