import { Heart } from "lucide-react";
import { useEffect } from "react";

type Props = {
  onFinish: () => void;
};

const generateHearts = () =>
  Array.from({ length: 36 }).map(() => {
    const angle = Math.random() * Math.PI * 2;
    const distance = 120 + Math.random() * 260;

    return {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
      size: 14 + Math.random() * 22,
      rotate: Math.random() * 360,
      delay: Math.random() * 0.2,
      duration: 1.2 + Math.random() * 0.4,
    };
  });

const hearts = generateHearts();

export function HeartsAnimation({ onFinish }: Props) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center">
      {hearts.map((heart, i) => (
        <Heart
          key={i}
          fill="currentColor"
          className="absolute text-pink-500"
          style={
            {
              width: heart.size,
              height: heart.size,
              "--x": `${heart.x}px`,
              "--y": `${heart.y}px`,
              "--rotate": `${heart.rotate}deg`,
              animation: `pop ${heart.duration}s ease-out ${heart.delay}s forwards`,
              opacity: 0,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
