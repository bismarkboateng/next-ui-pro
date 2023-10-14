import { useState } from "react"

import { Line } from ".."
import { 
  Portfolio1, Portfolio3, Portfolio6,
  Portfolio4, Portfolio7, Portfolio8,
  Portfolio2, Portfolio5, Portfolio9
} from "../../assets"


function Gallery(props) {
  return (
    <div className="w-[95%] mx-auto flex flex-row flex-wrap gap-8
      md:flex-row md:flex-wrap arrange-image">
      <img src={props.image1} alt="first" className="w-[40%] 2xl:w-[30%]" />
      <img src={props.image2} alt="second" className="w-[40%] 2xl:w-[30%]" />
      <img src={props.image3} alt="third" className="w-[40%] 2xl:w-[30%]" />
      { props.children}
    </div>
  )
}


export default function index() {
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

  const actionStyle = "text-sm font-semibold text-[#444444] font-OpenSans px-[15px] pt-[8px] pb-[10px]"
  const onActionSelectStyle = "bg-[#ffc451] transition duration-150 ease-in rounded-sm"
  const imageStyles = "w-[40%] 2xl:w-[30%]"

  return (
    <section className="mt-20 md:w-[80%] md:mx-auto 2xl:w-[74%]">

      <div className="flex flex-row gap-2 ml-3 md:ml-5 2xl:ml-10">
        <h2 className="text-sm font-medium text-[#aaaaaa] leading-[1px] font-Poppins 
          mb-1">
          PORTFOLIO
        </h2>
        <Line />
      </div>

      <p className="text-4xl font-bold font-Poppins text-[#151515] ml-3 mt-2 
        md:ml-5 2xl:ml-9">
        CHECK OUR PORTFOLIO
      </p>

      <div className="flex flex-row gap-7 items-center justify-center mt-10 mb-10">
        <p
          className={`${actionStyle} ${actions.all ? onActionSelectStyle : ''}`}
          onClick={onAllHandler}
        >
          ALL
        </p>

        <p
          className={`${actionStyle} ${actions.app ? onActionSelectStyle : ''}`}
          onClick={onAppHandler}
        >
          APP
        </p>

        <p
          className={`${actionStyle} ${actions.card ? onActionSelectStyle : ''}`}
          onClick={onCardHandler}
        >
          CARD
        </p>

        <p
          className={`${actionStyle} ${actions.web ? onActionSelectStyle : ''}`}
          onClick={onWebHandler}
        >
          WEB
        </p>
      </div>

      <div className={`${actions.app ? 'flex' : 'hidden'} flex flex-col`}>
        { actions.app && (
          <Gallery 
            image1={Portfolio1}
            image2={Portfolio3}
            image3={Portfolio6}
          />
        )}
      </div>

      <div className={`${actions.card ? 'flex' : 'hidden'} flex flex-col`}>
        { actions.card && (
          <Gallery 
            image1={Portfolio4}
            image2={Portfolio7}
            image3={Portfolio8}
          />
        )}
      </div>


      <div className={`${actions.web ? 'flex' : 'hidden'} flex flex-col`}>
        { actions.web && (
          <Gallery 
            image1={Portfolio2}
            image2={Portfolio5}
            image3={Portfolio9}
          />
        )}
      </div>

      <div className={`${actions.all ? 'flex' : 'hidden'} flex flex-col`}>
        { actions.all && (
          <Gallery 
            image1={Portfolio1}
            image2={Portfolio3}
            image3={Portfolio6}

          >
            <img src={Portfolio4} alt="first"  className={imageStyles} />
            <img src={Portfolio7} alt="second" className={imageStyles} />
            <img src={Portfolio8} alt="third"  className={imageStyles}/>

            <img src={Portfolio2} alt="first"  className={imageStyles}/>
            <img src={Portfolio5} alt="second" className={imageStyles} />
            <img src={Portfolio9} alt="third" className={imageStyles} />
          </Gallery>
        )}
      </div>
    </section>
  )
}