import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [open, setOpen] = useState(false)
  const links = [
    { name: 'Products', href: '/' },
    { name: 'Stockists', href: '/' },
    { name: 'Press', href: '/' },
    { name: 'Recipes', href: '/' },
    { name: 'Our Story', href: '/' },
    { name: 'Merch', href: '/' },
  ]

  return (
    <nav className="sticky top-0 flex justify-between items-center gap-6 pl-6 py-5 lg:px-16 lg:py-7 w-full shadow-sm filter backdrop-blur-lg z-50 bg-[#FDFBF4]">
      {/* First 3 Nav Items */}
      <div className="hidden lg:flex gap-40">
        {links.slice(0, 3).map((item) => (
          <Link key={item.name} href={item.href}>
            <a className="uppercase tracking-widest text-sm">{item.name}</a>
          </Link>
        ))}
      </div>

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
            className={`relative  h-[1px] w-8 bg-black transition duration-100 ease-in ${
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
      {/* Logo */}
      <div className="relative lg:top-0 lg:w-full h-full flex justify-center">
        <Link href="/">
          <a className="uppercase logo font-black flex flex-col lg:absolute lg:-top-3 lg:w-full text-2xl lg:text-7xl lg:px-3 text-center min-w-max">
            Faccia Brutto
          </a>
        </Link>
      </div>
      <div className="lg:hidden"></div>
      {/* Last 3 Nav Items */}
      <div className="hidden lg:flex items-center gap-40">
        {links.slice(3, 6).map((item) => (
          <Link key={item.name} href={item.href}>
            <a className="uppercase min-w-max tracking-widest text-sm">
              {item.name}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  )
}
