import { Line, Card } from ".."
import { cardInfo } from "./Data"

export default function index() {
  return (
    <section className="mt-32 mb-10 md:w-[95%] mx-auto
    2xl:w-[70%]">

      <div className="flex flex-row gap-2 ml-3 md:ml-5">
        <h2 className="text-sm font-medium text-[#aaaaaa] leading-[1px] font-Poppins mb-1">
          SERVICES
        </h2>
        <Line />
      </div>

      <p className="text-4xl font-bold font-Poppins text-[#151515] ml-3 mt-2 md:ml-5">
        CHECK OUR SERVICES
      </p>

      <div className="w-[94%] mx-auto mt-10 flex flex-col gap-6 
      md:flex-row md:flex-wrap lg:w-[97%]">
        { cardInfo.map((cardItem) => (
          <Card
            icon={cardItem.icon}
            header={cardItem.header}
            content={cardItem.content}
            key={cardItem.id}
          />
        ))}
      </div>

    </section>
  )
}
