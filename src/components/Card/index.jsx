import { useState } from "react"
import { Icon } from ".."

export default function index({ icon, header, content }) {
  const [onHover, setOnHover] = useState(false)

  const onMouseHover = () => {
    setOnHover(prevOnHover => !prevOnHover)
  }

  const onMouseLeaveComp = () => {
    setOnHover(false)
  }


  return (
    <section className={`py-[80px] px-[20px] md:w-[47%] border border-bg-[#ebebeb] 
    text-center bg-white flex flex-col justify-center items-center lg:w-[30%]
    ${onHover && 'shadow-xl'} transition ease-in duration-150 cursor-pointer`}
      onMouseOver={onMouseHover}
      onMouseLeave={onMouseLeaveComp}
    >
      <Icon>{icon}</Icon>
      <h2 className="text-2xl text-[#151515] font-bold font-Raleway mb-4">
        {header}
      </h2>
      <p className="text-sm md:w-[55%] lg:w-[80%] text-[#444444] leading-6 font-OpenSans">
        {content}
      </p>
    </section>
  )
}