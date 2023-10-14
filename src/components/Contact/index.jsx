import { SlLocationPin } from "react-icons/sl"
import { BsEnvelope } from "react-icons/bs"
import { BsPhone } from "react-icons/bs"


import { Line, Icon, Form } from ".."

export default function index() {
  return (
    <div className="w-[95%] mx-auto xl:w-[88%] 2xl:w-[70%]" data-aos="fade-up">
      <div className="flex flex-row gap-2">
        <h2 className="text-sm font-medium text-[#aaaaaa] leading-[1px] font-Poppins mb-1">
          CONTACT
        </h2>
        <Line />
      </div>

      <p className="text-4xl font-bold font-Poppins text-[#151515] mb-5 mt-3">
        CONTACT US
      </p>

      <i className="w-[100%] mb-10 xl:w-[60%]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
          width="100%"
          height="450"
          // frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        />
      </i>


      <div className="w-[100%] lg:flex lg:flex-row lg:items-center 
        lg:gap-5 lg:justify-start xl:gap-32 2xl:w-[100%] mx-auto">
        <ul className="mt-20 flex flex-col gap-10 mb-10">
          <li className="flex flex-row gap-5">
            <Icon>
              <SlLocationPin />
            </Icon>

            <div>
              <h4 className="text-[22px] mb-2 font-semibold text-[#151515] font-Raleway">
                Location:
              </h4>
              <p className="text-[#484848] text-[14px] font-OpenSans">
                A108 Adam Street, New York, NY 535022
              </p>
            </div>
          </li>

          <li className="flex flex-row gap-5">
            <Icon>
              <BsEnvelope />
            </Icon>

            <div>
              <h4 className="text-[22px] mb-2 font-semibold text-[#151515] font-Raleway">
                Email:
              </h4>
              <p className="text-[#484848] text-[14px] font-OpenSans">
                Info@example.com
              </p>
            </div>
          </li>

          <li className="flex flex-row gap-5">
            <Icon>
              <BsPhone />
            </Icon>

            <div>
              <h4 className="text-[22px] mb-2 font-semibold text-[#151515] font-Raleway">
                Call:
              </h4>
              <p className="text-[#484848] text-[14px] font-OpenSans">
                +1 5589 55488 55s
              </p>
            </div>
          </li>
        </ul>

        <Form />
      </div>


    </div>
  )
}