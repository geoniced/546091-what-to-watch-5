import React, {Fragment, PureComponent} from "react";
import {FilmTypes} from "../../prop-types-validations";
import VideoPlayer from "../video-player/video-player";

const getPlayerPlayButtonTemplate = (isPlaying) => {
  if (isPlaying) {
    return (
      <Fragment>
        <svg viewBox="0 0 14 21" width="14" height="21">
          <use xlinkHref="#pause"></use>
        </svg>
        <span>Pause</span>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </Fragment>
  );
};

class PlayerScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };

    this._handleButtonClick = this._handleButtonClick.bind(this);
  }

  _handleButtonClick() {
    if (this.state.isPlaying) {
      this._pauseVideo();
    } else {
      this._playVideo();
    }
  }

  _playVideo() {
    this.setState({
      isPlaying: true,
    });
  }

  _pauseVideo() {
    this.setState({
      isPlaying: false,
    });
  }

  render() {
    const {
      video,
      runtime,
      fullSizePoster,
      title,
    } = this.props.film;

    const {isPlaying} = this.state;
    const playerPlayButtonTemplate = getPlayerPlayButtonTemplate(isPlaying);

    return (
      <div className="player">
        <VideoPlayer
          isPlaying={isPlaying}
          additionalClasses="player__video"
          src={video}
          poster={fullSizePoster}
        />

        <button type="button" className="player__exit">Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value="30" max="100"></progress>
              <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
            </div>
            <div className="player__time-value">{runtime}</div>
          </div>

          <div className="player__controls-row">
            <button
              type="button"
              className="player__play"
              onClick={this._handleButtonClick}
            >
              {playerPlayButtonTemplate}
            </button>
            <div className="player__name">{title}</div>

            <button type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

PlayerScreen.propTypes = {
  film: FilmTypes.filmCard,
};

export default PlayerScreen;
