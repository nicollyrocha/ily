import { Card } from "../../components/Card";
import { useState } from "react";
import { HeartsAnimation } from "./HeartsAnimation";

export const Motivos = () => {
  const [explode, setExplode] = useState(false);

  const handleClick = () => {
    setExplode(true);
  };

  return (
    <div className="flex flex-col items-center mt-20 md:mt-10">
      {explode && <HeartsAnimation onFinish={() => setExplode(false)} />}
      <h2 className="text-xl md:text-2xl font-semibold mb-4">
        Motivos para amar você (clica nos cards)
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 xl:gap-x-10 2xl:gap-x-4 gap-4 p-8">
        <Card className="cursor-pointer" onClick={handleClick}>
          <div className="text-center">Você é incrível</div>
        </Card>
        <Card className="cursor-pointer" onClick={handleClick}>
          <div className="text-center">Amo passar tempo com você</div>
        </Card>
        <Card className="cursor-pointer" onClick={handleClick}>
          <div className="text-center">
            Você tá sempre disposto a conversar pra resolver as coisas
          </div>
        </Card>
        <Card className="cursor-pointer" onClick={handleClick}>
          <div className="text-center">Sempre vai me ver</div>
        </Card>
        <Card className="cursor-pointer" onClick={handleClick}>
          <div className="text-center">É muito bom ir ao cinema com você</div>
        </Card>
        <Card className="cursor-pointer" onClick={handleClick}>
          <div className="text-center">
            Se esforça para socializar com minha família
          </div>
        </Card>
        <Card className="cursor-pointer" onClick={handleClick}>
          <div className="text-center">Amo seu beijo</div>
        </Card>
        <Card className="cursor-pointer" onClick={handleClick}>
          <div className="text-center">Sempre me apoia</div>
        </Card>
        <Card className="cursor-pointer" onClick={handleClick}>
          <div className="text-center">Amo seu estilo</div>
        </Card>
        <Card className="cursor-pointer" onClick={handleClick}>
          <div className="text-center">É muito carinhoso</div>
        </Card>
        <Card className="cursor-pointer" onClick={handleClick}>
          <div className="text-center">É lindo</div>
        </Card>
        <Card className="cursor-pointer" onClick={handleClick}>
          <div className="text-center">Esteve comigo desde o começo</div>
        </Card>
        <Card className="cursor-pointer" onClick={handleClick}>
          <div className="text-center">
            Está disposto a melhorar sempre pra ficarmos juntos
          </div>
        </Card>
        <Card className="cursor-pointer" onClick={handleClick}>
          <div className="text-center">Pensa em um futuro comigo</div>
        </Card>
        <Card className="cursor-pointer" onClick={handleClick}>
          <div className="text-center">Tira foto minha</div>
        </Card>
        <Card className="cursor-pointer" onClick={handleClick}>
          <div className="text-center">Gosta dos gatinhos aqui de casa</div>
        </Card>
      </div>
    </div>
  );
};
