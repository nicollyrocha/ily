import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#C48B9F] fixed z-50 w-full p-4 flex justify-between items-center shadow-md">
      <div
        className="text-white text-4xl title cursor-pointer"
        onClick={() => navigate("/")}
      >
        Você + Eu
      </div>
      <div className="flex w-8/12">
        <div
          className="text-white text-lg cursor-pointer hover:underline mx-4"
          onClick={() => navigate("/motivos")}
        >
          Motivos
        </div>
        <div
          className="text-white text-lg cursor-pointer hover:underline mx-4"
          onClick={() => navigate("/galeria")}
        >
          Galeria
        </div>
        <div
          className="text-white text-lg cursor-pointer hover:underline mx-4"
          onClick={() => navigate("/contador")}
        >
          Contador
        </div>
        <div
          className="text-white text-lg cursor-pointer hover:underline mx-4"
          onClick={() => navigate("/game")}
        >
          Game
        </div>
        <div
          className="text-white text-lg cursor-pointer hover:underline mx-4"
          onClick={() => navigate("/mensagem")}
        >
          Mensagem
        </div>
      </div>
    </div>
  );
};
