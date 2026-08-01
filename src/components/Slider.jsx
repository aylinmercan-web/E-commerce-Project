import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

function Slider({ slides }) {
  const [index, setIndex] = useState(0)

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const slide = slides[index]

  return (
    <section className="relative flex items-center justify-between overflow-hidden bg-gradient-to-r from-sky-300 to-emerald-200 mx-4 md:mx-10 mt-6 rounded-md px-6 md:px-16 py-10 md:py-20">
      <button onClick={prevSlide} className="absolute left-2 md:left-6 flex z-20">
        <ChevronLeft size={28} className="text-white" />
      </button>

      <div className="flex flex-col gap-4 max-w-md z-10">
        <span className="text-sm font-semibold text-blue-600">{slide.tag}</span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900">
          {slide.title}
        </h1>
        <p className="text-sm md:text-base text-slate-700">{slide.description}</p>
        <button className="w-fit bg-sky-500 text-white font-bold px-6 py-3 mt-2">
          SHOP NOW
        </button>
      </div>

      <img
        src={slide.image}
        alt={slide.title}
        className="hidden md:block h-72 lg:h-96 object-contain z-10"
      />

      <button onClick={nextSlide} className="absolute right-2 md:right-6 flex z-20">
        <ChevronRight size={28} className="text-white" />
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full ${i === index ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Slider