import { useEffect, useState } from "react"

const images = [
  "/main2.jpg",
  "/main2.jpg",
  "/main2.jpg",
]

const HomepageCarousel = () => {
  const [index, setIndex] = useState(0)

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length)
  }

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length)
  }


  return (
    <div className="relative w-full overflow-hidden">

      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            className="h-[60vh] w-full flex-shrink-0 object-cover"
            alt={`slide-${i}`}
          />
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-3 py-2 text-white hover:bg-black/60"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-3 py-2 text-white hover:bg-black/60"
      >
        ›
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default HomepageCarousel
