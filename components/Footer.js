export default function Footer() {
  return (
    <footer className="bg-[#608168] py-8 px-12 lg:px-16 grid grid-cols-1 gap-8 lg:flex justify-between items-baseline">
      <div className="grid gap-3 w-full lg:w-auto">
        <p className="font-bold logo capitalize tracking-wider text-xl">Keep In Touch:</p>
        <form class="flex md:w-56 justify-between border-b border-black">
          <label class="w-full" for="email">
            <input
              class="w-full p-0 uppercase bg-transparent placeholder:text-black border-none focus:ring-0"
              required=""
              type="email"
              name="email"
              placeholder="Email"
            />
          </label>
          <button type="submit" class="cursor-pointer ml-12 p-0">
            Submit
          </button>
        </form>
      </div>
      <div className="logo tracking-tighter uppercase font-black text-6xl lg:text-7xl text-center md:text-left">
        <h2>Faccia</h2>
        <h2>Brutto</h2>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-2 gap-3 md:w-64 text-center lg:text-left">
        <a className="uppercase text-xs" href="/">
          instagram
        </a>
        <a className="uppercase text-xs" href="/">
          contact us
        </a>
        <a className="uppercase text-xs" href="/">
          facebook
        </a>
        <a className="uppercase text-xs" href="/">
          privacy policy
        </a>
        <a className="uppercase text-xs" href="/">
          twitter
        </a>
        <a className="uppercase text-xs" href="/">
          faq
        </a>
      </div>
    </footer>
  )
}
