import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import carrossel1 from "../assets/carrossel-1.jpeg";
import carrossel2 from "../assets/carrossel-2.jpeg";
import carrossel3 from "../assets/carrossel-3.jpeg";
import carrossel4 from "../assets/carrossel-4.jpeg";
import carrossel5 from "../assets/carrossel-5.jpeg";
import carrossel6 from "../assets/carrossel-6.jpeg";
import carrossel7 from "../assets/carrossel-7.jpeg";
import carrossel8 from "../assets/carrossel-8.jpeg";
import carrossel9 from "../assets/carrossel-9.jpeg";
import carrossel10 from "../assets/carrossel-10.jpeg";
import carrossel11 from "../assets/carrossel-11.jpeg";
import carrossel12 from "../assets/carrossel-12.jpeg";
import carrossel13 from "../assets/carrossel-13.jpeg";
import carrossel14 from "../assets/carrossel-14.jpeg";
import carrossel15 from "../assets/carrossel-15.jpeg";
import carrossel16 from "../assets/carrossel-16.jpeg";
import carrossel17 from "../assets/carrossel-17.jpeg";
import carrossel18 from "../assets/carrossel-18.jpeg";
import carrossel19 from "../assets/carrossel-19.jpeg";
import carrossel20 from "../assets/carrossel-20.jpeg";
import carrossel21 from "../assets/carrossel-21.jpeg";
import carrossel22 from "../assets/carrossel-22.jpeg";
import carrossel23 from "../assets/carrossel-23.jpeg";
import carrossel24 from "../assets/carrossel-24.jpeg";
import carrossel25 from "../assets/carrossel-25.jpeg";
import carrossel26 from "../assets/carrossel-26.jpeg";
import carrossel27 from "../assets/carrossel-27.jpeg";
import carrossel28 from "../assets/carrossel-28.jpeg";
import carrossel29 from "../assets/carrossel-29.jpeg";
import carrossel30 from "../assets/carrossel-30.jpeg";
import carrossel31 from "../assets/carrossel-31.jpeg";
import carrossel32 from "../assets/carrossel-32.jpeg";
import carrossel33 from "../assets/carrossel-33.jpeg";

const images = [
  carrossel1,
  carrossel2,
  carrossel3,
  carrossel4,
  carrossel5,
  carrossel6,
  carrossel7,
  carrossel8,
  carrossel9,
  carrossel10,
  carrossel11,
  carrossel12,
  carrossel13,
  carrossel14,
  carrossel15,
  carrossel16,
  carrossel17,
  carrossel18,
  carrossel19,
  carrossel20,
  carrossel21,
  carrossel22,
  carrossel23,
  carrossel24,
  carrossel25,
  carrossel26,
  carrossel27,
  carrossel28,
  carrossel29,
  carrossel30,
  carrossel31,
  carrossel32,
  carrossel33,
];

// ...rest of the code...

export const Carrossel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const currentX = useRef(0);

  const goToSlide = (index: number) => {
    setCurrentIndex((index + images.length) % images.length);
  };

  const nextSlide = () => {
    goToSlide(currentIndex + 1);
  };

  const prevSlide = () => {
    goToSlide(currentIndex - 1);
  };

  // Touch/swipe handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    startX.current = e.clientX;
    currentX.current = e.clientX;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    startX.current = e.touches[0].clientX;
    currentX.current = e.touches[0].clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    currentX.current = e.clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    currentX.current = e.touches[0].clientX;
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    detectSwipe();
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    detectSwipe();
  };

  const detectSwipe = () => {
    const diff = startX.current - currentX.current;
    const threshold = 50; // pixels para considerar um swipe

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        nextSlide(); // swipe left = próximo slide
      } else {
        prevSlide(); // swipe right = slide anterior
      }
    }
  };

  return (
    <div className="flex justify-center items-center w-full py-14">
      <div className="w-full max-w-2xl flex flex-col items-center gap-4">
        <div
          className="relative w-full overflow-hidden bg-transparent cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Imagens com efeito de deslizamento */}
          <div className="relative h-[600px] overflow-hidden flex items-center justify-center">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="min-w-full h-[600px] flex items-center justify-center"
                >
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="max-w-full max-h-full object-contain select-none pointer-events-none rounded-md"
                    draggable="false"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Botões de navegação */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition z-10"
            aria-label="Slide anterior"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition z-10"
            aria-label="Próximo slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Indicadores de slides */}
        <div className="flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentIndex ? "bg-[#5C2A3D]" : "bg-[#C48B9F]"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
