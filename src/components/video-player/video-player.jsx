import React, {createRef} from "react";
import PropTypes from "prop-types";
import {useVideoPlayer} from "../../hooks/use-video-player/use-video-player";

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
