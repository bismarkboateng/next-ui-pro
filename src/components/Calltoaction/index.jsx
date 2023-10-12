import {Button } from ".."

export default function index() {
  return (
    <>
      
      <section className="relative bg-callToAction w-[100%] h-[270px] bg-cover bg-center
        flex flex-row justify-center items-center">

        <div className="absolute top-0 left-0 w-[100%] h-[100%] call-to-action z-0" />

        <div className="absolute z-[10] flex flex-col w-[95%] justify-center items-center">
          <h3 className="text-[28px] font-Raleway text-white font-bold leading-[1.2px]">
            Call To Action
          </h3>

          <p className="w-[95%] text-base text-center font-OpenSans
            mt-7 text-white">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <Button
            className="py-[8px] px-[28px] border-2 border-white text-base font-semibold
            rounded text-white font-Raleway mt-6 w-[180px] cursor-pointer"
          >
            Call To Action
          </Button>
        </div>

      </section>
    </>
  )
}
