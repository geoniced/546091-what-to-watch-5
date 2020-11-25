import React, {createRef, useEffect} from "react";
import PropTypes from "prop-types";

const useVideoPlayer = (videoRef, onCurrentTimeChange, resetAfterPause, isPlaying) => {
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
  });
};

const VideoPlayer = (props) => {
  const {
    isMuted = false,
    src,
    poster,
    width,
    height,
    videoStyles,
    additionalClasses,
    onCurrentTimeChange,
    resetAfterPause,
    isPlaying
  } = props;

  const videoRef = createRef();

  useVideoPlayer(videoRef, onCurrentTimeChange, resetAfterPause, isPlaying);

  return (
    <video
      className={additionalClasses}
      src={src}
      poster={poster}
      muted={isMuted}
      width={width}
      height={height}
      style={videoStyles}
      ref={videoRef}
    />
  );
};

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  isMuted: PropTypes.bool,
  resetAfterPause: PropTypes.bool,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  videoStyles: PropTypes.object,
  additionalClasses: PropTypes.string,
  onCurrentTimeChange: PropTypes.func,
};

export default VideoPlayer;
