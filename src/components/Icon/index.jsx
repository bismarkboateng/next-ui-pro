
export default function index(props) {
  return (
    <div className="w-[64px] h-[64px] bg-[#ffc451] flex justify-center
      items-center rounded-sm text-[28px] text-[#151515] mb-5">
        {props.children}
    </div>
  )
}