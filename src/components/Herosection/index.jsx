import { 
  RiStoreLine, RiBarChartBoxLine, 
  RiCalendarTodoLine,RiPaintBrushLine, RiDatabase2Line
} from "react-icons/ri"



export default function index() {
  return (
    <section className="relative bg-hero w-full h-[1000px] md:h-[900px] bg-cover bg-center bg-fixed">
      <div className="w-[100%] h-[100%] backgroundOverlay">

        <h1 className="text-white text-center font-Poppins 
          pt-[20%] px-[2%] py-[1.5%] font-bold text-[28px] 
          md:text-[56px] md:leading-[64px] md:px-[10%] md:pt-[29%] 
          leading-[36px] lg:pt-[8%] xl:pt-[10%] xl:px-[35%]"
          data-aos="fade-up" data-aos-delay="150">
          Powerful Digital Solutions with Gp<span className="text-[#ffc451]">.</span>
        </h1>
        <p className="mt-[3%] text-center text-xl 
          md:text-2xl md:mt-0 leading-6 text-[#ffffffe6] font-Raleway font-medium">
          We are team of talented digital marketers
        </p>

        <div className="mt-20 w-[93%] 2xl:w-[75%] width mx-auto grid grid-cols-1 gap-y-6
        md:grid-cols-6 md:grid-rows-2 md:gap-x-5 xl:grid-cols-12 xl:grid-rows-1
        justify-center" data-aos="zoom-in" data-aos-delay="250">


          <div className="px-[20px] py-[30px] border border-[#ffffff4d] md:col-start-1 md:col-span-2
           xl:col-start-2 xl:col-span-2">
            <div className="flex flex-col justify-center items-center">
              <RiStoreLine  className="text-[#ffc451] text-[32px] leading-[1px]" />
              <div className="text-xl text-white font-Raleway font-bold md:text-center">
                Very lore
              </div>
            </div>
          </div>

          <div className="px-[20px] py-[30px] border border-[#ffffff4d] md:col-start-3 md:col-span-2
          md:row-start-1 xl:col-start-4 xl:col-span-2">
            <div className="flex flex-col justify-center items-center">
              <RiBarChartBoxLine  className="text-[#ffc451] text-[32px] leading-[1px]" />
              <div className="text-xl text-white font-Raleway font-bold md:text-center">
                Sacema pain
              </div>
            </div>
          </div>


          <div className="px-[20px] py-[30px] border border-[#ffffff4d] md:col-start-5 md:col-span-2
          xl:col-start-6 xl:col-span-2">
            <div className="flex flex-col justify-center items-center">
              <RiCalendarTodoLine  className="text-[#ffc451] text-[32px] leading-[1px]" />
              <div className="text-xl text-white font-Raleway font-bold md:text-center">
                Check
              </div>
            </div>
          </div>

          <div className="px-[20px] py-[30px] border border-[#ffffff4d] md:col-start-2 md:col-span-2
          xl:col-start-8 xl:col-span-2">
            <div className="flex flex-col justify-center items-center">
              <RiPaintBrushLine  className="text-[#ffc451] text-[32px] leading-[1px]" />
              <div className="text-xl text-white font-Raleway font-bold md:text-center">
                Great Dolores
              </div>
            </div>
          </div>

          <div className="px-[20px] py-[30px] border border-[#ffffff4d] md:col-start-4 md:col-span-2
          xl:col-start-10 xl:col-span-2">
            <div className="flex flex-col justify-center items-center">
              <RiDatabase2Line  className="text-[#ffc451] text-[32px] leading-[1px]" />
              <div className="text-xl text-white font-Raleway font-bold md:text-center">
                Nimos
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
