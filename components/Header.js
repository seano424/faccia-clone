import { useState, useEffect } from 'react'
import Link from 'next/link'
import { links } from 'lib/links'
import Hamburger from './Hamburger'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [isBigLogoVisible, setIsBigLogoVisible] = useState(true)

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset
    setIsBigLogoVisible(currentScrollPos < 40)
    setIsNavVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10 ||
        prevScrollPos > currentScrollPos
    )
    console.log('current: ', currentScrollPos, 'prev: ', prevScrollPos)
    setPrevScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos, isNavVisible, handleScroll])

  return (
    <nav
      className={`top-0 flex justify-between items-center gap-6 pl-6 py-5 lg:px-16 lg:py-7 w-full shadow-sm filter backdrop-blur-lg z-50 bg-[#FDFBF4] transition-opacity duration-300 ${
        isNavVisible ? 'sticky opacity-100' : 'opacity-0'
      }`}
    >
      {/* First 3 Nav Items */}
      <div
        className={`hidden lg:flex gap-20 2xl:gap-40 tranform transition-transform duration-500 ${
          isNavVisible ? 'translate-y-0' : '-translate-y-80'
        }`}
      >
        {links.slice(0, 3).map((item) => (
          <Link key={item.name} href={item.href}>
            <a className="uppercase tracking-widest text-sm">{item.name}</a>
          </Link>
        ))}
      </div>

      <Hamburger open={open} setOpen={setOpen} />

      {/* Logo */}
      <div
        className={`relative lg:top-0 lg:w-full h-full flex justify-center tranform transition-transform duration-500 ${
          isNavVisible ? 'translate-y-0' : '-translate-y-80'
        }`}
      >
        <Link href="/">
          <a
            className={`uppercase logo font-black flex flex-col lg:w-full text-2xl lg:px-3 text-center min-w-max ${
              isBigLogoVisible
                ? 'lg:text-7xl lg:min-w-min lg:-top-3 lg:absolute'
                : 'lg:text-2xl'
            }`}
          >
            Faccia Brutto
          </a>
        </Link>
      </div>
      <div className="lg:hidden"></div>
      
      {/* Last 3 Nav Items */}
      <div
        className={`hidden lg:flex items-center gap-20 2xl:gap-40 tranform transition-transform duration-500 ${
          isNavVisible ? 'translate-y-0' : '-translate-y-80'
        }`}
      >
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
