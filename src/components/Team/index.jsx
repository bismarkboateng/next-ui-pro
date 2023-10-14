import { teamData } from "./team-data"
import { Line, Teamcard } from ".."



export default function index() {
  
  return (
    <section className="w-[95%] mx-auto 2xl:w-[70%]">

      <div className="flex flex-row gap-2">
        <h2 className="text-sm font-medium text-[#aaaaaa] leading-[1px] font-Poppins mb-1">
          TEAM
        </h2>
        <Line />
      </div>

      <p className="text-4xl font-bold font-Poppins text-[#151515] mt-3">
        CHECK OUR TEAM
      </p>

      <div className="w-[100%] mx-auto mt-10 flex flex-col md:flex-row md:flex-wrap
        md:gap-7 lg:gap-5 2xl:w-[100%] 2xl:gap-8">
        { teamData.map((item) => (
          <Teamcard 
            image={item.image}
            name={item.name}
            profession={item.profession}
            key={item.id}
          />
        ))}
      </div>

    </section>
  )
}
