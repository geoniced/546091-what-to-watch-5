import React, {PureComponent} from "react";
import VideoPlayer from "../../components/video-player/video-player";

const HOVER_TIME_TO_ACTIVE = 1000;

const withActivePlayer = (Component) => {
  class WithActivePlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: -1,
      };

      this._timerId = null;

      this._handleMouseOver = this._handleMouseOver.bind(this);
      this._handleMouseLeave = this._handleMouseLeave.bind(this);
    }

    _handleMouseOver(itemId) {
      this._timerId = setTimeout(() => {
        if (this._timerId) {
          this.setState({
            activeItem: itemId,
          });
        }
      }, HOVER_TIME_TO_ACTIVE);
    }

    _handleMouseLeave() {
      clearTimeout(this._timerId);
      this._timerId = null;

      this.setState({
        activeItem: -1,
      });
    }

    componentWillUnmount() {
      clearTimeout(this._timerId);
      this._timerId = null;
    }

    render() {
      const {activeItem} = this.state;

      return (
        <Component
          {...this.props}
          mouseOverHandler={this._handleMouseOver}
          mouseLeaveHandler={this._handleMouseLeave}

          renderPlayer={({filmId, fullSizePoster, video, width, height, videoStyles}) => (
            <VideoPlayer
              isPlaying={activeItem === filmId}
              poster={fullSizePoster}
              src={video}
              width={width}
              height={height}
              videoStyles={videoStyles}
              resetAfterPause
              isMuted
            />
          )}
        />
      );
    }
  }

  WithActivePlayer.propTypes = {};

  return WithActivePlayer;
};

export default withActivePlayer;
