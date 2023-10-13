import { Input, Button } from ".."

export default function index() {
  return (
    <form className="mb-10 flex flex-col gap-5 lg:mb-0 lg:mt-4">

        <div className="flex flex-col gap-5 md:flex md:flex-row gap-7">
            <Input
                placeholder="Your Name"
            />

            <Input
                placeholder="Your Email"
            />
        </div>

        <Input
            placeholder="Subject"
        />

        <textarea
            name="" id="" 
            cols="30" 
            rows="5"
            placeholder="Message"
            className="outline-none border border-[#dee2e6] 
            focus:border-[#ffe69c] rounded py-[0.375rem] px-[0.75rem]"
        />

        <Button
            className="text-base font-OpenSans py-[10px] px-[24px]
            bg-[#ffc451] w-[200px] rounded ml-[23%] cursor-pointer
            md:ml-[38%]"
        >
            Send Message
        </Button>
    </form>
  )
}
