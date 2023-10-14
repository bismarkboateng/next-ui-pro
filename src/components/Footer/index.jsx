import { AiFillSkype } from "react-icons/ai"

import { Socials, Footerlinks, Input, Button } from ".."
import { useFulLinks, ourServices } from "./footer-links"

export default function index() {

  const socialWrapperStyle = `py-[8px] px-0 bg-[#292929] 
  mr-4 w-[36px] h-[36px flex flex-row rounded
  items-center justify-center`
  
  const socialStyle = "text-white"
  const listStyle = "flex flex-row"

  const headerLinks = "text-base text-white font-semibold font-Raleway pb-[12px] pt-7"

  return (
    <footer className="pt-[60px] pb-[30px] bg-[#151515]">

      <div className="flex flex-col w-[95%] mx-auto
        md:flex-row md:gap-36 lg:gap-[40px] xl:w-[87%]">

        <div className="flex flex-col lg:flex lg:flex-row lg:items-start
          ">

          <div className="mr-5">
            <div className="text-white font-bold font-Raleway text-[32px] mr-auto mb-5">
              GP
              <span className="text-[#ffc451]">.</span>
            </div>

            <p className="text-white font-Raleway leading-6 text-sm">A108 Adam Street</p>
            <p className="text-white font-Raleway leading-6 text-sm mb-5">NY 535022, USA</p>

            <p className="text-white font-Raleway leading-6 text-sm">
              <strong>Phone:</strong> <span>+1 5589 55488 55</span>
            </p>

            <p className="text-white font-Raleway leading-6 text-sm mb-4">
              <strong>Email:</strong> <span>info@example.com</span>
            </p>

            <Socials
              socialWrapperStyle={socialWrapperStyle}
              socialStyle={socialStyle}
              listStyle={listStyle}
            >
            <li className={socialWrapperStyle}>
                  <AiFillSkype className={socialStyle} />
              </li>
            </Socials>
          </div>
  

          <div className="mr-8">
            <h4 className={headerLinks}>Useful Links</h4>
            <ul className="flex flex-col gap-4">
              {useFulLinks.map((item) => (
                <Footerlinks
                  title={item.title}
                />
              ))}
            </ul>
          </div>

        </div>
        
        <div className="md:w-[50%] lg:flex lg:flex-row">
          <div className="lg:w-[80%]">
            <h4 className={headerLinks}>Our Services</h4>
            <ul className="flex flex-col gap-4">
              {ourServices.map((item) => (
                <Footerlinks
                  title={item.title}
                />
              ))}
            </ul>
          </div>

          <div>
            <h4 className={headerLinks}>Our Newsletter</h4>
            <p className="text-sm font-OpenSans text-white">
              Tamen quem nulla quae legam multos aute sint culpa legam noster magna
            </p>

            <div className="flex flex-row relative mt-8 md:w-[80%] xl:w-[100%]">
              <Input />
              <Button
                className="bg-[#ffc451] text-[#151515] py-[7px] rounded-r
                cursor-pointer px-[20px] font-OpenSans absolute right-[-2px]"
              >
                Subscribe
              </Button>
            </div>
          </div>

        </div>

       
      </div>


    </footer>
  )
}