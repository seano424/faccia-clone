export default function Hamburger(props) {
  const { state, setState } = props
  return (
    <button
      className="lg:hidden p-0 inline-block w-8 h-6 overflow-hidden min-w-max"
      onClick={() =>
        setState((prevState) => ({
          ...prevState,
          isHamburgerOpen: !prevState.isHamburgerOpen,
        }))
      }
      type="button"
    >
      <span className="flex flex-col items-center justify-center  gap-2">
        <span
          className={`relative origin-top-left h-[1px] w-8 bg-black transition duration-200 ease-in transform ${
            state.isHamburgerOpen
              ? 'rotate-45 translate-x-1 -translate-y-1'
              : ''
          }`}
        ></span>
        <span
          className={`relative  h-[1px] w-8 bg-black transition duration-300 ease-in ${
            state.isHamburgerOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`relative origin-bottom-left h-[1px] w-8 bg-black transition duration-200 ease-in transform ${
            state.isHamburgerOpen ? '-rotate-45 translate-x-1' : ''
          }`}
        ></span>
      </span>
    </button>
  )
}
