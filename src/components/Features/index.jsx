import { BiReceipt } from "react-icons/bi"
import { BiCubeAlt } from "react-icons/bi"
import { BiImages } from "react-icons/bi"
import { LuShield } from "react-icons/lu"

import { FeaturesImage } from "../../assets"

export default function index() {
  return (
    <section className="w-[93%] mx-auto lg:flex lg:flex-row
      lg:justify-center lg:items-center lg:w-[90%] lg:gap-6
      2xl:w-[70%] 2xl:items-start">
      <img 
        src={FeaturesImage} 
        alt="features" 
        className="lg:w-[50%] 2xl:w-[50%]"
      />

      <ul className="flex flex-col gap-10 lg:gap-3 mt-10 lg:mt-4 lg:w-[50%]
        xl:gap-8 2xl:mt-5 2xl:gap-[50px]">

        <li className="flex flex-row gap-3">
          <i>
            <BiReceipt className="text-[48px] text-[#ffc451]" />
          </i>
          <div>
            <h4 className="text-xl font-bold font-Raleway text-[#444444] mb-2">
              Est labore ad
            </h4>
            <p className="text-[15px] text-[#848484] font-OpenSans">
              Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip
            </p>
          </div>
        </li>

        <li className="flex flex-row gap-3">
          <i>
            <BiCubeAlt className="text-[48px] text-[#ffc451]" />
          </i>
          <div>
            <h4 className="text-xl font-bold font-Raleway text-[#444444] mb-2">
              Harum esse qui
            </h4>
            <p className="text-[15px] text-[#848484] font-OpenSans">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            </p>
          </div>
        </li>

        <li className="flex flex-row gap-3">
          <i>
            <BiImages className="text-[48px] text-[#ffc451]" />
          </i>
          <div>
            <h4 className="text-xl font-bold font-Raleway text-[#444444] mb-2">
             Aut occaecati
            </h4>
            <p className="text-[15px] text-[#848484] font-OpenSans">
             Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere
            </p>
          </div>
        </li>

        <li className="flex flex-row gap-3">
          <i>
            <LuShield className="text-[48px] text-[#ffc451]" />
          </i>
          <div>
            <h4 className="text-xl font-bold font-Raleway text-[#444444] mb-2">
             Beatae veritatis
            </h4>
            <p className="text-[15px] text-[#848484] font-OpenSans">
              Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta
            </p>
          </div>
        </li>

      </ul>
    </section>
  )
}
