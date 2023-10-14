import { useState } from "react"
import { Line } from ".."
import { all, app, card, web } from "./portfolio"




export default function index() {
  // const [onHover, setOnHover] = useState(false)
  const [actions, setActions] = useState({
    all: true,
    app: false,
    card: false,
    web: false,
  })

  const onAppHandler = () => {
    setActions({
      all: false,
      app: true,
      card: false,
      web: false,
    })
  }

  const onCardHandler = () => {
    setActions({
      all: false,
      app: false,
      card: true,
      web: false,
    })
  }

  const onWebHandler = () => {
    setActions({
      all: false,
      app: false,
      card: false,
      web: true,
    })
  }

  const onAllHandler = () => {
    setActions({
      all: true,
      app: false,
      card: false,
      web: false,
    })
  }


  const actionStyle = "text-sm font-semibold text-[#444444] font-OpenSans px-[15px] pt-[8px] pb-[10px] cursor-pointer"
  const onActionSelectStyle = "bg-[#ffc451] transition duration-150 ease-in rounded-sm"
  const imageStyles = "w-[100%] md:w-[40%] 2xl:w-[30%]"

  return (
    <section className="mt-20  mx-auto md:w-[80%] md:mx-auto 2xl:w-[74%]">
      <div className="flex flex-row gap-2 ml-3 md:ml-5 2xl:ml-10" data-aos="fade-up">
        <h2 className="text-sm font-medium text-[#aaaaaa] leading-[1px] font-Poppins 
          mb-1">
          PORTFOLIO
        </h2>
        <Line />
      </div>

      <p className="text-4xl font-bold font-Poppins text-[#151515] ml-3 mt-2 
        md:ml-5 2xl:ml-9" data-aos="fade-up">
        CHECK OUR PORTFOLIO
      </p>

      <div className="flex flex-row gap-7 items-center justify-center mt-10 mb-10" 
      data-aos="fade-up" data-aos-delay="100">
        <p className={`${actionStyle} ${actions.all ? onActionSelectStyle : ''}`}
          onClick={onAllHandler}>ALL</p>

        <p className={`${actionStyle} ${actions.app ? onActionSelectStyle : ''}`}
          onClick={onAppHandler}>APP</p>

        <p className={`${actionStyle} ${actions.card ? onActionSelectStyle : ''}`}
          onClick={onCardHandler}>CARD</p>

        <p className={`${actionStyle} ${actions.web ? onActionSelectStyle : ''}`}
          onClick={onWebHandler}>WEB</p>
      </div>


      { actions.all && (
        <div className="w-[93%] grid grid-cols-1 grid-rows-9 md:grid-cols-2 grid-rows-9 
          mx-auto cursor-pointer">
          { all.map((item) => (
            <div key={item.id}
              className={`relative w-[100%] mb-6 md:w-[97%] xl:w-[87%] 2xl:w-[60%] md:${item.className}`}
             
            >
              <img src={item.image}
                className="w-[100%] rounded object-fit"
                data-aos="zoom-in" data-aos-delay="200"
              />
            </div>
          ))}
        </div>
      )}

      { actions.app && (
        <div className="w-[93%] grid grid-cols-1 md:grid-cols-2 grid-rows-9 
          mx-auto cursor-pointer">
          { app.map((item) => (
            <div key={item.id}
              className={`w-[100%] mb-6 md:w-[97%] xl:w-[87%] 2xl:w-[60%] ${item.className}`}
            >
              <img src={item.image}
                className="w-[100%] rounded object-fit"
                data-aos="zoom-in" data-aos-delay="200"
              />
            </div>
          ))}
        </div>
      )}

      { actions.card && (
        <div className="w-[93%] grid grid-cols-1 md:grid-cols-2 grid-rows-9 
          mx-auto cursor-pointer">
          { card.map((item) => (
            <div key={item.id}
              className={`w-[100%] mb-6 md:w-[97%] xl:w-[87%] 2xl:w-[60%] ${item.className}`}
            >
              <img src={item.image}
                className="w-[100%] rounded object-fit"
                data-aos="zoom-in" data-aos-delay="200"
              />
            </div>
          ))}
        </div>
      )}

      { actions.web && (
        <div className="w-[93%] grid grid-cols-1 md:grid-cols-2 grid-rows-9 
          mx-auto cursor-pointer">
          { web.map((item) => (
            <div key={item.id}
              className={`w-[100%] mb-6 md:w-[97%] xl:w-[87%] 2xl:w-[60%] ${item.className}`}
            >
              <img src={item.image}
                className="w-[100%] rounded object-fit"
                data-aos="zoom-in" data-aos-delay="200"
              />
            </div>
          ))}
        </div>
      )}

    </section>
  )
}