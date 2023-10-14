import { AiOutlineTwitter } from "react-icons/ai"
import { BiLogoFacebookCircle } from "react-icons/bi"
import { AiOutlineInstagram } from "react-icons/ai"
import { FaLinkedin } from "react-icons/fa"


export default function index(props) {


  return (
    <ul className={props.listStyle}>
        <li className={props.socialWrapperStyle}>
            <AiOutlineTwitter className={props.socialStyle} />
        </li>

        <li className={props.socialWrapperStyle}>
            <BiLogoFacebookCircle className={props.socialStyle} />
        </li>

        <li className={props.socialWrapperStyle}>
            <AiOutlineInstagram className={props.socialStyle} />
        </li>

        {props.children}

        <li className={props.socialWrapperStyle}>
            <FaLinkedin className={props.socialStyle} />
        </li>
    </ul>
  )
}
