import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      video.pause();
      video.load();
    }
  }

  render() {
    const {
      isMuted = false,
      src,
      poster,
      width,
      height,
      videoStyles,
      additionalClasses,
    } = this.props;

    return (
      <video
        className={additionalClasses}
        src={src}
        poster={poster}
        muted={isMuted}
        width={width}
        height={height}
        style={videoStyles}
        ref={this._videoRef}
      />
    );
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  isMuted: PropTypes.bool,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  videoStyles: PropTypes.object,
  additionalClasses: PropTypes.string,
};

export default VideoPlayer;
