import { cardData } from "./CardData"
import { Card } from ".."



export default function index() {
  return (
    <section className="relative bg-hero w-full h-[1000px] md:h-[900px]">
      <div className="w-[100%] h-[100%] backgroundOverlay">

        <h1 className="text-white text-center font-Poppins 
          pt-[20%] px-[2%] py-[1.5%] font-bold text-[28px] 
          md:text-[56px] md:leading-[64px] md:px-[10%] md:pt-[29%] 
          leading-[36px] lg:pt-[8%] xl:pt-[10%] xl:px-[35%]">
          Powerful Digital Solutions with Gp<span className="text-[#ffc451]">.</span>
        </h1>
        <p className="mt-[3%] text-center text-xl 
          md:text-2xl md:mt-0 leading-6 text-[#ffffffe6] font-Raleway font-medium">
          We are team of talented digital marketers
        </p>

        <div className="w-[95%] mx-auto mt-20 flex flex-col gap-6
          md:flex-row md:flex-wrap">
          {
            cardData.map((cardItem) => (
            <Card
              icon={cardItem.icon}
              text={cardItem.text}
              key={cardItem.id}
            />
            ))
          }
        </div>

      </div>
    </section>
  )
}
