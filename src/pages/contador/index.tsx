import { useState, useEffect } from "react";
import { FadeIn } from "../../components/FadeIn";

export const Contador = () => {
  const [elapsed, setElapsed] = useState(0);
  const [remaining, setRemaining] = useState(0);

  useEffect(() => {
    const startDate = new Date("2025-09-21T00:00:00").getTime();
    const oneYearDate = new Date("2026-09-21T00:00:00").getTime();

    const updateElapsed = () => {
      const now = new Date().getTime();
      const diff = Math.floor((now - startDate) / 1000);
      setElapsed(diff);

      const remainingDiff = Math.floor((oneYearDate - now) / 1000);
      setRemaining(remainingDiff > 0 ? remainingDiff : 0);
    };

    updateElapsed();
    const interval = setInterval(updateElapsed, 1000);

    return () => clearInterval(interval);
  }, []);

  const totalSeconds = elapsed;
  const days = Math.floor(totalSeconds / (24 * 60 * 60));
  const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  const remainingSeconds = remaining;
  const remainingDays = Math.floor(remainingSeconds / (24 * 60 * 60));
  const remainingHours = Math.floor(
    (remainingSeconds % (24 * 60 * 60)) / (60 * 60),
  );
  const remainingMinutes = Math.floor((remainingSeconds % (60 * 60)) / 60);
  const remainingSecs = remainingSeconds % 60;

  const formatTime = (num: number) => (num < 10 ? `0${num}` : num);

  return (
    <FadeIn>
      <div className="flex flex-col items-center justify-center gap-12 pt-32">
        <div className="text-center">
          <div className="text-2xl font-semibold">Estamos juntos há</div>

          <div className="flex gap-8 text-center mt-6">
            <div className="flex flex-col items-center">
              <div className="text-5xl font-bold font-mono text-[#5C2A3D]">
                {days}
              </div>
              <div className="text-sm text-gray-600 mt-2">dias</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-5xl font-bold font-mono text-[#5C2A3D]">
                {formatTime(hours)}
              </div>
              <div className="text-sm text-gray-600 mt-2">horas</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-5xl font-bold font-mono text-[#5C2A3D]">
                {formatTime(minutes)}
              </div>
              <div className="text-sm text-gray-600 mt-2">minutos</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-5xl font-bold font-mono text-[#5C2A3D]">
                {formatTime(seconds)}
              </div>
              <div className="text-sm text-gray-600 mt-2">segundos</div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-4xl border-t border-gray-300 my-4"></div>

        <div className="text-center">
          <div className="text-2xl font-semibold">Faltam para 1 ano</div>

          <div className="flex gap-8 text-center mt-6">
            <div className="flex flex-col items-center">
              <div className="text-5xl font-bold font-mono text-[#C17A8E]">
                {remainingDays}
              </div>
              <div className="text-sm text-gray-600 mt-2">dias</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-5xl font-bold font-mono text-[#C17A8E]">
                {formatTime(remainingHours)}
              </div>
              <div className="text-sm text-gray-600 mt-2">horas</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-5xl font-bold font-mono text-[#C17A8E]">
                {formatTime(remainingMinutes)}
              </div>
              <div className="text-sm text-gray-600 mt-2">minutos</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-5xl font-bold font-mono text-[#C17A8E]">
                {formatTime(remainingSecs)}
              </div>
              <div className="text-sm text-gray-600 mt-2">segundos</div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};
