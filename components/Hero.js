import Image from 'next/image'

export default function Hero() {
  return (
    <section>
      <img
        className="w-full object-cover object-top h-[400px] md:h-[600px] lg:h-[680px]"
        src="/images/hero.jpeg"
        alt="Hero Image"
      />
      <div className="flex items-center justify-between px-3 py-10 lg:px-10">
        <p className="max-w-lg lg:max-w-full text-xl lg:text-6xl">
          At Faccia Brutto we produce natural and delicious organic Italian
          spirits using old world methods, and sourcing from sustainable
          botanical producers.
        </p>
        <Image
          src="/images/faccia-guy.png"
          alt="Faccia Guy"
          width={150}
          height={100}
        />
      </div>
    </section>
  )
}
