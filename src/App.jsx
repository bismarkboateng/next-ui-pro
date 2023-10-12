import { 
  Navbar, Herosection, About, Companies, Features,
  Services
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
    </div>
  )
}
