import { VscCheckAll } from "react-icons/vsc"
import { LiaCheckDoubleSolid } from "react-icons/lia"

import { About } from "../../assets"

export default function index() {
  return (
    <section className="mt-[13%] lg:flex lg:mt-[5%]
      lg:flex-row-reverse lg:w-[88%] lg:mx-auto lg:gap-4">
      <img 
        src={About} 
        alt="about" 
        className="w-[93%] mx-auto md:w-[89%] lg:w-[50%] lg:h-[55%] xl:h-[45]"
      />
      <div className="w-[92%] mx-auto mt-10 md:w-[90%] lg:mt-0">

        <h1 className="text-[28px] font-bold font-Poppins text-[#444444] 
        leading-[33.6px]">
          Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.
        </h1>

        <p className="italic text-base text-[#444444] mt-2 font-OpenSans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <ul className="mt-5 flex flex-col gap-2 lg:gap-1">
          <li className="flex flex-row gap-2">
            <VscCheckAll
              className="text-[#ffc451] text-[20px] font-normal"
            />
            <p className="text-[16px] font-OpenSans leading-6 text-[#444444] ">Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </li>

          <li className="flex flex-row gap-2">
            <VscCheckAll
              className="text-[#ffc451] text-[20px] font-normal"
            />
            <p className="text-[16px] font-OpenSans leading-6 text-[#444444] ">Duis aute irure dolor in reprehenderit in voluptate velit.</p>
          </li>

          <li className="flex flex-row gap-2">
            <VscCheckAll className="text-[#ffc451] text-[70px] md:text-[30px] font-normal
            lg:text-[60px]"/>
            <p className="text-[16px] font-OpenSans leading-6 text-[#444444] ">
             Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
            </p>
          </li>

        </ul>

        <p className="mt-8 text-[16px] font-OpenSans leading-6 text-[#444444] lg:mt-3">
          Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
        </p>
      </div>

    </section>
  )
}