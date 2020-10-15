import React, {createRef, PureComponent} from "react";
import PropTypes from "prop-types";

const HOVER_TIME_TO_PLAY = 1000;

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };

    this._videoRef = createRef();
    this._hoverTimerId = null;

    this._handleVideoMouseOver = this._handleVideoMouseOver.bind(this);
    this._handleVideoMouseOut = this._handleVideoMouseOut.bind(this);
  }

  _handleVideoMouseOver() {
    this._hoverTimerId = setTimeout(() => this.setState({
      isPlaying: true,
    }), HOVER_TIME_TO_PLAY);
  }

  _handleVideoMouseOut() {
    clearTimeout(this._hoverTimerId);
    this._hoverTimerId = null;

    this.setState({
      isPlaying: false,
    });
  }

  componentDidMount() {
    const video = this._videoRef.current;

    video.onplay = () => this.setState({
      isPlaying: true,
    });

    video.onpause = () => this.setState({
      isPlaying: false,
    });
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.onplay = null;
    video.onpause = null;
  }

  render() {
    const {
      isMuted = false,
      src,
      poster,
      width,
      height,
      videoStyles,
    } = this.props;

    return (
      <div
        className="small-movie-card__image"
        onMouseOver={this._handleVideoMouseOver}
        onMouseOut={this._handleVideoMouseOut}
      >
        <video
          src={src}
          poster={poster}
          muted={isMuted}
          width={width}
          height={height}
          style={videoStyles}
          ref={this._videoRef}
        />
      </div>
    );
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.state.isPlaying) {
      video.play();
    } else {
      video.pause();
      video.load();
    }
  }
}


VideoPlayer.propTypes = {
  isMuted: PropTypes.bool,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  videoStyles: PropTypes.object,
};

export default VideoPlayer;
