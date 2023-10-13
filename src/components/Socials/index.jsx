import { AiOutlineTwitter } from "react-icons/ai"
import { BiLogoFacebookCircle } from "react-icons/bi"
import { AiOutlineInstagram } from "react-icons/ai"
import { FaLinkedin } from "react-icons/fa"


export default function index() {

  const socialStyle = "text-[#4b5563] text-[23px]"
  const socialWrapperStyle = "bg-[#f3f4f6] px-2 py-2 rounded"
  return (
    <ul className="flex flex-row gap-3">
        <li className={socialWrapperStyle}>
            <AiOutlineTwitter className={socialStyle} />
        </li>

        <li className={socialWrapperStyle}>
            <BiLogoFacebookCircle className={socialStyle} />
        </li>

        <li className={socialWrapperStyle}>
            <AiOutlineInstagram className={socialStyle}/>
        </li>

        <li className={socialWrapperStyle}>
            <FaLinkedin className={socialStyle}/>
        </li>
    </ul>
  )
}
