import { useState } from "react"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"


export default function index(props) {
  const [dropDown, setDropDown] = useState(false)

  const onDropDownClickHandler = () => {
    setDropDown(prevDropDown => !prevDropDown)
    console.log("Clicked")
  }

  const liStyles = "px-[20px] py-[10px] text-[14px] text-[#151515] font-normal font-OpenSans"

  return (
    <ul className={props.className}>
      <li className={liStyles}>Drop Down 1</li>
      <li className={`${liStyles} flex flex-row justify-between items-center`}
        onClick={onDropDownClickHandler} 
      >
        <p>Deep Drop Down</p>
        <MdOutlineKeyboardArrowRight />
      </li>
      { dropDown && (
        <ul className="w-[90%] shadow-xl my-[5px] mx-auto">
          <li className={liStyles}>Deep Drop Down 1</li>
          <li className={liStyles}>Deep Drop Down 2</li>
          <li className={liStyles}>Deep Drop Down 3</li>
          <li className={liStyles}>Deep Drop Down 4</li>
          <li className={liStyles}>Deep Drop Down 5</li>
        </ul>
      )}
      <li className={liStyles}>Drop Down 2</li>
      <li className={liStyles}>Drop Down 3</li>
      <li className={liStyles}>Drop Down 4</li>
    </ul>
  )
}
