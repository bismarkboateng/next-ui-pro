import { 
  Navbar, Herosection, About, Companies, Features,
  Services, Calltoaction, Portfolio, Counts
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
    </div>
  )
}
