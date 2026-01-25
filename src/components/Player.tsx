import YouTube, { type YouTubePlayer } from "react-youtube";
import type { MutableRefObject } from "react";

type Props = {
  videoId: string;
  playerRef: MutableRefObject<YouTubePlayer | null>;
  playing: boolean;
  volume: number;
  onEnd: () => void;
};

export function YoutubePlayer({
  videoId,
  playerRef,
  playing,
  volume,
  onEnd,
}: Props) {
  return (
    <YouTube
      videoId={videoId}
      opts={{
        height: "0",
        width: "0",
        playerVars: {
          autoplay: 0,
          controls: 0,
        },
      }}
      onReady={(event) => {
        playerRef.current = event.target;
        event.target.setVolume(volume); // aplica volume inicial
      }}
      onStateChange={(event) => {
        // terminou
        if (event.data === 0) onEnd();

        // CUED ou PLAYING → reaplica volume
        if (event.data === 5 || event.data === 1) {
          event.target.setVolume(volume);
        }

        // começa a tocar automaticamente se deve
        if (event.data === 5 && playing) {
          event.target.playVideo();
        }

        // pausa se estado não bate
        if (event.data === 1 && !playing) {
          event.target.pauseVideo();
        }
      }}
    />
  );
}
