import { MdOutlineKeyboardArrowRight } from "react-icons/md"

export default function index(props) {
  return (
    <li className="flex flex-row items-center">
      <i>
        <MdOutlineKeyboardArrowRight 
          className="text-lg text-[#ffc451] leading-[1px]"
        />
      </i>
      <p className="text-sm font-OpenSans text-white leading-[1px]">
        {props.title}
      </p>
    </li>
  )
}
