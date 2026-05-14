import { useState, useEffect } from 'react';
import banner1 from '../assets/1777360943344_atlanticweb.avif';
import banner2 from '../assets/1776147534355_popwebnew.avif';

const slides = [banner1, banner2];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent(prev => (prev - 1 + slides.length) % slides.length);
  const next = () => setCurrent(prev => (prev + 1) % slides.length);

  return (
    <div className="w-full overflow-hidden">

      {/* aspect-ratio trick — stays proportional on ALL screen sizes */}
      <div className="relative w-full" style={{ aspectRatio: '85/22' }}>

        {/* Slides */}
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Banner ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-fill transition-opacity duration-700 ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center text-xl transition-all z-10"
        >
          ‹
        </button>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center text-xl transition-all z-10"
        >
          ›
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-[3px] rounded-full transition-all duration-300 ${
                index === current ? 'w-7 bg-white' : 'w-2 bg-white/50'
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default HeroCarousel;