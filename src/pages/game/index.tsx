import { useState } from "react";
import { Button } from "../../components/Button";
import { FadeIn } from "../../components/FadeIn";

export const Game = () => {
  const perguntas = [
    {
      pergunta: "Qual o nome do nosso primeiro filme juntos?",
      respostas: [
        "Amores Materialistas",
        "O Quarteto Fantástico",
        "A Hora do Mal",
        "O Castelo Animado",
      ],
      correta: "O Quarteto Fantástico",
    },
    {
      pergunta: "Quando começamos a namorar?",
      respostas: ["21/09/2025", "15/08/2025", "18/09/2025", "06/10/2025"],
      correta: "21/09/2025",
    },
    {
      pergunta: "Qual meu filme favorito?",
      respostas: [
        "Diário de uma Paixão",
        "Pânico",
        "Querido John",
        "500 Dias com Ela",
      ],
      correta: "500 Dias com Ela",
    },
    {
      pergunta: "Qual filme assistimos quando me pediu em namoro?",
      respostas: [
        "O Castelo Animado",
        "Invocação do Mal",
        "A Sogra Perfeita 2",
        "Uma Batalha Após a Outra",
      ],
      correta: "O Castelo Animado",
    },
    {
      pergunta: "Qual o nome da minha gatinha que faleceu?",
      respostas: ["Luna", "Marie", "Lua", "Amora"],
      correta: "Lua",
    },
    {
      pergunta: "Qual foi a primeira coisa que você me deu?",
      respostas: [
        "Flores",
        "Kitkat",
        "Bloquinho com motivos para me amar",
        "Pelúcia",
      ],
      correta: "Kitkat",
    },
    {
      pergunta: "Qual dia do meu aniversário?",
      respostas: ["05/02", "12/03", "08/02", "04/02"],
      correta: "05/02",
    },
    {
      pergunta: "Quem falou eu te amo primeiro?",
      respostas: ["Nicolly", "Caio"],
      correta: "Caio",
    },
    {
      pergunta: "Quando nos assumimos pela primeira vez nas redes sociais?",
      respostas: [
        "Quando fomos no Rio",
        "Um dia na academia",
        "No show do Ferrugem",
        "Quando assistimos O Castelo Animado",
      ],
      correta: "Quando fomos no Rio",
    },
  ];
  const [respostasUsuario, setRespostasUsuario] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const acertos = perguntas.reduce((total, pergunta, index) => {
    const resposta = respostasUsuario[index];
    return resposta === pergunta.correta ? total + 1 : total;
  }, 0);

  const handleAnswer = (resposta: string) => {
    setRespostasUsuario((prev) => {
      const novasRespostas = [...prev];
      novasRespostas[currentIndex] = resposta;
      return novasRespostas;
    });

    setCurrentIndex((prev) => Math.min(prev + 1, perguntas.length));
  };

  return (
    <div className="flex flex-col items-center pt-20 gap-10">
      <h2 className="text-2xl font-semibold">Veremos se você lembra</h2>
      <FadeIn>
        {perguntas[currentIndex] ? (
          <div className="text-center">
            <div className="mb-4">{perguntas[currentIndex].pergunta}</div>
            <div className="flex flex-col md:flex-row gap-5 justify-center">
              {perguntas[currentIndex].respostas.map((resposta) => (
                <Button key={resposta} onClick={() => handleAnswer(resposta)}>
                  {resposta}
                </Button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center flex flex-col gap-4">
            Você acertou {acertos} de {perguntas.length} perguntas!
            <Button onClick={() => setCurrentIndex(0)}>Resetar</Button>
          </div>
        )}

        {/* {perguntas.map((item, index) => (
        <div key={index} className="flex flex-col items-center gap-4">
          <div>{item.pergunta}</div>
          <div className="flex gap-5">
            {item.respostas.map((resposta) => (
              <Button
                key={resposta}
                onClick={() => {
                  const novasRespostas = [...respostasUsuario];
                  novasRespostas[index] = resposta;
                  setRespostasUsuario(novasRespostas);
                }}
              >
                {resposta}
              </Button>
            ))}
          </div>
        </div>
      ))} */}
      </FadeIn>
    </div>
  );
};
