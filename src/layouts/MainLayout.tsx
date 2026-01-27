import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { TumblrPlaylist } from "../components/Playlist";
import { useState } from "react";

export function MainLayout() {
  const [showPlayer, setShowPlayer] = useState(true);

  return (
    <>
      <Header />

      <main className="pt-24">
        <Outlet />
      </main>

      <button
        onClick={() => setShowPlayer(true)}
        className={`fixed bottom-6 right-6 z-40
             bg-[#5C2A3D] text-white
             px-4 py-3 rounded-full shadow-lg
             hover:scale-105 transition
             ${showPlayer ? "hidden" : ""}`}
      >
        🎵 Player
      </button>

      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${showPlayer ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
      >
        <TumblrPlaylist onClose={() => setShowPlayer(false)} />
      </div>
    </>
  );
}
