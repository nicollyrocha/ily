import { useEffect, useState } from "react";

export const FadeIn = ({ children }: { children: React.ReactNode }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // espera o mount pra disparar a animação
    requestAnimationFrame(() => setShow(true));
  }, []);

  return (
    <div
      className={`
        transition-all duration-700 ease-out
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      {children}
    </div>
  );
};
