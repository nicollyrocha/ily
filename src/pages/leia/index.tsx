import { useState, useRef } from "react";
import { FadeIn } from "../../components/FadeIn";

export const Leia = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [digits, setDigits] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const correctCode = "210925"; // 21/09/25

  const onClose = () => setIsOpen(false);

  const handleDigitChange = (index: number, value: string) => {
    if (value && !/^\d$/.test(value)) return;

    const newDigits = [...digits];
    newDigits[index] = value;
    setDigits(newDigits);
    setError(false);

    // Move para o próximo campo se digitou algo
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Valida quando o último campo é preenchido
    if (index === 5 && value) {
      const enteredCode = newDigits.join("");
      if (enteredCode === correctCode) {
        setTimeout(() => onClose(), 300);
      } else {
        setError(true);
        setTimeout(() => {
          setDigits(["", "", "", "", "", ""]);
          setError(false);
          inputRefs.current[0]?.focus();
        }, 1000);
      }
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    // Move para o campo anterior ao pressionar backspace
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    if (/^\d+$/.test(pastedData)) {
      const newDigits = pastedData
        .split("")
        .concat(["", "", "", "", "", ""])
        .slice(0, 6);
      setDigits(newDigits);

      if (pastedData.length === 6) {
        if (pastedData === correctCode) {
          setTimeout(() => onClose(), 300);
        } else {
          setError(true);
          setTimeout(() => {
            setDigits(["", "", "", "", "", ""]);
            setError(false);
            inputRefs.current[0]?.focus();
          }, 1000);
        }
      }
    }
  };

  return (
    <div className="flex justify-center py-16 bg-rose-50 min-h-screen">
      {isOpen && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-40 pointer-events-none">
          <div className="bg-white p-6 rounded-lg w-90 md:w-full shadow-lg pointer-events-auto">
            <div className="text-center">
              <div className="mb-6 text-gray-700">
                Para abrir a carta, digite o código de acesso:
                <br />
                <span className="font-semibold">
                  o dia que começamos a namorar
                </span>
              </div>

              <div className="flex justify-center gap-3 mb-4">
                {digits.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => {
                      inputRefs.current[index] = el;
                    }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleDigitChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    className={`w-10 md:w-14 h-14 text-center text-2xl font-bold border-2 rounded-lg focus:outline-none focus:ring-2 transition-all ${
                      error
                        ? "border-red-500 bg-red-50 focus:ring-red-500"
                        : "border-gray-300 focus:border-rose-400 focus:ring-rose-400"
                    }`}
                    autoFocus={index === 0}
                  />
                ))}
              </div>

              {error && (
                <div className="text-red-500 text-sm animate-pulse">
                  Código incorreto! Tente novamente.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <FadeIn>
        <div
          className={`w-90 md:w-2xl bg-white p-12 rounded-2xl shadow-lg text-lg leading-8 text-gray-800 font-serif transition-all duration-300 ${
            isOpen ? "blur-sm" : ""
          }`}
        >
          <p className="mb-6">Meu amor,</p>

          <p className="indent-8 mb-6">
            Nesses 6 meses que estamos juntos, eu tenho aprendido cada vez mais
            com você. Aprendi que a melhor forma de resolver as coisas é
            conversando, que precisamos nos esforçar e mudar um pelo outro, que
            precisamos entender o que sentimos para nos relacionar melhor...
          </p>

          <p className="indent-8 mb-6">
            Eu não sabia me comunicar direito, não conversava sobre meus
            sentimentos, achava que não valia a pena. Você me mostrou que isso
            não é verdade. Eu nunca imaginei que me relacionaria com alguém que
            se importasse tanto com o que sinto e em entender e conversar sobre
            isso quando precisasse. Você me ensinou que a comunicação é a base
            de tudo, que sem ela tudo vai por água abaixo.
          </p>

          <p className="indent-8 mb-6">
            Eu sei que não estamos num momento muito bom, mas eu quero que saiba
            que eu te amo muito e que quero passar o resto da vida com você.
            Quero que a gente supere isso juntos e que a gente aprenda com os
            erros que cometemos nesse tempo. Está difícil para ambos, mas estou
            disposta a me esforçar para que dê certo. É o que eu mais quero. E
            espero que você também esteja disposto.
          </p>

          <p className="indent-8 mb-6">
            Eu não sou perfeita, mas quero melhorar cada vez mais por você.
            Porque quero construir uma vida com você. Morar juntos, casar,
            viajar, ter filhos... Quando penso no futuro, você sempre está lá.
          </p>

          <p className="indent-8">
            Obrigada por esse tempo juntos, por tudo que me ensinou e por tudo
            que me faz sentir. Espero que venham muitos outros meses e anos
            juntos, aprendendo e crescendo um com o outro.
          </p>

          <p className="mt-10 text-right">Eu te amo para sempre. ❤️</p>
        </div>
      </FadeIn>
    </div>
  );
};
