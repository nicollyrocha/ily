import { useState } from "react";
import { Button } from "../../components/Button";
import { FadeIn } from "../../components/FadeIn";

export const Mensagem = () => {
  const [message, setMessage] = useState("");

  const phoneNumber = "5521991198956";
  const handleSendMessage = () => {
    if (!message.trim()) return;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${"*Enviado pelo site:* " + encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <FadeIn>
      <div className="flex flex-col gap-4 items-center pt-20">
        <div>
          Se você quiser, pode enviar um recado para mim pelo WhatsApp, sempre
          que quiser:
        </div>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escreva sua mensagem..."
          className="border rounded-md p-3 resize-none h-32 w-5/12"
        />

        <Button onClick={handleSendMessage}>Enviar</Button>
      </div>
    </FadeIn>
  );
};
