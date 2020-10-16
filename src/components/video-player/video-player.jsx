import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      isMuted = false,
      src,
      poster,
      width,
      height,
      videoStyles,
      reference,
    } = this.props;

    return (
      <video
        src={src}
        poster={poster}
        muted={isMuted}
        width={width}
        height={height}
        style={videoStyles}
        ref={reference}
      />
    );
  }
}


VideoPlayer.propTypes = {
  isMuted: PropTypes.bool,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  videoStyles: PropTypes.object,
  reference: PropTypes.object.isRequired,
};

export default VideoPlayer;
