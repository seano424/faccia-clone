import { drinks } from 'lib/drinks'

export default function Drinks() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto px-10">
        {drinks.map((drink, i) => (
          <div
            key={i}
            className={`flex flex-col justify-center items-center text-center gap-3 ${drink.textColor}`}
          >
            {/* Image and Stickers! */}
            <div className="relative group cursor-pointer">
              <div
                className={`absolute opacity-0 top-16 transition group-hover:opacity-100 ${
                  drink.stickerRotate ? '-right-10' : '-left-10'
                }`}
              >
                <img
                  className="h-20 w-full"
                  src={`/images/sticker-${drink.stickerColor}.png`}
                  alt="Top Sticker Image"
                  loading="lazy"
                />
              </div>
              <div
                className={`absolute opacity-0 bottom-10 transition  group-hover:opacity-100 
                ${
                  drink.stickerRotate
                    ? '-rotate-12 -left-4'
                    : '-right-4 rotate-12'
                }`}
              >
                <img
                  className={`${drink.size === 'small' ? 'h-40' : 'h-56'}`}
                  src={`/images/sticker-small-${drink.stickerColor}.png`}
                  alt="Bottom Sticker Image"
                />
              </div>
              <img
                className={`${drink.size === 'small' && 'md:px-20'}`}
                src={drink.image}
                alt={`image number ${i + 1}`}
                loading="lazy"
              />
            </div>

            {/* Content and CTA Button */}
            <p className="text-lg my-2 text-gray-800">{drink.body}</p>
            <a className={`cta-button ${drink.decorationColor}`} href="/">
              Learn More
            </a>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center my-10 gap-3">
        <img className="h-28" src="/images/nonna.png" alt="Nonna Image" />
        <p className="uppercase text-xs ">NONNA APPROVED</p>
        <a className="cta-button" href="/">
          See where to buy
        </a>
      </div>
    </section>
  )
}
