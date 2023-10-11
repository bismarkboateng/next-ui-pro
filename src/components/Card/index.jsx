import { RiStoreLine } from "react-icons/ri"


export default function index({ icon, text}) {
  return (
    <div className="px-[20px] py-[30px] border border-[#ffffff4d]">
      <div className="flex flex-col justify-center items-center">
        <li  className="text-[#ffc451] text-[32px] leading-[1px]">{ icon }</li>
        <div className="text-xl text-white font-Raleway font-bold md:text-center">
          { text }
        </div>
      </div>
    </div>
  )
}