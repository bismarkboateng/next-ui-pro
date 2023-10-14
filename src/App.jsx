import { 
  Navbar, Herosection, About, Companies, Features,
  Services, Calltoaction, Portfolio, Counts, Testimonial,
  Team, Contact, Footer, Copyright
} from "./components"

export default function App() {

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
