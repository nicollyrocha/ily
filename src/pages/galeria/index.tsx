import { Carrossel } from "../../components/Carrossel";
import { FadeIn } from "../../components/FadeIn";

export const Galeria = () => {
  return (
    <div className="flex flex-col items-center pt-10">
      <h2 className="text-2xl font-semibold">Memórias de nós</h2>
      <FadeIn>
        <Carrossel />
      </FadeIn>
    </div>
  );
};
