import { Heart } from "lucide-react";
import { useEffect, useMemo } from "react";

type Props = {
  onFinish: () => void;
};

export function HeartsAnimation({ onFinish }: Props) {
  const generateHearts = () =>
    Array.from({ length: 36 }).map(() => {
      const angle = Math.random() * Math.PI * 2;
      const distance = 120 + Math.random() * 260;

      return {
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        size: 14 + Math.random() * 22,
        rotate: Math.random() * 360,
        delay: Math.random() * 0.08,
      };
    });

  const hearts = useMemo(() => generateHearts(), []);

  useEffect(() => {
    const timer = setTimeout(onFinish, 1600);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center">
      {hearts.map((heart, i) => (
        <Heart
          key={i}
          fill="currentColor"
          className="absolute text-pink-500 animate-pop"
          style={{
            width: heart.size,
            height: heart.size,
            animationDelay: `${heart.delay}s`,
            transform: `
              translate(${heart.x}px, ${heart.y}px)
              rotate(${heart.rotate}deg)
            `,
          }}
        />
      ))}
    </div>
  );
}
