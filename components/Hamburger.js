export default function Hamburger(props) {
  const { open, setOpen } = props
  return (
    <button
      className="lg:hidden p-0 inline-block w-8 h-6 overflow-hidden min-w-max"
      onClick={() => setOpen(!open)}
      type="button"
    >
      <span className="flex flex-col items-center justify-center  gap-2">
        <span
          className={`relative origin-top-left h-[1px] w-8 bg-black transition duration-200 ease-in transform ${
            open ? 'rotate-45 translate-x-1 -translate-y-1' : ''
          }`}
        ></span>
        <span
          className={`relative  h-[1px] w-8 bg-black transition duration-300 ease-in ${
            open ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`relative origin-bottom-left h-[1px] w-8 bg-black transition duration-200 ease-in transform ${
            open ? '-rotate-45 translate-x-1' : ''
          }`}
        ></span>
      </span>
    </button>
  )
}
