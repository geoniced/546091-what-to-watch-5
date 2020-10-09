import React from "react";
import PropTypes from "prop-types";

const PlayerScreen = (props) => {
  const {
    video,
    runtime,
    fullSizePoster, // Я даже не знаю нужно ли это, постер к фильму у тега video
    title,
  } = props.film;

  return (
    <div className="player">
      <video src={video} className="player__video" poster={fullSizePoster}></video>

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
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
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
};

PlayerScreen.propTypes = {
  film: PropTypes.shape({
    video: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    fullSizePoster: PropTypes.string.isRequired,
    runtime: PropTypes.string.isRequired,
  }).isRequired,
};

export default PlayerScreen;
