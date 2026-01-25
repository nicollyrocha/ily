import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { TumblrPlaylist } from "../components/Playlist";

export function MainLayout() {
  return (
    <>
      <Header />

      <main className="pt-24">
        <Outlet />
      </main>

      {/* Player flutuante */}
      <div className="fixed bottom-6 right-6 z-50">
        <TumblrPlaylist />
      </div>
    </>
  );
}
