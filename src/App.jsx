import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'


import { 
  Navbar, Herosection, About, Companies, Features,
  Services, Calltoaction, Portfolio, Counts, Testimonial,
  Team, Contact, Footer, Copyright
} from "./components"



export default function App() {

  useEffect(() => {
    AOS.init({
      // // Global settings go here
      duration: 1000, // Animation duration in milliseconds
      // offset: 200, // Offset (in pixels) from the top of the element when animation starts
    });
  }, [])

  return (
    <div className="">
      <Navbar />
      <Herosection />
      <About /> 
      <Companies />
      <Features />
      <Services />
      <Calltoaction />
      <Portfolio />
      <Counts />
      <Testimonial />
      <Team />
      <Contact />
      <Footer />
      <Copyright />
    </div>
  )
}
