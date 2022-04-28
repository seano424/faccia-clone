import Image from "next/image"

export default function HomeFooter() {
  return (
    <section className="relative w-full h-[480px] lg:h-screen">
      <div className="absolute z-10 top-6 left-3 w-48 text-white text-xl tracking-wider text-white/90">
        <p>How do we do it? Learn more about us and our process.</p>
      </div>
      <Image
        src="/images/about-us-banner.jpeg"
        alt="About Us Image"
        layout="fill"
        className="object-cover object-center"
      />
      <div className="absolute bottom-6 w-full flex justify-center">
        <a className="cta-button text-white/90" href="/">
          learn more
        </a>
      </div>
    </section>
  )
}
