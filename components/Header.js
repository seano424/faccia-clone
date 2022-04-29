import { useState, useEffect, useRef, useContext } from 'react'
import { CursorContext } from '@/context/CursorContext'
import Link from 'next/link'
import Image from 'next/image'
import useOutsideMouseOver from 'hooks/useOutsideMouseOver'
import useMouseOver from 'hooks/useMouseOver'
import Hamburger from './Hamburger'

export default function Header(props) {
  const { products, links, page } = props
  const { cursor, setCursor } = useContext(CursorContext)
  const headerRef = useRef()
  const [state, setState] = useState({
    isHamburgerOpen: false,
    prevScrollPos: 0,
    isNavVisible: true,
    isLogoBig: true,
    showProducts: false,
  })

  const homePage = page === 'home'

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset
    const isNavVisibleTernary =
      (state.prevScrollPos > currentScrollPos &&
        state.prevScrollPos - currentScrollPos > 70) ||
      currentScrollPos < 10 ||
      state.prevScrollPos > currentScrollPos

    setState((prevState) => ({
      ...prevState,
      isLogoBig: currentScrollPos < 40,
      isNavVisible: isNavVisibleTernary,
      prevScrollPos: currentScrollPos,
    }))
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [state])

  useOutsideMouseOver(headerRef, () => {
    setState((prevState) => ({
      ...prevState,
      showProducts: false,
    }))
  })

  useMouseOver(headerRef, () => {
    setCursor(prevState => ({
      ...prevState,
      showCustomCursor: false
    }))
  })

  function handleShowProducts() {
    setState((prevState) => ({
      ...prevState,
      showProducts: true,
    }))
  }

  return (
    <nav ref={headerRef} className="w-full fixed z-50">
      <div
        className={`p-6 lg:px-16 transform transition-transform duration-500 ${
          state.isNavVisible ? 'translate-y-0' : '-translate-y-[8rem]'
        } ${
          homePage && !state.showProducts ? 'bg-[#FDFBF4]' : 'bg-transparent'
        } ${state.showProducts && 'bg-[#FDFBF4]'}`}
      >
        <ul className="flex justify-between items-center gap-6">
          {/* Links 1-3 */}
          <div
            className={`hidden lg:flex gap-20 2xl:gap-40 tranform transition-transform duration-500 ${
              state.isNavVisible ? 'translate-y-0' : '-translate-y-80'
            }`}
          >
            {links.slice(0, 3).map((item) => (
              <Link key={item.name} href={item.href}>
                <a
                  onMouseEnter={
                    item.name.toLowerCase() === 'products'
                      ? handleShowProducts
                      : null
                  }
                  className="uppercase hover:underline underline-offset-4 tracking-widest text-sm"
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </div>

          <Hamburger state={state} setState={setState} />

          {/* Logo */}
          <div
            className={`relative z-10 lg:top-0 lg:w-full h-full flex justify-center tranform transition-transform duration-500 ${
              state.isNavVisible ? 'translate-y-0' : '-translate-y-80'
            }`}
          >
            <Link href="/">
              <a
                className={`logo ${
                  state.isLogoBig
                    ? 'lg:text-7xl lg:min-w-min lg:-top-3 lg:absolute'
                    : 'lg:text-2xl'
                }`}
              >
                Faccia Brutto
              </a>
            </Link>
          </div>
          <div className="lg:hidden"></div>

          {/* Links 4-6 */}
          <div
            className={`hidden lg:flex items-center gap-20 2xl:gap-40 tranform transition-transform duration-500 ${
              state.isNavVisible ? 'translate-y-0' : '-translate-y-80'
            }`}
          >
            {links.slice(3, 6).map((item) => (
              <Link key={item.name} href={item.href}>
                <a className="uppercase min-w-max hover:underline underline-offset-4 tracking-widest text-sm">
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
        </ul>

        <ul
          className={`pt-10 pb-5 grid grid-cols-5 tranform duration-500 ${
            state.showProducts ? 'translate-y-0' : '-translate-y-full hidden'
          } ${state.isNavVisible ? '' : 'translate-y-20 pb-20'}`}
        >
          {products.map((product) => (
            <Link
              key={product.title}
              onClick={() =>
                setState((prevState) => ({ ...prevState, showProducts: false }))
              }
              href={`/products/${product.title
                .replace(/\s+/g, '-')
                .toLowerCase()}`}
            >
              <a>
                <Image
                  src={product.image}
                  alt={product.title}
                  height={400}
                  width={300}
                />
                <p className="tracking-wider text-xl">{product.title}</p>
              </a>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  )
}
