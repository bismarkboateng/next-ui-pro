import { useState } from "react"

import { Socials } from ".."

export default function index({ image, name, profession }) {
  const [onHover, setOnHover] = useState(false)

  const onMouseHoverHandler = () => {
    setOnHover(true)
  }

  const onMouseHoverLeaveHandler = () => {
    setOnHover(false)
  }

  return (
    <div className="relative bg-white shadow-md mb-10 rounded md:w-[47%]
      lg:w-[23%] 2xl:w-[20%] cursor-pointer"
      onMouseOver={onMouseHoverHandler}
      onMouseLeave={onMouseHoverLeaveHandler}
    >

      { onHover && (
        <div className="absolute bottom-[33%] left-[16%]">
          <Socials />
        </div>
      )}

      <div className="w-[100%] md:w-[100%]">
        <img 
          src={image} 
          alt="team"
          className="w-[100%] rounded-t"
        />
      </div>

      <div className="py-[25px] px-[15px]">
        <h4 className="text-lg font-bold text-[#151515] font-Raleway mb-1">
          {name}
        </h4>
        <p className="text-[13px] font-normal text-[#aaaaaa] font-OpenSans">
          {profession}
        </p>
      </div>

    </div>
  )
}