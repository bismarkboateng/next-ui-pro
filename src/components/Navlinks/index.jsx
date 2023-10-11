
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import { Dropdown } from ".."


export default function index({ dropDown, onDropDownClick}) {


  const linkItem = "text-[15px] text-white font-OpenSans font-semibold"
  return (
    <ul className="hidden lg:flex lg:flex-row lg:gap-6 mr-auto">
      <li className={linkItem}>Home</li>
      <li className={linkItem}>About</li>
      <li className={linkItem}>Services</li>
      <li className={linkItem}>Portfolio</li>
      <li className={linkItem}>Team</li>
      <li className={`${linkItem} flex flex-row items-start gap-1 text-[15px]`}
        onClick={onDropDownClick}
      >
        <p>Drop Down</p>
        <MdOutlineKeyboardArrowDown className="mt-1" />
      </li>
      { dropDown && (
        <Dropdown className="absolute top-[12%] w-[19%] right-[28.1%] bg-white text-white" />
      )}
      <li className={linkItem}>Contact</li>
    </ul>
  )
}
