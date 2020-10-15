import React from "react";
import PropTypes from "prop-types";

const VideoPlayer = (props) => {
  const {
    isMuted = false,
    src,
    poster,
    width,
    height,
    videoStyles,
  } = props;

  return (
    <video
      src={src}
      poster={poster}
      muted={isMuted}
      width={width}
      height={height}
      style={videoStyles}
    />
  );
};

VideoPlayer.propTypes = {
  isMuted: PropTypes.bool,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  videoStyles: PropTypes.object,
};

export default VideoPlayer;
