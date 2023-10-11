import { useState } from "react"
import { SlMenu } from "react-icons/sl"
import { IoCloseOutline } from "react-icons/io5"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"

import { Button, Dropdown } from ".."


export default function index() {
  const [mobile, setMobile] = useState(false)
  const [dropDown, setDropDown] = useState(false)

  const onHandleMenuClick = () => {
    setMobile(prevMobile => !prevMobile)
  }

  const onDropDownClickHandler = () => {
    setDropDown(prevDropDown => !prevDropDown)
  }

  const liStyles = "px-[20px] py-[10px] text-[15px] text-[#151515] font-semibold font-OpenSans"

  return (
    <nav className="bg-[#000000e6] px-[3%] py-[2.5%] flex
    flex-row items-center">
      
      <div className="text-white font-bold font-Raleway text-[32px] mr-auto">
        GP
        <span className="text-[#ffc451]">.</span>
      </div>

      <Button className="bg-transparent px-[20px] pt-[7px] pb-[8px]
        border-2 border-[#ffc451] rounded font-OpenSans text-white mr-[18px]">
        Get Started
      </Button>

      <SlMenu
        className="text-white text-[20px]"
        onClick={onHandleMenuClick}
      />

      {
        mobile && (
          <>
          <div className="absolute top-0 left-0 w-full h-screen bg-[#000000cc]" />
          <IoCloseOutline 
            className="absolute top-[2%] right-[5%] z-[10] text-white text-[28px]" 
            onClick={onHandleMenuClick} 
          />
          <ul className="absolute top-[6%] h-[90%] left-[4%] right-[4%]
          h-screen bg-white pt-6">
            <li className={`${liStyles} bg-[#ffc451]`}>Home</li>
            <li className={liStyles}>About</li>
            <li className={liStyles}>Services</li>
            <li className={liStyles}>Portfolio</li>
            <li className={liStyles}>Team</li>
            <li className={`${liStyles} flex flex-row justify-between items-center`}
              onClick={onDropDownClickHandler}
            >
              <p>Drop down</p>
              <MdOutlineKeyboardArrowDown />
            </li>
            {dropDown && (
              <Dropdown className="w-[90%] shadow-xl my-[5px] mx-auto" />
            ) }
            <li className={liStyles}>Contact</li>
          </ul>
          </>
        )
      }

    </nav>
  )
}