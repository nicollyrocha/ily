import { useRef, useState, useEffect } from "react";
import type { YouTubePlayer } from "react-youtube";
import { Menu, X, SkipBack, SkipForward, Play, Pause } from "lucide-react";
import { YoutubePlayer } from "./Player";

const tracks = [
  { title: "Ainda Bem", artist: "Vanessa da Mata", id: "h9-LLQqAOXQ" },
  { title: "Real Men", artist: "beabadoobee", id: "1oT4YcVuqCw" },
  { title: "Yellow", artist: "Coldplay", id: "yKNxeF4KMsY" },
  { title: "Partilhar", artist: "Rubel", id: "hlAjJAlN7u0" },
  { title: "Como Eu Quero", artist: "Kid Abelha", id: "mWynalx323E" },
  { title: "Everything I Want", artist: "beabadoobee", id: "PK-HMe3jFbw" },
  {
    title: "De Janeiro a Janeiro",
    artist: "Roberta Campos & Nando Reis",
    id: "n0B3S6e4pKo",
  },
  { title: "Pra Você Guardei o Amor", artist: "Nando Reis", id: "Kp7eSUU9oy8" },
  { title: "Fade Into You", artist: "Mazzy Star", id: "ImKY6TZEyrI" },
  { title: "Velha Infância", artist: "Tribalistas", id: "v8nN6nN2B2k" },
  { title: "Dandelions", artist: "Ruth B", id: "W8a4sUabCUo" },
  { title: "Only", artist: "Lee Hi", id: "1zQXPyo6WDw" },
  { title: "Aliança", artist: "Tribalistas", id: "3JiMr-HgHJ8" },
];

export function TumblrPlaylist() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [open, setOpen] = useState(false);
  const [volume, setVolume] = useState(35);

  const playerRef = useRef<YouTubePlayer | null>(null);
  const currentTrack = tracks[currentIndex];

  // 🔄 troca de música
  useEffect(() => {
    if (!playerRef.current) return;
    playerRef.current.loadVideoById(currentTrack.id);
  }, [currentTrack.id]);

  // 🔊 mantém volume
  useEffect(() => {
    if (!playerRef.current) return;
    playerRef.current.setVolume(volume);
  }, [volume]);

  const playPause = () => {
    if (!playerRef.current) return;

    if (playing) {
      playerRef.current.pauseVideo();
      setPlaying(false);
    } else {
      playerRef.current.playVideo();
      setPlaying(true);
    }
  };

  const next = () => {
    setCurrentIndex((i) => (i + 1) % tracks.length);
    setPlaying(true);
  };

  const prev = () => {
    setCurrentIndex((i) => (i - 1 + tracks.length) % tracks.length);
    setPlaying(true);
  };

  return (
    <section className="relative max-w-md mx-auto space-y-6 text-sm">
      {/* Player invisível */}
      <YoutubePlayer
        videoId={currentTrack.id}
        playerRef={playerRef}
        playing={playing}
        onEnd={next}
        volume={volume}
      />

      {/* Header */}
      <header className="flex items-center justify-between">
        <h2 className="font-serif text-xl opacity-80 lowercase">now playing</h2>
        <button onClick={() => setOpen(true)}>
          <Menu size={22} />
        </button>
      </header>

      {/* Música atual */}
      <div className="space-y-1">
        <p className="text-base">{currentTrack.title}</p>
        <p className="italic opacity-60">{currentTrack.artist}</p>
      </div>

      {/* Controles */}
      <div className="flex items-center justify-center gap-6">
        <button onClick={prev}>
          <SkipBack size={18} />
        </button>

        <button onClick={playPause}>
          {playing ? <Pause size={20} /> : <Play size={20} />}
        </button>

        <button onClick={next}>
          <SkipForward size={18} />
        </button>
      </div>

      {/* Volume */}
      <div className="flex items-center gap-3 justify-center">
        <span className="text-xs opacity-60">vol</span>
        <input
          type="range"
          min={0}
          max={100}
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          className="w-32 accent-[#C48B9F]"
        />
      </div>

      {/* MENU SUAVE (sempre montado) */}
      <div
        className={`
          w-52
          absolute left-[calc(-100%+8rem)] right-0 top-0 z-50
          bg-[#FFF7F3]/80 backdrop-blur-md
          rounded-2xl
          transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            open
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }
        `}
      >
        <div
          className={`
            p-6 space-y-6
            transition-all duration-500 delay-75
            ${open ? "opacity-100 scale-100" : "opacity-0 scale-95"}
          `}
        >
          <header className="flex justify-between">
            <h3 className="font-serif lowercase text-lg">playlist</h3>
            <button onClick={() => setOpen(false)}>
              <X size={20} />
            </button>
          </header>

          <ul
            className="
              space-y-3
              max-h-36
              overflow-y-auto
              pr-2
              scrollbar-thin
              scrollbar-thumb-[#C48B9F]/60
              scrollbar-track-transparent
            "
          >
            {tracks.map((track, index) => (
              <li
                key={track.id}
                onClick={() => {
                  setCurrentIndex(index);
                  setPlaying(true);
                  setOpen(false);
                }}
                className={`cursor-pointer transition ${
                  index === currentIndex
                    ? "opacity-100"
                    : "opacity-50 hover:opacity-80"
                }`}
              >
                {track.title}
                <span className="italic opacity-60"> — {track.artist}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
