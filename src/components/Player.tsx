import type { RefObject } from "react";
import YouTube from "react-youtube";
import type { YouTubePlayer, YouTubeProps } from "react-youtube";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace YT {
    interface OnStateChangeEvent {
      target: YouTubePlayer;
    }
  }
}

interface PlayerProps {
  videoId: string;
  playerRef: RefObject<YouTubePlayer | null>;
  volume: number;
  onReady?: () => void;
  onStateChange?: (event: YT.OnStateChangeEvent) => void;
}

export function YoutubePlayer({
  videoId,
  playerRef,
  volume,
  onReady,
  onStateChange,
}: PlayerProps) {
  const opts: YouTubeProps["opts"] = {
    height: "0",
    width: "0",
    playerVars: {
      autoplay: 0, // 🔥 começa pausado
      controls: 0,
      rel: 0,
      modestbranding: 1,
    },
  };

  return (
    <YouTube
      videoId={videoId}
      opts={opts}
      onReady={(e) => {
        playerRef.current = e.target;
        e.target.setVolume(volume);
        onReady?.();
      }}
      onStateChange={onStateChange}
    />
  );
}
