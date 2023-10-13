import { BsEmojiSmile } from "react-icons/bs"
import { BsJournalRichtext } from "react-icons/bs"
import { BsClock } from "react-icons/bs"
import { BsAward } from "react-icons/bs"

import { CountsImage } from "../../assets"

export default function index() {

  const iconStyles = "text-[#ffc451] text-4xl mt-2 font-normal"
  const numberStyles = "text-4xl font-bold text-[#151515] leading-[30px] font-OpenSans"
  const textStyles = "text-sm text-[#3b3b3b] font-Raleway mt-5"

  return (
    <section className="w-[93%] flex flex-col mx-auto mt-32 mb-20
      xl:flex-row xl:gap-[45px] 2xl:w-[80%]">
      <img 
        src={CountsImage} 
        alt="count" 
        className="object-cover md:w-[100%] md:h-[500px] 2xl:w-[40%] 2xl:ml-20"
      />

      <div className="mt-10 2xl:w-[40%]">
        <h3 className="font-bold text-[34px] text-[#151515] font-Raleway mb-2 leading-10">
          Wrap soccer as a result
        </h3>
        <p className="text-base font-OpenSans text-[#444444] leading-6 font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          but I give to the labor of the labor and the pain of a great time to fall into some of hermod. 
          Homework autem irretur pain in criticizing
        </p>

        <ul className="flex flex-col gap-5 w-[100%] md:flex md:flex-row">
          <div className="flex flex-col md:w-[50%] md:gap-10 lg:gap-5">
            <li className="flex flex-row gap-4 mt-5">
              <i><BsEmojiSmile className={iconStyles} /></i>
              <div>
                <p className={numberStyles}>65</p>
                <p className={textStyles}>
                  <strong>Happy Clients</strong> result from the pleasure of our own something that the architect.
                </p>
              </div>
            </li>

            <li className="flex flex-row gap-4 mt-5">
              <i><BsJournalRichtext className={iconStyles} /></i>
              <div>
                <p className={numberStyles}>85</p>
                <p className={textStyles}>
                  <strong>Projects</strong> adipisci atque cum quia aspernatur totam laudantium et quia dere tan
                </p>
              </div>
            </li>
          </div>

          <div className="flex flex-col md:w-[50%] md:gap-10 lg:gap-5">
            <li className="flex flex-row gap-4 mt-5">
              <i><BsClock className={iconStyles} /></i>
              <div>
                <p className={numberStyles}>35</p>
                <p className={textStyles}>
                  <strong>Years of experience</strong> aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel
                </p>
              </div>
            </li>

            <li className="flex flex-row gap-4 mt-5">
              <i><BsAward className={iconStyles} /></i>
              <div>
                <p className={numberStyles}>20</p>
                <p className={textStyles}>
                  <strong>Awards</strong> rerum asperiores dolor alias quo reprehenderit eum et nemo pad der
                </p>
              </div>
            </li>

          </div>
        </ul>
      </div>

    </section>
  )
}
