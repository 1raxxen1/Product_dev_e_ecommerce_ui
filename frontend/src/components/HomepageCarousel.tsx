import { useState } from "react"

const images = [
  {
    image: "/main2.jpg",
    title: "Smell Nice",
    subtitle: "Ship production-ready apps with confidence",
    cta: "Get Started",
  },
  {
    image: "/main2.jpg",
    title: "Balls.",
    subtitle: "Infrastructure that grows with your users",
    cta: "Learn More",
  },
  {
    image: "/main2.jpg",
    title: "Smell like Men",
    subtitle: "No vendor lock-in. Full control.",
    cta: "Explore",
  },
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
        {images.map((slide, i) => (
          <div key={i} className="relative w-full flex-shrink-0">
            <img
              src={slide.image}
              className="h-[60vh] w-full object-cover"
              alt={slide.title}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

            <div className="absolute inset-0 flex items-center">
              <div className="px-20 max-w-xl text-white">
                <h1 className="text-4xl font-bold leading-tight">
                  {slide.title}
                </h1>
                <p className="mt-4 text-lg text-white/90">
                  {slide.subtitle}
                </p>

                <button className="mt-6 rounded-lg bg-white px-6 py-3 font-medium text-black hover:bg-white/90">
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 w-10 h-10 text-white hover:bg-black/60"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 w-10 h-10  text-white hover:bg-black/60"
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
