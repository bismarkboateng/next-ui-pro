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

  const socialStyle = "text-[#4b5563] text-[23px]"
  const socialWrapperStyle = "bg-[#f3f4f6] px-2 py-2 rounded"
  const listStyle = "flex flex-row gap-3"

  return (
    <div className="relative bg-white shadow-md mb-10 rounded md:w-[47%]
      lg:w-[23%] 2xl:w-[23.2%] cursor-pointer"
      onMouseOver={onMouseHoverHandler}
      onMouseLeave={onMouseHoverLeaveHandler}
    >

      { onHover && (
        <div className="absolute bottom-[32%] left-[16%]">
          <Socials 
            socialStyle={socialStyle}
            socialWrapperStyle={socialWrapperStyle}
            listStyle={listStyle}
          />
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