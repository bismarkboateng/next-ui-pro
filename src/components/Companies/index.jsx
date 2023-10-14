import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import { swiperInfo } from "./companies"



export default function index() {
  return (
    <section className="mt-20 mb-20
    w-[95%] mx-auto overflow-hidden 2xl:w-[70%]">

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={5}
        loop
        autoplay = {{ 
          delay: 1000,
          disableOnInteraction: false
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        navigation
        pagination={{ 
          clickable: true,
          type: "bullets"
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 60
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 80
          },
          992: {
            slidesPerView: 6,
            spaceBetween: 120
          }
        }}
        scrollbar={{ draggable: true }}

      >
        <div className="flex flex-row items-center">
          { swiperInfo.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="cursor-pointer mb-3 lg:mb-10">
                <img 
                  src={item.image} 
                  alt="client"
                  className="w-[80%] grayscale hover:grayscale-0 lg:w-[98%]"
                />
              </div>
          </SwiperSlide>
          ))}
        </div>
        
      </Swiper>

    </section>
  )
}
