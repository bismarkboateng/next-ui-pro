

// export default function index() {
//   return (
//     // <section className="relative bg-testimonial w-full h-[400px] bg-cover bg-center">
//     // <div className="absolute top-0 left-0 w-[100%] h-[100%] call-to-action z-0" />

//     // </section>
//     <section>
//       testimonial section
//     </section>
//   )
// }

import { Swiper, SwiperSlide } from 'swiper/react'
import { BiSolidQuoteAltLeft } from "react-icons/bi"
import { BiSolidQuoteAltRight } from "react-icons/bi"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import { testimonialData } from "./testimonial-data"


export default function index() {
  return (
    <section className="relative bg-testimonial w-full h-[400px] bg-fixed bg-cover bg-center">
      <div className="absolute top-0 left-0 w-[100%] h-[100%] call-to-action z-0" />

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        loop
        speed={600}
        autoplay = {{ 
          delay: 1000,
          disableOnInteraction: false
        }}
        onSwiper={(swiper) => {}}
        onSlideChange={() => {}}
        navigation
        pagination={{ 
          clickable: true,
          type: "bullets"
        }}
        scrollbar={{ draggable: true }}

      >
        <div className="">
          { testimonialData.map((item) => (
            <SwiperSlide key={item.id}>

              <div className="flex flex-col items-center justify-center mb-4 mt-4
                w-[95%] mx-auto lg:w-[76%] xl:mt-10 2xl:w-[50%] cursor-pointer">
                <img 
                  src={item.image} 
                  alt="client"
                  className="w-[100px] rounded-full"
                />
                <h3 className="text-xl text-white mt-[10px] mb-[5px] font-Raleway font-bold">
                  {item.name}
                </h3>
                <p className="text-sm text-[#dddddd] mb-[15px] font-Raleway text-white font-semibold">
                  {item.profession}
                </p>
                <p className="text-[#eee] italic mb-[15px] font-OpenSans text-center">
                  <span><BiSolidQuoteAltLeft className="text-[#ffffff99] text-[26px]" /></span>
                  {item.quote}
                  <span><BiSolidQuoteAltRight className="text-[#ffffff99] text-[26px]"/></span>
                </p>
              </div>

          </SwiperSlide>
          ))}
        </div>
        
      </Swiper>

    </section>
  )
}