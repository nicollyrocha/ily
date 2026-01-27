import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { MainLayout } from "./layouts/MainLayout";
import { Motivos } from "./pages/motivos";
import { Galeria } from "./pages/galeria";
import { Contador } from "./pages/contador";
import { Game } from "./pages/game";
import { Mensagem } from "./pages/mensagem";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/motivos" element={<Motivos />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/contador" element={<Contador />} />
        <Route path="/game" element={<Game />} />
        <Route path="/mensagem" element={<Mensagem />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
