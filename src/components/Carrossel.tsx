import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "src/assets/carrossel-1.jpeg",
  "src/assets/carrossel-2.jpeg",
  "src/assets/carrossel-3.jpeg",
  "src/assets/carrossel-4.jpeg",
  "src/assets/carrossel-5.jpeg",
  "src/assets/carrossel-6.jpeg",
  "src/assets/carrossel-7.jpeg",
  "src/assets/carrossel-8.jpeg",
  "src/assets/carrossel-9.jpeg",
  "src/assets/carrossel-10.jpeg",
  "src/assets/carrossel-11.jpeg",
  "src/assets/carrossel-12.jpeg",
  "src/assets/carrossel-13.jpeg",
  "src/assets/carrossel-14.jpeg",
  "src/assets/carrossel-15.jpeg",
  "src/assets/carrossel-16.jpeg",
  "src/assets/carrossel-17.jpeg",
  "src/assets/carrossel-18.jpeg",
  "src/assets/carrossel-19.jpeg",
  "src/assets/carrossel-20.jpeg",
  "src/assets/carrossel-21.jpeg",
  "src/assets/carrossel-22.jpeg",
  "src/assets/carrossel-23.jpeg",
  "src/assets/carrossel-24.jpeg",
  "src/assets/carrossel-25.jpeg",
  "src/assets/carrossel-26.jpeg",
  "src/assets/carrossel-27.jpeg",
  "src/assets/carrossel-28.jpeg",
  "src/assets/carrossel-29.jpeg",
  "src/assets/carrossel-30.jpeg",
  "src/assets/carrossel-31.jpeg",
  "src/assets/carrossel-32.jpeg",
  "src/assets/carrossel-33.jpeg",
];

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
