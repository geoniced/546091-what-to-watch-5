import React from "react";
import PropTypes from "prop-types";

const VideoPlayer = (props) => {
  const {isMuted = false, src, poster} = props;

  return (
    <video
      src={src}
      poster={poster}
      muted={isMuted}
    />
  );
};

VideoPlayer.propTypes = {
  isMuted: PropTypes.bool,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default VideoPlayer;
