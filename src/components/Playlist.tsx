import { useEffect, useRef, useState } from "react";
import { Menu, X, SkipBack, SkipForward, Play, Pause } from "lucide-react";
import type { YouTubePlayer } from "react-youtube";
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
    id: "0CEkbD3nepI",
  },
  {
    title: "Pra Você Guardei o Amor",
    artist: "Nando Reis",
    id: "sB8_zYjxSGg",
  },
  { title: "Fade Into You", artist: "Mazzy Star", id: "ImKY6TZEyrI" },
  { title: "Velha Infância", artist: "Tribalistas", id: "v8nN6nN2B2k" },
  { title: "Dandelions", artist: "Ruth B", id: "W8a4sUabCUo" },
  { title: "Only", artist: "Lee Hi", id: "1zQXPyo6WDw" },
  { title: "Aliança", artist: "Tribalistas", id: "3JiMr-HgHJ8" },
];

export function TumblrPlaylist({ onClose }: { onClose: () => void }) {
  const playerRef = useRef<YouTubePlayer | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [playerReady, setPlayerReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [open, setOpen] = useState(false);
  const [volume, setVolume] = useState(35);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const currentTrack = tracks[currentIndex];

  // 🔄 troca de música
  useEffect(() => {
    if (!playerRef.current || !playerReady) return;

    try {
      setCurrentTime(0);
      setDuration(0);

      playerRef.current.loadVideoById({
        videoId: currentTrack.id,
        startSeconds: 0,
      });
    } catch (e) {
      console.error("Erro ao trocar música", e);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, playerReady]);

  // ⏱️ tempo da barra
  useEffect(() => {
    if (!playerReady || !playing) return;

    const interval = setInterval(() => {
      if (!playerRef.current) return;
      setCurrentTime(playerRef.current.getCurrentTime());
    }, 400);

    return () => clearInterval(interval);
  }, [playerReady, playing]);

  const togglePlay = () => {
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
    setPlaying(true);
    setCurrentIndex((i) => (i + 1) % tracks.length);
  };

  const prev = () => {
    setPlaying(true);
    setCurrentIndex((i) => (i - 1 + tracks.length) % tracks.length);
  };

  const seekTo = (v: number) => {
    if (!playerRef.current) return;
    playerRef.current.seekTo(v, true);
    setCurrentTime(v);
  };

  const formatTime = (t: number) => {
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <section
      className="
    fixed bottom-6 right-6 z-50
    w-72
    space-y-6
    bg-[#FFF7F3]/90 backdrop-blur
    rounded-2xl p-5 shadow-xl
    animate-fade-in
  "
    >
      <YoutubePlayer
        videoId={currentTrack.id}
        playerRef={playerRef}
        volume={volume}
        onReady={() => setPlayerReady(true)}
        onStateChange={(e: YT.OnStateChangeEvent) => {
          if (!playerRef.current) return;

          const playerState = e.target.getPlayerState();

          // 🔊 garante volume persistente
          if (
            playerState === window.YT.PlayerState.CUED ||
            playerState === window.YT.PlayerState.PLAYING
          ) {
            playerRef.current.setVolume(volume);
          }

          if (playerState === window.YT.PlayerState.CUED && playing) {
            playerRef.current.playVideo();
          }

          if (playerState === window.YT.PlayerState.PLAYING) {
            setDuration(playerRef.current.getDuration());
            setPlaying(true);
          }

          if (playerState === window.YT.PlayerState.PAUSED) {
            setPlaying(false);
          }

          if (playerState === window.YT.PlayerState.ENDED) {
            next();
          }
        }}
      />

      <header className="flex justify-between">
        <h2 className="font-serif lowercase text-xl">now playing</h2>
        <div className="flex gap-2">
          <button onClick={() => setOpen(true)}>
            <Menu />
          </button>
          <button onClick={onClose}>
            <X />
          </button>
        </div>
      </header>

      <div>
        <p>{currentTrack.title}</p>
        <p className="italic opacity-60">{currentTrack.artist}</p>
      </div>

      <div className="flex justify-center gap-6">
        <button onClick={prev}>
          <SkipBack />
        </button>
        <button onClick={togglePlay}>{playing ? <Pause /> : <Play />}</button>
        <button onClick={next}>
          <SkipForward />
        </button>
      </div>

      <div>
        <input
          type="range"
          min={0}
          max={duration || 0}
          value={currentTime}
          onChange={(e) => seekTo(Number(e.target.value))}
          className="w-full accent-[#C48B9F]"
        />
        <div className="flex justify-between text-xs opacity-60">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div className="flex justify-center gap-2">
        <span className="text-xs">vol</span>
        <input
          type="range"
          min={0}
          max={100}
          value={volume}
          onChange={(e) => {
            const v = Number(e.target.value);
            setVolume(v);
            playerRef.current?.setVolume(v);
          }}
          className="w-32 accent-[#C48B9F]"
        />
      </div>

      <div
        className={`
          absolute inset-0 z-50 rounded-2xl
          bg-[#FFF7F3]/90 backdrop-blur
          transition-all duration-500
          ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      >
        <div className="p-6">
          <header className="flex justify-between mb-4">
            <h3 className="font-serif lowercase text-lg">playlist</h3>
            <button onClick={() => setOpen(false)}>
              <X size={20} />
            </button>
          </header>

          <ul className="space-y-3 max-h-64 overflow-y-auto pr-2">
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
