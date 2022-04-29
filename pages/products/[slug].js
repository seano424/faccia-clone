import { useState, useEffect, useRef } from 'react'
import Layout from '@/components/Layout'
import Image from 'next/image'
import useOutsideMouseOver from 'hooks/useOutsideMouseOver'

export default function Product(props) {
  const { product } = props
  const { images } = product
  const imageRef = useRef()
  const contentRef = useRef()

  const [state, setState] = useState({
    mainImage: 0,
    x: -100,
    y: 100,
    showCustomCursor: true,
  })

  useEffect(() => {
    const moveCursor = (e) => {
      const x = e.clientX - 16
      const y = e.clientY - 16
      setState((prevState) => ({
        ...prevState,
        x: x,
        y: y,
      }))
    }
    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  function handleImageToShow() {
    setState((prevState) => ({
      mainImage:
        prevState.mainImage < images.length - 1 ? prevState.mainImage + 1 : 0,
    }))
  }

  useOutsideMouseOver(imageRef, () => {
    setState((prevState) => ({
      ...prevState,
      showCustomCursor: false,
    }))
  })

  useOutsideMouseOver(contentRef, () => {
    setState((prevState) => ({
      ...prevState,
      showCustomCursor: true,
    }))
  })

  return (
    <Layout {...props} page="products">
      <div
        className={`absolute cursor-none z-20 left-0 top-0 text-5xl pointer-events-none transition-opacity duration-150 ${
          state.showCustomCursor ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transform: `translate3d(${state.x}px, ${state.y}px, 0)`,
        }}
      >
        <p>
          {state.mainImage + 1} / {images.length}
        </p>
      </div>
      <section
        className={`grid grid-cols-2 ${
          state.showCustomCursor && 'cursor-none'
        }`}
      >
        <div
          ref={imageRef}
          onClick={handleImageToShow}
          className="border-8 bg-red-600/70 w-full h-screen relative"
        >
          {images.map((image, i) => (
            <Image
              key={i}
              src={image}
              alt={`${product.title} Image ${i + 1}`}
              layout="fill"
              priority
              className={`object-cover transition-all duration-500 select-none ${
                state.mainImage === i ? 'z-10' : 'z-0'
              }`}
            />
          ))}
        </div>
        <div
          ref={contentRef}
          className="border-8 bg-black/70 w-full h-screen"
        ></div>
      </section>
    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/api/products')
  const products = await res.json()

  const paths = products.map((product) => ({
    params: { slug: product.title.replace(/\s+/g, '-').toLowerCase() },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const linksRes = await fetch('http://localhost:3000/api/links')
  const links = await linksRes.json()

  const productsRes = await fetch('http://localhost:3000/api/products')
  const products = await productsRes.json()

  const productRes = await fetch(
    `http://localhost:3000/api/products/${params.slug}`
  )
  const product = await productRes.json()

  return {
    props: { products, links, product },
  }
}
