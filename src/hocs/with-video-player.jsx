import React, {PureComponent, createRef} from "react";
import VideoPlayer from "../components/video-player/video-player";

const HOVER_TIME_TO_PLAY = 1000;

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
      };

      this._videoRef = createRef();
      this._hoverTimerId = null;

      this._handleVideoMouseOver = this._handleVideoMouseOver.bind(this);
      this._handleVideoMouseLeave = this._handleVideoMouseLeave.bind(this);
    }

    _handleVideoMouseOver() {
      this._hoverTimerId = setTimeout(() => this.setState({
        isPlaying: true,
      }), HOVER_TIME_TO_PLAY);
    }

    _handleVideoMouseLeave() {
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
      return (
        <Component
          {...this.props}
          renderPlayer={({fullSizePoster, video, width, height, videoStyles}) => (
            <VideoPlayer
              reference={this._videoRef}
              poster={fullSizePoster}
              src={video}
              width={width}
              height={height}
              videoStyles={videoStyles}
              isMuted
            />
          )}
          mouseOverHandler={this._handleVideoMouseOver}
          mouseLeaveHandler={this._handleVideoMouseLeave}
        />
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

  WithVideoPlayer.propTypes = {};

  return WithVideoPlayer;
};

export default withVideoPlayer;
