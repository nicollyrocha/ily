import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-[#C48B9F] fixed z-50 w-full p-4 flex justify-between items-center shadow-md">
      <div
        className="text-white md:text-4xl title cursor-pointer"
        onClick={() => handleNavigate("/")}
      >
        Você + Eu
      </div>

      {/* Menu Desktop */}
      <div className="hidden md:flex w-8/12">
        <div
          className="text-white text-lg cursor-pointer hover:underline mx-4"
          onClick={() => handleNavigate("/motivos")}
        >
          Motivos
        </div>
        <div
          className="text-white text-lg cursor-pointer hover:underline mx-4"
          onClick={() => handleNavigate("/galeria")}
        >
          Galeria
        </div>
        <div
          className="text-white text-lg cursor-pointer hover:underline mx-4"
          onClick={() => handleNavigate("/contador")}
        >
          Contador
        </div>
        <div
          className="text-white text-lg cursor-pointer hover:underline mx-4"
          onClick={() => handleNavigate("/game")}
        >
          Game
        </div>
        <div
          className="text-white text-lg cursor-pointer hover:underline mx-4"
          onClick={() => handleNavigate("/leia")}
        >
          Leia
        </div>
      </div>

      {/* Menu Mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white p-2"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isMenuOpen && (
          <div className="absolute top-16 right-0 bg-[#C48B9F] w-full flex flex-col items-center gap-4 py-4 shadow-lg">
            <div
              className="text-white text-lg cursor-pointer hover:underline"
              onClick={() => handleNavigate("/motivos")}
            >
              Motivos
            </div>
            <div
              className="text-white text-lg cursor-pointer hover:underline"
              onClick={() => handleNavigate("/galeria")}
            >
              Galeria
            </div>
            <div
              className="text-white text-lg cursor-pointer hover:underline"
              onClick={() => handleNavigate("/contador")}
            >
              Contador
            </div>
            <div
              className="text-white text-lg cursor-pointer hover:underline"
              onClick={() => handleNavigate("/game")}
            >
              Game
            </div>
            <div
              className="text-white text-lg cursor-pointer hover:underline"
              onClick={() => handleNavigate("/leia")}
            >
              Leia
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
