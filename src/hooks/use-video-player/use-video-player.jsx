import {useEffect} from "react";

export const useVideoPlayer = (videoRef, onCurrentTimeChange, resetAfterPause, isPlaying) => {
  useEffect(() => {
    const video = videoRef.current;

    video.ontimeupdate = () => {
      const currentTime = Math.floor(video.currentTime);

      if (onCurrentTimeChange) {
        onCurrentTimeChange(currentTime);
      }
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (isPlaying) {
      video.play();
    } else {
      video.pause();

      if (resetAfterPause) {
        video.load();
      }
    }
  }, [isPlaying, resetAfterPause]);
};
