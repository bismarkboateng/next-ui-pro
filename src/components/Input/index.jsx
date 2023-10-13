

export default function index({ placeholder }) {
  return (
    <div className="w-[100%]">
        <input
            placeholder={placeholder}
            className="w-[100%] py-[0.375rem] px-[0.75rem] font-normal rounded
            border border-[#dee2e6] focus:border-[#ffe69c]
            placeholder:font-OpenSans outline-none placeholder:text-[14px]"
        />
    </div>
  )
}
