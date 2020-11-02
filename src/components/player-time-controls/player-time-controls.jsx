import React from "react";
import PropTypes from "prop-types";

const PlayerControlsTime = (props) => {
  const {
    runtime,
    currentTime,
  } = props;

  const timeLeft = runtime - currentTime;
  const timeInPercent = Math.round(currentTime / runtime * 100);

  return (
    <div className="player__controls-row">
      <div className="player__time">
        <progress className="player__progress" value={timeInPercent} max="100"></progress>
        <div className="player__toggler" style={{left: `${timeInPercent}%`}}>Toggler</div>
      </div>
      <div className="player__time-value">{timeLeft}</div>
    </div>
  );
};

PlayerControlsTime.propTypes = {
  runtime: PropTypes.number.isRequired,
  currentTime: PropTypes.number.isRequired,
};

export default PlayerControlsTime;
